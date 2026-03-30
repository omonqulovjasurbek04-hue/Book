import { useState, useEffect } from 'react'
import { useLanguage, translations } from '../context/LanguageContext'
import books1 from '../assets/Books1.png'
import books2 from '../assets/Books2.png'
import books3 from '../assets/Books3.png'

const bookSets = [
  { main: books1, left: books3, right: books2 },
  { main: books2, left: books1, right: books3 },
  { main: books3, left: books2, right: books1 },
]

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = (direction) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => {
      if (direction === 'next') return (prev + 1) % bookSets.length
      return prev === 0 ? bookSets.length - 1 : prev - 1
    })
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => goToSlide('next'), 5000)
    return () => clearInterval(interval)
  }, [isAnimating])

  const current = bookSets[currentSlide]

  return (
    <section className="px-4 md:px-6 lg:px-10 pb-6 pt-2 md:pt-4 max-w-[1440px] mx-auto">
      
      {/* DESKTOP VERSION */}
      <div className="hidden md:block bg-gradient-to-r from-[#6328D5] to-[#2563EB] rounded-[40px] overflow-hidden shadow-2xl animate-fadeIn">
        <div className="flex items-center justify-between px-12 lg:px-20 py-16 lg:py-20 gap-6">
          
          <div className="max-w-xl">
            <h1 className="text-white text-4xl lg:text-[3.2rem] font-extrabold leading-[1.1] mb-6 uppercase tracking-tight animate-slideInUp">
              {t.titleMain} <br />
              <span className="text-[#FFD54F]">{t.discountPercent} {t.discount}</span> <br /> 
              bilan sotib oling.
            </h1>
            <p className="text-blue-50 text-lg lg:text-xl mb-10 leading-relaxed opacity-90 animate-slideInUp" style={{animationDelay: '0.2s'}}>
              {t.descMain}
            </p>

            <button className="bg-[#D6E8FD] hover:bg-white text-[#5C3E8A] font-black px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg mb-8 uppercase animate-slideInUp" style={{animationDelay: '0.4s'}}>
              {t.buyNow}
            </button>

            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 w-fit border border-white/20 animate-slideInUp" style={{animationDelay: '0.6s'}}>
              <div className="bg-white/20 p-2 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h3.586l3.707 3.707A1 1 0 0022 19V5a1 1 0 00-1-1h-7.414" />
                </svg>
              </div>
              <p className="text-white text-sm font-semibold leading-snug max-w-[200px]">
                {t.guarantee}
              </p>
            </div>
          </div>

          <div className="w-[45%] flex flex-col items-center relative">
            <div className="relative w-full max-w-[450px]">
              
              {/* 10% Badge */}
              <div className="absolute -top-10 -left-5 bg-white rounded-2xl rounded-br-none px-6 py-4 text-center z-30 shadow-2xl border-b-4 border-purple-200 transform -rotate-12 animate-bounce">
                <p className="text-[#A259FF] text-4xl font-black italic leading-none">{t.discountPercent}</p>
                <p className="text-[#E74291] text-[12px] font-bold leading-none mt-1 uppercase">{t.discountText}</p>
              </div>

              {/* SLIDER IMAGES */}
              <div className={`relative w-full h-[400px] flex justify-center items-center transition-all duration-500 ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
                <img src={current.left} alt="Book" className="absolute w-[45%] z-0 -rotate-12 -translate-x-24 shadow-2xl rounded-lg transition-all duration-700 blur-[1px]" />
                <img src={current.right} alt="Book" className="absolute w-[45%] z-10 rotate-12 translate-x-24 shadow-2xl rounded-lg transition-all duration-700 blur-[1px]" />
                <img src={current.main} alt="Book" className="absolute w-[55%] z-20 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] rounded-lg transition-all duration-700" />
              </div>

              {/* Dashed Path */}
              <div className="absolute bottom-10 left-1/2 w-[120%] -translate-x-1/2 pointer-events-none z-10 opacity-30">
                 <svg viewBox="0 0 300 80" fill="none" className="w-full h-auto">
                   <path d="M 2 40 C 2 75, 298 75, 298 40" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
                 </svg>
              </div>
            </div>

            {/* Slider Buttons */}
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full p-2 mt-8 z-30 border border-white/30">
              <button onClick={() => goToSlide('prev')} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-90">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button onClick={() => goToSlide('next')} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-90">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" transform="rotate(180 12 12)"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="md:hidden bg-gradient-to-b from-[#6328D5] to-[#2563EB] rounded-3xl overflow-hidden shadow-2xl animate-fadeIn py-8 px-4">
        <div className="flex flex-col items-center gap-4">
          
          {/* Mobile Text */}
          <div className="text-center">
            <h1 className="text-white text-2xl font-bold uppercase mb-3 leading-tight animate-slideInUp">
              {t.titleMain} <br />
              <span className="text-[#FFD54F] text-3xl font-black">{t.discountPercent}</span>
            </h1>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
              {t.descMain}
            </p>
          </div>

          {/* Mobile Slider */}
          <div className="relative w-full">
            {/* 10% Badge - Mobile */}
            <div className="absolute -top-8 left-4 bg-white rounded-2xl px-4 py-3 text-center z-30 shadow-xl border-b-4 border-purple-200 transform -rotate-12">
              <p className="text-[#A259FF] text-3xl font-black italic leading-none">{t.discountPercent}</p>
              <p className="text-[#E74291] text-[10px] font-bold leading-none mt-1">{t.discountText}</p>
            </div>

            {/* Images - Touch Optimized */}
            <div className={`relative w-full h-[250px] flex justify-center items-center transition-all duration-500 ${isAnimating ? 'scale-95' : 'scale-100'}`}>
              <img src={current.main} alt="Book" className="w-[60%] z-20 shadow-xl rounded-lg transition-all duration-500" />
            </div>

            {/* Slider Buttons - Mobile */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <button onClick={() => goToSlide('prev')} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-90">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <div className="flex gap-1.5">
                {bookSets.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
                  />
                ))}
              </div>
              <button onClick={() => goToSlide('next')} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-lg active:scale-90">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          {/* Mobile Button and Guarantee */}
          <button className="w-full bg-[#D6E8FD] hover:bg-white text-[#5C3E8A] font-black px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg text-base uppercase mt-4">
            {t.buyNow}
          </button>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 w-full border border-white/20">
            <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1z" />
            </svg>
            <p className="text-white text-xs font-semibold leading-snug">
              {t.guarantee}
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}