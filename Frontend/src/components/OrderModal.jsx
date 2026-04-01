import { useState, useContext, useEffect } from 'react'
import api from '../api'
import books1 from '../assets/Books1.png'
import books2 from '../assets/Books2.png'
import books3 from '../assets/Books3.png'
import { ModalContext } from '../App'

export default function OrderModal() {
  const { isModalOpen, setModalOpen } = useContext(ModalContext)
  const [formData, setFormData] = useState({ name: '', phone: '', agreed: false })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Oyna ochilganda body scrolni qulflash
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  if (!isModalOpen) return null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/orders', {
        name: formData.name,
        phone: formData.phone,
        comment: formData.agreed ? "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz - Checkbox tanlangan" : ""
      })
      setSuccess(true)
      setFormData({ name: '', phone: '', agreed: false })
      setTimeout(() => {
        setSuccess(false)
        setModalOpen(false)
      }, 2000)
    } catch (error) {
      console.error("Buyurtma yuborishda xatolik:", error)
      alert("Xatolik yuz berdi. Iltimos qayta urinib ko'ring.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setModalOpen(false)}
      ></div>
      
      {/* Modal Content */}
      <div className="bg-[#614385] w-full max-w-[1000px] rounded-[30px] shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden min-h-[450px]">
        
        {/* Yopish tugmasi */}
        <button 
          onClick={() => setModalOpen(false)}
          className="absolute top-5 right-5 z-50 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M1 1l12 12m0-12L1 13" />
          </svg>
        </button>

        {/* Chap blok: Forma */}
        <div className="flex-1 p-8 md:p-14 flex flex-col justify-center relative z-20">
          <h2 className="text-white text-[22px] md:text-[32px] font-bold uppercase leading-tight md:leading-[1.3] mb-8 md:mb-10 w-full md:max-w-[85%]">
            BUYURTMA BERISH UCHUN FORMANI TO'LDIRING
          </h2>

          {success ? (
            <div className="p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-100 font-semibold mb-6">
              Buyurtmangiz muvaffaqiyatli qabul qilindi!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-7 w-full md:max-w-[90%]">
              
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ism"
                required
                className="w-full bg-transparent border-0 border-b border-[#a48abf] px-0 py-2.5 text-white placeholder-[#b8a2d1] focus:ring-0 focus:border-white transition-colors text-[15px]"
              />
              
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon"
                required
                className="w-full bg-transparent border-0 border-b border-[#a48abf] px-0 py-2.5 text-white placeholder-[#b8a2d1] focus:ring-0 focus:border-white transition-colors text-[15px]"
              />

              <div className="flex items-start gap-4 mt-4">
                <input
                  type="checkbox"
                  id="modal-agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                  className="mt-1 w-[18px] h-[18px] rounded-[4px] border-[#a48abf] bg-white/10 text-[#c24cd2] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                />
                <label htmlFor="modal-agreed" className="text-[#d8caeb] text-[13px] leading-snug cursor-pointer select-none">
                  Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz
                </label>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-[200px] bg-gradient-to-r from-[#ba43cd] to-[#d846b8] hover:opacity-90 text-white font-bold py-3.5 rounded-full shadow-[0_4px_15px_rgba(186,67,205,0.4)] transition-all disabled:opacity-70 text-[15px]"
                >
                  {loading ? 'Kuting...' : 'Buyurtma berish'}
                </button>
              </div>

            </form>
          )}
        </div>

        {/* O'ng blok: Rasmlar */}
        <div className="hidden md:flex flex-1 relative overflow-hidden items-center justify-center">
          {/* Peach aylanma fon */}
          <div className="absolute top-[10%] -right-[20%] w-[120%] h-[120%] rounded-full bg-[#f2a68d] shadow-inner opacity-90 pointer-events-none"></div>
          
          <div className="relative w-full h-full min-h-[400px] flex items-center justify-center z-10">
            {/* Kitob 3 */}
            <img 
              src={books3} 
              alt="Book 3" 
              className="absolute w-[35%] right-[55%] -rotate-[20deg] drop-shadow-2xl z-0 -translate-y-[10%]"
            />
            {/* Kitob 2 */}
            <img 
              src={books2} 
              alt="Book 2" 
              className="absolute w-[32%] left-[55%] rotate-[10deg] drop-shadow-2xl z-10 translate-y-[5%]"
            />
            {/* Asosiy Kitob 1 */}
            <img 
              src={books1} 
              alt="Book 1" 
              className="absolute w-[45%] z-20 rotate-[15deg] drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
