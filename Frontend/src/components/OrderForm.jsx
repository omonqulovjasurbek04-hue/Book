import { useState } from 'react'
import books1 from '../assets/Books1.png'
import books2 from '../assets/Books2.png'
import books3 from '../assets/Books3.png'

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
    <section id="contact" className="px-5 py-10 max-w-[1240px] mx-auto pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 min-h-auto flex items-stretch">
        
        {/* Chap blok: Chegirma ma'lumoti */}
        <div className="bg-[#eaf1ff] rounded-[20px] p-6 sm:p-8 md:p-12 flex flex-col relative overflow-hidden min-h-[440px] md:min-h-[559px] w-full">
          
          {/* Orqadagi pushti foni (Ellipse 307) - Figmadan olingan gradient va piksellar */}
          <div className="absolute top-[200px] -right-[100px] md:top-[269px] md:-right-[169px] w-[350px] md:w-[529px] aspect-square bg-gradient-to-b from-[#e98f8e] to-[#eeae8c] rounded-full pointer-events-none z-0"></div>

          <div className="z-10 relative flex flex-col h-full">
            <h3 className="text-[#594285] text-2xl sm:text-3xl md:text-[38px] font-bold uppercase leading-snug tracking-wide">
              SIZNING
            </h3>
            {/* Ostiga aniq chegaralangan chiziq */}
            <div className="flex items-baseline gap-2 md:gap-3 mt-1 border-b-2 border-[#b5a7db] pb-1 md:pb-2 w-max max-w-full">
              <span className="text-[#594285] text-[22px] sm:text-3xl md:text-[38px] font-bold uppercase tracking-wide">CHEGIRMANGIZ</span>
              <span className="text-[#f1957c] text-[40px] sm:text-[55px] md:text-[75px] font-black leading-none">10%</span>
            </div>
            
            <div className="text-gray-700 text-[13px] md:text-[14px] mt-8 md:mt-10 mb-6 md:mb-8 space-y-1.5 font-medium">
              <p>Chegirma boshlanadi: <span className="font-bold text-gray-900">25 mart</span></p>
              <p>Chegirma tugaydi: <span className="font-bold text-gray-900">24 aprel</span></p>
            </div>

            <div className="mt-4 mb-48 md:mb-0">
              <p className="text-[#674f98] font-bold text-lg md:text-[24px] mb-1 md:mb-2">Audio kurs narxi</p>
              <p className="text-[#f1957c] font-medium line-through decoration-2 opacity-80 text-[16px] md:text-[18px]">
                1.200.000 so'm
              </p>
              <p className="text-[#f1957c] text-[28px] md:text-[36px] font-black mt-1">
                533.000 so'm
              </p>
            </div>
          </div>
          
          {/* Books Cluster - Anchor by TOP distance to prevent vertical text collisions */}
          <div className="absolute right-0 top-0 w-full h-full z-20 pointer-events-none">
             {/* Book 3 (Left, chap tarafdagi qiya kitob) */}
             <img 
               src={books3} 
               className="absolute w-[120px] md:w-[167px] top-[240px] md:bottom-auto md:top-[299px] right-[130px] md:right-[217px] -rotate-[29deg] drop-shadow-xl opacity-95 transition-transform z-0" 
               alt="Book 3" 
             />
             
             {/* Book 2 (Right, o'ng tarafdagi orqa kitob) */}
             <img 
               src={books2} 
               className="absolute w-[110px] md:w-[154px] top-[230px] md:bottom-auto md:top-[279px] -right-[20px] md:-right-[61px] rotate-0 drop-shadow-lg opacity-90 transition-transform z-[5]" 
               alt="Book 2" 
             />
             
             {/* Book 1 (Front, asosiy kitob, 15 gradus burilgan) */}
             <img 
               src={books1} 
               className="absolute w-[170px] md:w-[235px] top-[180px] md:bottom-auto md:top-[222px] right-[30px] md:right-[66px] rotate-[15deg] z-10 transition-transform" 
               style={{ filter: 'drop-shadow(-4px 0px 13px rgba(0,0,0,0.2))' }}
               alt="Book 1" 
             />
          </div>
        </div>

        {/* O'ng blok: Forma */}
        <div className="bg-[#eaf1ff] rounded-[20px] p-6 sm:p-8 md:p-12 flex flex-col h-full min-h-[400px]">
          <h3 className="text-[#594285] text-lg sm:text-xl md:text-[28px] font-bold uppercase tracking-wide mb-10 md:mb-14 leading-[1.6]">
            BUYURTMA BERISH UCHUN<br />
            FORMANI TO'LDIRING
          </h3>
          
          {success && (
            <div className="mb-6 p-3 bg-green-100 text-green-700 rounded-lg text-sm font-semibold">
              Buyurtmangiz qabul qilindi! O'zgarishlarsiz bog'lanamiz.
            </div>
          )}

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
              Buyurtma berish
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}