import React, { useRef, useState, useEffect } from 'react'
import userImg from '../assets/img.png'
import api from '../api'

export default function ReviewSection() {
  const sliderRef = useRef(null)
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  // 1. Backenddan ma'lumotlarni tortish uchun useEffect hook'i
  useEffect(() => {
    api.get('/testimonials') // Bizning Laravel dagi Route::get('/testimonials', ...) api manziliga so'rov
      .then(response => {
        // Backend'dan kelgan ma'lumotni Local State ga saqlaymiz
        setReviews(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error("Fikrlar massivini olishda xatolik:", error)
        setLoading(false)
      })
  }, [])

  const slideLeft = () => {
    if (sliderRef.current) {
      // Bitta karta kengligiga qarab suramiz (taxminan oynani yarmi yoki uchdan biri)
      const scrollAmount = window.innerWidth < 768 ? sliderRef.current.offsetWidth : 350
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  const slideRight = () => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 768 ? sliderRef.current.offsetWidth : 350
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-10">
        
        {/* Header qismi */}
        <div className="flex justify-between items-center mb-8 md:mb-14">
          <h2 className="text-[#51368a] text-[20px] sm:text-2xl md:text-3xl lg:text-[2rem] font-bold uppercase tracking-wide">
            NATIJALAR
          </h2>
          
          {/* Desktop navigatsiya tugmalari */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={slideLeft}
              className="w-10 h-10 md:w-11 md:h-11 border-[1.5px] border-[#B955CA] text-[#B955CA] rounded-full flex items-center justify-center hover:bg-purple-50 transition-colors duration-300"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5 ml-[-2px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={slideRight}
              className="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-tr from-[#9B37C2] to-[#D556DA] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-300 shadow-sm shadow-purple-300"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5 mr-[-2px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Sharhlar (Cards) - Slider Container */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {loading ? (
            <p className="text-center w-full text-purple-600">Yuklanmoqda...</p>
          ) : reviews.length === 0 ? (
            <p className="text-center w-full text-gray-400">Hozircha sharhlar yo'q</p>
          ) : (
            reviews.map((rev) => (
            <div 
              key={rev.id} 
              className="snap-start flex-shrink-0 w-[100%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#FCFAFF] p-6 pb-12 md:p-8 md:pb-14 rounded-[24px] relative overflow-hidden group hover:shadow-[0_10px_30px_rgba(185,85,202,0.05)] transition-all duration-300"
            >
              {/* Orqa fon qo'shtirnoq belgisi */}
              <div className="absolute top-[40%] left-6 text-[120px] font-serif text-[#cc40ce] opacity-[0.03] leading-none pointer-events-none -translate-y-1/2">
                “
              </div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-[50px] h-[50px] md:w-[54px] md:h-[54px] rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                  <img src={rev.image ? rev.image : userImg} className="w-full h-full object-cover" alt={rev.name} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2b2b2b] text-[13px] md:text-[14px]">{rev.name}</h4>
                  <p className="text-[#8964C0] text-[12px] md:text-[13px] font-medium mt-0.5">{rev.course_name}</p>
                </div>
              </div>
              
              <p className="text-[#333] text-[13px] md:text-[14px] leading-[1.6] font-medium relative z-10 w-[95%]">
                {rev.message_uz}
              </p>
            </div>
           ))
          )}
        </div>

        {/* Mobile navigatsiya tugmalari (karta ostida markazlashgan) */}
        <div className="flex md:hidden justify-center items-center gap-4 mt-2">
          <button 
            onClick={slideLeft}
            className="w-10 h-10 border-[1.5px] border-[#B955CA] text-[#B955CA] rounded-full flex items-center justify-center hover:bg-purple-50 transition-colors duration-300"
          >
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 ml-[-1px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={slideRight}
            className="w-10 h-10 border-[1.5px] border-[#B955CA] text-[#B955CA] rounded-full flex items-center justify-center hover:bg-purple-50 transition-colors duration-300"
          >
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 mr-[-1px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
      </div>
    </section>
  )
}