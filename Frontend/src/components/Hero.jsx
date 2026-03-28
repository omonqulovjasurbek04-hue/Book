import { useState, useEffect } from 'react'
import books1 from '../assets/Books1.png'
import books2 from '../assets/Books2.png'
import books3 from '../assets/Books3.png'

const bookSets = [
  { main: books1, left: books3, right: books2 },
  { main: books2, left: books1, right: books3 },
  { main: books3, left: books2, right: books1 },
]

export default function Hero() {
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


      <div className="hidden md:block bg-[#6B4095] rounded-3xl overflow-hidden">
        <div className="flex items-center justify-between px-12 lg:px-16 py-14 lg:py-16 gap-6">
          <div className="max-w-xl">
            <h1 className="text-white text-4xl lg:text-[2.75rem] font-bold leading-[1.2] mb-4 uppercase">
              Angelfaces to'plamini{' '}
              <span className="text-[#FF8A65]">10%</span>{' '}
              chegirma bilan sotib oling.
            </h1>
            <p className="text-purple-200 text-base lg:text-lg mb-8 leading-relaxed">
              Ingliz, Rus, Xitoy, Fransuz, Kares, Ispan, O'zbek va Arab tillarini tez va oson o'rganing!
            </p>

            <button className="bg-[#D6E8FD] hover:bg-blue-200 text-[#5C3E8A] font-bold px-8 py-3.5 rounded-full transition-colors text-base mb-6">
              Buyurtma berish
            </button>

            <div className="flex items-center gap-4 bg-white/10 rounded-2xl px-5 py-4 w-fit">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium leading-tight">
                Buyurtmangiz 48 soatda yetib bormasa tekinga olasiz.
              </p>
            </div>
          </div>

          <div className="w-[45%] flex flex-col items-center relative">
            <div className="relative w-full max-w-[400px]">

              <div className="absolute -top-4 left-0 bg-white rounded-2xl rounded-br-none px-5 py-3 text-center z-30 shadow-lg">
                <p className="text-[#A259FF] text-3xl font-black italic leading-none">10%</p>
                <p className="text-[#E74291] text-[10px] font-bold leading-none mt-1 uppercase">chegirma</p>
              </div>

              <div className={`relative w-full h-[380px] lg:h-[420px] flex justify-center items-center transition-opacity duration-500 ${isAnimating ? 'opacity-70' : 'opacity-100'}`}>
                <img src={current.left} alt="Book" className="absolute w-[45%] max-w-[170px] z-0 -rotate-6 -translate-x-16 shadow-lg rounded-md transition-all duration-500" />
                <img src={current.right} alt="Book" className="absolute w-[45%] max-w-[170px] z-10 rotate-6 translate-x-16 shadow-lg rounded-md transition-all duration-500" />
                <img src={current.main} alt="Book" className="absolute w-[50%] max-w-[210px] z-20 shadow-2xl rounded-md transition-all duration-500" />
              </div>


              <div className="absolute bottom-16 left-1/2 w-[110%] -translate-x-1/2 pointer-events-none z-10">
                 <svg viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                   <path d="M 2 40 C 2 75, 298 75, 298 40" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
                   <path d="M 294 45 L 298 40 L 293 35" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M 6 45 L 2 40 L 7 35" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
            </div>


            <div className="flex items-center gap-2 bg-[#007AFF] rounded-full p-2 shadow-lg mt-4 z-30">
              <button
                onClick={() => goToSlide('prev')}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#007AFF] hover:bg-gray-50 transition shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button
                onClick={() => goToSlide('next')}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#007AFF] hover:bg-gray-50 transition shadow-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="md:hidden">
        <div className="flex flex-col items-center pt-8 pb-6">
          <div className="relative w-full max-w-[320px]">

            <div className="absolute -top-4 left-6 bg-white rounded-2xl rounded-br-none px-4 py-2.5 text-center z-30 shadow-lg border border-gray-50">
              <p className="text-[#A259FF] text-2xl font-black italic leading-none">10%</p>
              <p className="text-[#E74291] text-[9px] font-bold leading-none mt-1 uppercase">chegirma</p>
            </div>

            <div className={`relative w-full h-[280px] flex justify-center items-center mt-2 transition-opacity duration-500 ${isAnimating ? 'opacity-70' : 'opacity-100'}`}>
              <img src={current.left} alt="Book" className="absolute w-[45%] max-w-[130px] z-0 -rotate-6 -translate-x-10 shadow-lg rounded-md transition-all duration-500" />
              <img src={current.right} alt="Book" className="absolute w-[45%] max-w-[130px] z-10 rotate-6 translate-x-10 shadow-lg rounded-md transition-all duration-500" />
              <img src={current.main} alt="Book" className="absolute w-[50%] max-w-[150px] z-20 shadow-2xl rounded-md transition-all duration-500" />
            </div>


            <div className="absolute bottom-6 left-1/2 w-[110%] -translate-x-1/2 pointer-events-none z-10">
               <svg viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                 <path d="M 2 40 C 2 75, 298 75, 298 40" stroke="#333" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 3" />
                 <path d="M 294 45 L 298 40 L 293 35" stroke="#333" strokeOpacity="0.4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
          </div>

          <div className="flex gap-4 mt-6 z-30">
            <button
              onClick={() => goToSlide('prev')}
              className="w-11 h-11 border border-[#007AFF] bg-white rounded-full flex items-center justify-center text-[#007AFF] hover:bg-blue-50 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={() => goToSlide('next')}
              className="w-11 h-11 border border-[#007AFF] bg-white rounded-full flex items-center justify-center text-[#007AFF] hover:bg-blue-50 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="px-2 pt-4">
          <h1 className="text-gray-900 text-[1.65rem] font-bold leading-[1.2] mb-3 uppercase">
            Angelfaces to'plamini{' '}
            <span className="text-[#FF8A65]">10%</span>{' '}
            chegirma bilan sotib oling.
          </h1>
          <p className="text-gray-600 text-[15px] mb-6 leading-relaxed">
            Ingliz, Rus, Xitoy, Fransuz, Kares, Ispan, O'zbek va Arab tillarini tez va oson o'rganing!
          </p>

          <button className="w-full bg-[#D6E8FD] hover:bg-blue-200 text-[#5C3E8A] font-bold px-8 py-4 rounded-full transition-colors text-lg mb-5">
            Buyurtma berish
          </button>

          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4 mb-4">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <p className="text-gray-900 text-sm font-medium leading-tight">
              Buyurtmangiz 48 soatda<br /> yetib bormasa tekinga olasiz.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}