import { useState } from 'react'
import { useLanguage, translations } from '../context/LanguageContext'
import booksImg from '../assets/Books1.png'

export default function OrderForm() {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    agreed: false,
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (!formData.name.trim()) {
      setError(t.enterName)
      return
    }
    if (!formData.phone.trim()) {
      setError(t.enterPhone)
      return
    }
    if (!formData.agreed) {
      setError(t.agree)
      return
    }

    setLoading(true)

    try {
      // TODO: API endpoint'ni o'zingizga mosla
      // const response = await fetch('/api/orders', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      // if (!response.ok) throw new Error('Xatolik yuz berdi')
      
      // Hozircha demo uchun:
      setTimeout(() => {
        setSuccess(true)
        setFormData({ name: '', phone: '', agreed: false })
        setLoading(false)
      }, 800)
    } catch (err) {
      setError(err.message || 'Xatolik yuz berdi')
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="px-4 py-12 md:py-16 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        
        {/* Chap tomon: Chegirma kartasi */}
        <div className="bg-[#E5F0FF] rounded-[32px] p-8 flex items-center justify-between overflow-hidden relative animate-slideInUp">
          <div className="z-10">
            <h3 className="text-[#007AFF] text-2xl font-black uppercase mb-2">{t.discount} <span className="text-3xl">{t.discountPercent}</span></h3>
            <p className="text-gray-500 mb-6">{t.buyNow}</p>
            <div className="bg-white rounded-2xl p-4 shadow-md inline-block transform transition-all hover:scale-105">
              <p className="text-gray-400 line-through text-sm">{t.priceFull}</p>
              <p className="text-[#E74291] text-2xl font-black">{t.priceDiscount}</p>
            </div>
          </div>
          <img src={booksImg} className="w-40 md:w-60 absolute -right-5 bottom-0 rotate-12 drop-shadow-2xl" alt="Books" />
        </div>

        {/* O'ng tomon: Forma */}
        <div className="bg-[#F6E8FF] rounded-[32px] p-8 animate-slideInUp" style={{animationDelay: '0.2s'}}>
          <h3 className="text-[#4A2D7A] text-xl font-bold mb-6">{t.fillForm}</h3>
          
          {success && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-xl text-sm font-semibold animate-slideInUp">
              {t.success}
            </div>
          )}
          
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-xl text-sm font-semibold animate-slideInUp">
              {t.error} {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.enterName}
              className="w-full px-5 py-3 rounded-xl border-none focus:ring-2 focus:ring-purple-500 outline-none transition-all transform focus:scale-105"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.enterPhone}
              className="w-full px-5 py-3 rounded-xl border-none focus:ring-2 focus:ring-purple-500 outline-none transition-all transform focus:scale-105"
              required
            />
            <div className="flex items-start gap-2 py-2">
              <input
                type="checkbox"
                id="terms"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mt-1 w-4 h-4 cursor-pointer"
                required
              />
              <label htmlFor="terms" className="text-xs text-gray-500 cursor-pointer">
                {t.agree}
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B944D6] text-white font-bold py-4 rounded-xl hover:bg-[#a135bd] transition-all shadow-lg uppercase disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {t.waiting}
                </>
              ) : (
                t.submit
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}