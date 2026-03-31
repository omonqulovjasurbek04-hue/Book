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
    <section className="w-full max-w-[1536px] mx-auto">
      <div className="hidden md:block px-4 lg:px-6 xl:px-10 pb-6 pt-1">
        <div className="bg-[#6B4095] rounded-3xl overflow-hidden relative">
          <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between py-12 lg:py-14 gap-8">
            <div className="flex-1 lg:max-w-xl">
              <h1 className="text-white text-4xl lg:text-[2.75rem] font-bold leading-[1.2] mb-4 uppercase">
                ANGELFACES TO'PLAMINI{' '}
                <span className="text-[#F29064]">10%</span>{' '}
                CHEGIRMA BILAN SOTIB OLING.
              </h1>
              <p className="text-purple-200 text-base lg:text-lg mb-8 leading-relaxed">
                Ingliz, Rus, Xitoy, Fransuz, Kares, Ispan, O'zbek va Arab tillarini tez va oson o'rganing!
              </p>

              <button className="bg-[#D6E8FD] hover:bg-blue-200 text-purple-900 font-bold px-8 py-3.5 rounded-full transition-colors text-base mb-6">
                Buyurtma berish
              </button>

              <div className="flex items-center gap-4 border border-white/20 rounded-2xl px-5 py-4 w-fit">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <p className="text-white text-sm font-medium leading-tight text-left">
                  Buyurtmangiz 48 soatda<br />yetib bormasa tekinga olasiz.
                </p>
              </div>
            </div>

            <div className="w-[45%] flex flex-col items-center relative">
              <div className="relative w-full pb-10">

                <div className={`group relative w-full h-96 lg:h-[480px] flex justify-center items-center transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'} perspective-[1200px]`}>

                  <div className="absolute bottom-6 left-1/2 w-[110%] max-w-[600px] h-[110px] lg:h-[130px] -translate-x-1/2 pointer-events-none z-0">
                    <svg viewBox="0 0 400 100" className="h-full w-full" preserveAspectRatio="none">
                      <ellipse cx="200" cy="50" rx="195" ry="45" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
                      <path d="M 230 95 L 240 95 L 235 91 M 240 95 L 235 99" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className="absolute top-[2%] left-[10%] lg:left-[5%] z-40 transition-opacity duration-300 opacity-100 group-hover:opacity-0 pointer-events-none">
                    <div className="relative">
                      <div className="rounded-[20px] rounded-br-[4px] bg-white px-5 py-3 shadow-[0_15px_30px_rgba(0,0,0,0.15)] flex flex-col items-center">
                        <p className="text-[#a832d2] text-2xl font-extrabold italic tracking-tighter leading-none mb-1">10%</p>
                        <p className="text-[#a832d2] text-[10px] font-bold uppercase tracking-widest leading-none mt-1">CHEGIRMA</p>
                      </div>
                      <div className="absolute -bottom-3 right-0 w-0 h-0 border-l-[16px] border-r-[0px] border-t-[14px] border-l-transparent border-t-white"></div>
                    </div>
                  </div>

                  <div className="relative flex w-full h-full items-center justify-center">
                    
                    <div className="absolute transition-all duration-500 ease-out z-10"
                         style={{ transform: "translateX(-55%) translateY(10px) rotateY(25deg) scale(0.75)", transformStyle: "preserve-3d" }}>
                      <img src={current.left} alt="Book" className="h-auto w-[180px] md:w-56 lg:w-[260px]" style={{ filter: "blur(3px) brightness(0.7)" }} />
                    </div>

                    <div className="absolute transition-all duration-500 ease-out z-30"
                         style={{ transform: "translateX(0) translateY(-15px) rotateY(-5deg) scale(1)", transformStyle: "preserve-3d" }}>
                      <img src={current.main} alt="Book" className="h-auto w-60 md:w-[290px] lg:w-80" style={{ filter: "drop-shadow(0 25px 40px rgba(0,0,0,0.35))" }} />
                    </div>

                    <div className="absolute transition-all duration-500 ease-out z-10"
                         style={{ transform: "translateX(60%) translateY(0) scale(0.8)", transformStyle: "preserve-3d" }}>
                      <img src={current.right} alt="Book" className="h-auto w-[180px] md:w-56 lg:w-[260px]" style={{ filter: "blur(3px) brightness(0.75)" }} />
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-6 z-40">
                  <button
                    onClick={() => goToSlide('prev')}
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-purple-900 hover:scale-105 active:scale-95 transition-transform shadow-[0_5px_15px_rgba(0,0,0,0.15)]"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => goToSlide('next')}
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-purple-900 hover:scale-105 active:scale-95 transition-transform shadow-[0_5px_15px_rgba(0,0,0,0.15)]"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden px-4">
        
        <div className="flex flex-col items-center pt-4 pb-2">
          <div className="relative w-full max-w-80">

            <div className={`group relative w-full h-[360px] flex justify-center items-center transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'} perspective-[1000px]`}>

              <div className="absolute bottom-6 left-1/2 w-[110%] max-w-[340px] h-20 -translate-x-1/2 pointer-events-none z-0">
                <svg viewBox="0 0 400 100" className="h-full w-full" preserveAspectRatio="none">
                  <path d="M 5 55 C 5 20, 80 5, 200 5 C 320 5, 395 20, 395 55" fill="none" stroke="#222" strokeWidth="1.2" />
                  <path d="M 5 55 C 5 80, 50 92, 110 95" fill="none" stroke="#222" strokeWidth="1.2" />
                  <path d="M 102 89 L 112 95 L 102 101" fill="none" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 290 95 C 350 92, 395 80, 395 55" fill="none" stroke="#222" strokeWidth="1.2" />
                </svg>
              </div>

              <div className="absolute top-[2%] left-[10%] z-40 transition-opacity duration-300 opacity-100 group-hover:opacity-0 pointer-events-none">
                <div className="relative">
                  <div className="rounded-[16px] rounded-br-[4px] bg-white px-4 py-2 shadow-[0_10px_20px_rgba(0,0,0,0.15)] flex flex-col items-center">
                    <p className="text-[#a832d2] text-xl font-extrabold italic tracking-tighter leading-none mb-1">10%</p>
                    <p className="text-[#a832d2] text-[9px] font-bold uppercase tracking-widest leading-none mt-0.5">CHEGIRMA</p>
                  </div>
                  <div className="absolute -bottom-2 right-0 w-0 h-0 border-l-[12px] border-r-[0px] border-t-[10px] border-l-transparent border-t-white"></div>
                </div>
              </div>



              <div className="relative flex w-full h-full items-center justify-center">
                <div className="absolute transition-all duration-500 ease-out z-10" style={{ transform: "translateX(-45%) translateY(10px) rotateY(25deg) scale(0.7)", transformStyle: "preserve-3d" }}>
                  <img src={current.left} alt="Book" className="h-auto w-40" style={{ filter: "blur(2px) brightness(0.7)" }} />
                </div>
                <div className="absolute transition-all duration-500 ease-out z-30" style={{ transform: "translateX(0) translateY(-10px) rotateY(-5deg) scale(0.95)", transformStyle: "preserve-3d" }}>
                  <img src={current.main} alt="Book" className="h-auto w-56" style={{ filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.35))" }} />
                </div>
                <div className="absolute transition-all duration-500 ease-out z-10" style={{ transform: "translateX(50%) translateY(0) scale(0.7)" }}>
                  <img src={current.right} alt="Book" className="h-auto w-40" style={{ filter: "blur(2px) brightness(0.8)" }} />
                </div>
              </div>

            </div>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40">
              <button
                onClick={() => goToSlide('prev')}
                className="w-10 h-10 bg-transparent border-[1.2px] border-[#333] rounded-full flex items-center justify-center text-[#333] hover:bg-gray-100 transition hover:scale-105 active:scale-95"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button
                onClick={() => goToSlide('next')}
                className="w-10 h-10 bg-transparent border-[1.2px] border-[#333] rounded-full flex items-center justify-center text-[#333] hover:bg-gray-100 transition hover:scale-105 active:scale-95"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
            
          </div>
        </div>

        <div className="pt-5 pb-4">
          <h1 className="text-gray-900 text-3xl font-bold leading-[1.2] mb-3 uppercase">
            ANGELFACES TO'PLAMINI{' '}
            <span className="text-[#F29064]">10%</span>{' '}
            CHEGIRMA BILAN SOTIB OLING.
          </h1>
          <p className="text-gray-500 text-sm mb-5 leading-relaxed">
            Ingliz, Rus, Xitoy, Fransuz, Kares, Ispan, O'zbek va Arab tillarini tez va oson o'rganing!
          </p>

          <button className="w-full bg-gradient-to-r from-[#E066FF] to-[#9B59B6] hover:from-[#D055EE] hover:to-[#8A48A5] text-white font-bold px-8 py-4 rounded-full transition-all text-base mb-5 shadow-md">
            Buyurtma berish
          </button>

          <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-4 py-3.5 mb-2">
            <div className="flex-shrink-0">
              <svg className="w-7 h-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <p className="text-gray-800 text-sm font-medium leading-tight">
              Buyurtmangiz 48 soatda<br /> yetib bormasa tekinga olasiz.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}