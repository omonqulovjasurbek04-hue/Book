import { useState } from 'react'
import api from '../api'
import books1 from '../assets/Books1.png'
import books2 from '../assets/Books2.png'
import books3 from '../assets/Books3.png'

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agreed: false,
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setErrorMessage('')

    try {
      await api.post('/orders', {
        name: formData.name,
        phone: formData.phone,
        book_id: 1,
        lang: 'uz',
        comment: formData.agreed ? "Checkbox tanlangan" : "",
      })

      setSuccess(true)
      setFormData({
        name: '',
        phone: '',
        agreed: false,
      })
    } catch (error) {
      console.error('Buyurtma yuborishda xatolik:', error)
      console.log('Backend data:', error.response?.data)

      if (error.response?.data?.message) {
        setErrorMessage(error.response.data.message)
      } else if (error.response?.data?.errors) {
        const firstError = Object.values(error.response.data.errors)[0]?.[0]
        setErrorMessage(firstError || "Buyurtma yuborilmadi. Qaytadan urinib ko‘ring.")
      } else {
        setErrorMessage("Buyurtma yuborilmadi. Qaytadan urinib ko‘ring.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="px-5 py-10 max-w-[1240px] mx-auto pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 min-h-auto flex items-stretch">
        <div className="bg-[#eaf1ff] border-2 border-[#1E90FF] rounded-[20px] p-6 pb-[250px] md:pb-12 md:p-12 flex flex-col relative overflow-hidden min-h-[440px] md:min-h-[559px] w-full">
          <div className="absolute top-[200px] -right-[100px] md:top-[269px] md:-right-[169px] w-[350px] md:w-[529px] aspect-square bg-gradient-to-b from-[#e98f8e] to-[#eeae8c] rounded-full pointer-events-none z-0 hidden md:block"></div>

          <div className="z-10 relative flex flex-col h-full">
            <h3 className="text-[#594285] text-[22px] md:text-[38px] font-semibold uppercase leading-tight tracking-wide">
              SIZNING
            </h3>

            <div className="flex items-end gap-1.5 md:gap-3 border-b-2 border-[#594285] pb-1 w-max">
              <span className="text-[#594285] text-[22px] md:text-[38px] font-semibold uppercase tracking-wide leading-none">
                CHEGIRMANGIZ
              </span>
              <span className="text-[#e29381] text-[40px] md:text-[75px] font-bold leading-none translate-y-[4px]">
                10%
              </span>
            </div>

            <div className="text-gray-800 text-[13.5px] md:text-[14px] mt-6 md:mt-8 mb-6 space-y-2 font-medium relative z-30">
              <p>Chegirma boshlanadi: <span className="font-bold text-black">25 mart</span></p>
              <p>Chegirma tugaydi: <span className="font-bold text-black">24 aprel</span></p>
            </div>

            <div className="mt-2 md:mt-4 text-left w-full h-full flex flex-col justify-start relative z-30">
              <p className="text-[#594285] font-bold text-[18px] md:text-[26px] mb-2 tracking-wide">
                Audio kurs narxi
              </p>
              <p className="text-[#e29381] font-semibold line-through decoration-1 text-[18px] md:text-[22px] mb-1">
                1.200.000 so'm
              </p>
              <p className="text-[#f76a3b] text-[28px] md:text-[36px] font-bold tracking-tight">
                533.000 so'm
              </p>
            </div>
          </div>

          <div className="absolute -bottom-[20px] -right-[20px] w-[255px] h-[255px] md:hidden z-20 pointer-events-none">
            <img
              src={books3}
              className="absolute w-[125px] top-[45px] left-[0px] -rotate-[12deg] drop-shadow-[0_8px_12px_rgba(0,0,0,0.2)] opacity-95 z-0"
              alt="Book 3"
            />
            <img
              src={books2}
              className="absolute w-[110px] top-[15px] right-[40px] rotate-[8deg] drop-shadow-md opacity-90 z-[5]"
              alt="Book 2"
            />
            <img
              src={books1}
              className="absolute w-[170px] top-[50px] -right-[5px] rotate-[15deg] z-10"
              style={{ filter: 'drop-shadow(-4px 0px 15px rgba(0,0,0,0.25))' }}
              alt="Book 1"
            />
          </div>

          <div className="absolute right-0 top-0 w-full h-full z-20 pointer-events-none hidden md:block">
            <img src={books3} className="absolute w-[167px] top-[299px] right-[217px] -rotate-[29deg] drop-shadow-xl opacity-95 z-0" alt="Book 3" />
            <img src={books2} className="absolute w-[154px] top-[279px] -right-[61px] rotate-0 drop-shadow-lg opacity-90 z-[5]" alt="Book 2" />
            <img src={books1} className="absolute w-[235px] top-[222px] right-[66px] rotate-[15deg] z-10" style={{ filter: 'drop-shadow(-4px 0px 13px rgba(0,0,0,0.2))' }} alt="Book 1" />
          </div>
        </div>

        <div className="bg-[#eaf1ff] rounded-[20px] p-6 sm:p-8 md:p-12 flex flex-col h-full min-h-[400px]">
          <h3 className="text-[#594285] text-lg sm:text-xl md:text-[28px] font-bold uppercase tracking-wide mb-10 md:mb-14 leading-[1.6]">
            BUYURTMA BERISH UCHUN
            <br />
            FORMANI TO'LDIRING
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
            <div className="flex flex-col gap-8 md:gap-10">
              <div className="relative border-b border-[#cdd5ea]">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ism"
                  className="w-full bg-transparent border-none px-0 py-2 focus:ring-0 outline-none text-[#51368a] placeholder-gray-500 text-[15px] md:text-[16px]"
                  required
                />
              </div>

              <div className="relative border-b border-[#cdd5ea]">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefon"
                  className="w-full bg-transparent border-none px-0 py-2 focus:ring-0 outline-none text-[#51368a] placeholder-gray-500 text-[15px] md:text-[16px]"
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-3 mt-10 md:mt-12 mb-auto">
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mt-1 w-4 h-4 md:w-5 md:h-5 cursor-pointer accent-[#a532b2] rounded-sm focus:ring-0 border-[#c4cce0] text-[#a532b2] bg-transparent"
                required
              />
              <label htmlFor="agreed" className="text-[13px] md:text-[14px] text-gray-700 cursor-pointer leading-[1.4] select-none pl-1 font-medium">
                Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-10 md:mt-12 w-full sm:w-[240px] bg-gradient-to-r from-[#943bd6] to-[#da43c4] hover:opacity-90 text-white font-bold py-[14px] md:py-[16px] rounded-full text-[15px] md:text-[16px] shadow-md transition-all focus:outline-none disabled:opacity-70"
            >
              {loading ? "Yuborilmoqda..." : "Buyurtma berish"}
            </button>

            {success && (
              <div className="mt-4 text-[#2ECC71] text-[18px] font-bold text-center w-full sm:w-[240px]">
                Tasdiqlandi
              </div>
            )}

            {errorMessage && (
              <div className="mt-4 text-red-500 text-sm font-medium text-center w-full sm:w-[240px]">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}