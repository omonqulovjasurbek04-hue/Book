import { useState } from 'react'
import booksImg from '../assets/Books1.png'

export default function OrderForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', agreed: false })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSuccess(true)
      setFormData({ name: '', phone: '', agreed: false })
      setLoading(false)
    }, 800)
  }

  return (
    <section id="contact" className="px-5 max-w-[1240px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 min-h-[400px]">
        
        {/* Chap blok: Chegirma ma'lumoti */}
        <div className="bg-[#e4efff] rounded-[24px] p-8 md:p-10 flex flex-col relative overflow-hidden group">
          <div className="z-10 relative">
            <h3 className="text-[#51368a] text-[1.4rem] md:text-3xl font-black uppercase mb-1 leading-tight tracking-wide">
              SIZNING<br />
              <span className="flex items-center gap-2">CHEGIRMANGIZ <span className="text-[#de897f] text-4xl md:text-[2.5rem]">10%</span></span>
            </h3>
            
            <div className="text-[#333] text-xs font-semibold mb-6 mt-6">
              <p>Chegirma boshlanadi: 25 mart</p>
              <p>Chegirma tugaydi: 24 aprel</p>
            </div>

            <div className="mt-4">
              <p className="text-[#51368a] font-bold text-lg mb-1">Audio kurs narxi</p>
              <p className="text-gray-400 font-bold line-through text-sm">1.200.000 so'm</p>
              <p className="text-[#ec6e47] text-[1.7rem] font-black">533.000 so'm</p>
            </div>
          </div>
          
          <img 
            src={booksImg} 
            className="w-[200px] md:w-[280px] absolute right-[-20px] bottom-[-30px] z-[5] drop-shadow-xl" 
            alt="Books bundle" 
          />
        </div>

        {/* O'ng blok: Forma */}
        <div className="bg-[#e6ebff] rounded-[24px] p-8 md:p-10 flex flex-col justify-center">
          <h3 className="text-[#51368a] text-lg md:text-xl font-black uppercase tracking-wide mb-8">
            BUYURTMA BERISH UCHUN<br />
            FORMANI TO'LDIRING
          </h3>
          
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm font-semibold">
              Buyurtmangiz qabul qilindi!
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="border-b border-gray-300 pb-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ism"
                className="w-full bg-transparent border-none focus:ring-0 outline-none text-[#51368a] placeholder-gray-400 text-[15px] font-medium px-2"
                required
              />
            </div>
            
            <div className="border-b border-gray-300 pb-2">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon"
                className="w-full bg-transparent border-none focus:ring-0 outline-none text-[#51368a] placeholder-gray-400 text-[15px] font-medium px-2"
                required
              />
            </div>

            <div className="flex items-start gap-3 mt-2">
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 cursor-pointer accent-[#cd40cd]"
                required
              />
              <label htmlFor="agreed" className="text-xs text-[#555] cursor-pointer leading-tight">
                Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-[180px] bg-[#cc40ce] hover:bg-[#b034b1] text-white font-bold py-3.5 rounded-full text-sm shadow-md transition-colors"
            >
              Buyurtma berish
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}