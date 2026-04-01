import { useState } from 'react'
import books1 from '../assets/Books1.png'
import books2 from '../assets/Books2.png'
import books3 from '../assets/Books3.png'
import ruchka from '../assets/ruchka.png'

const flags = [
  { country: 'Ingliz', code: 'gb' },
  { country: "O'zbek", code: 'uz' },
  { country: 'Rus', code: 'ru' },
  { country: 'Arab', code: 'sa' },
  { country: 'Fransuz', code: 'fr' },
  { country: 'Kares', code: 'kr' },
  { country: 'Ispan', code: 'es' },
  { country: 'Xitoy', code: 'cn' },
]

const books = [
  { img: books1, title: 'Children English', subtitle: 'BOOK 1', bg: 'bg-blue-50', lang: 'Eng', langCode: 'gb' },
  { img: books2, title: 'Children English', subtitle: 'BOOK 2', bg: 'bg-orange-50', lang: 'Fran', langCode: 'fr' },
  { img: books3, title: 'Children English', subtitle: 'BOOK 3', bg: 'bg-fuchsia-50', lang: 'Rus', langCode: 'ru' },
]

const features = [
  "Sifatli 3D audio orqali",
  "Hech qanday grammatik qoidalarsiz",
  "So'z yodlashlarsiz",
  "Istalgan joyda va istalgan vaqtda",
]

const steps = [
  {
    text: <>1. Saytda Buyurtma <br/> qoldiring</>,
    gradient: "from-[#FF8A65] to-[#FF6B6B]",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full drop-shadow-sm"
        style={{ transform: 'rotate(-45deg)' }}
      >
        <path d="M7 3h10v12l-3 4h-4l-3-4V3z" />
        <path d="M7 7h10" />
      </svg>
    ),
  },
  {
    text: <>2. Biz siz bilan <br/> bog`lanamiz</>,
    gradient: "from-[#577BDE] to-[#3B82F6]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <polyline points="16 2 16 8 22 8"></polyline>
        <line x1="23" y1="1" x2="16" y2="8"></line>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    text: <>3. Manzilingizga 48 soat ichida <br/> yetkazib beramiz</>,
    gradient: "from-[#B947DB] to-[#E9439D]",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        <path d="M2 10h4" />
        <path d="M1 14h5" />
        <rect x="8" y="5" width="11" height="11" rx="1" />
        <path d="M19 10h3l2 3v3h-5v-6z" />
        <circle cx="11.5" cy="18" r="2.5" />
        <circle cx="21.5" cy="18" r="2.5" />
      </svg>
    ),
  },
]

export default function BooksSection() {
  const [scrollPos, setScrollPos] = useState(0)

  const scrollCards = (direction) => {
    setScrollPos((prev) => {
      if (direction === 'next') return Math.min(prev + 1, books.length - 2)
      return Math.max(prev - 1, 0)
    })
  }

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 py-10 md:py-16">

      <div className="hidden md:flex items-start justify-between gap-10 lg:gap-20">
        
        <div className="w-72 shrink-0 pt-2 flex flex-col">
          <h2 className="text-8 font-extrabold text-purple-900 leading-tight mb-2">
            8ta tilda
          </h2>
          <p className="text-purple-400 text-base mb-8 font-medium">
            Ingliz tilini o'rganing
          </p>

          <div className="grid grid-cols-4 gap-x-2 gap-y-3 mb-8 w-fit">
            {flags.map((flag, idx) => (
              <div
                key={idx}
                className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 border border-gray-100 shadow-sm"
                title={flag.country}
              >
                <img 
                  src={`https://flagcdn.com/w80/${flag.code}.png`} 
                  alt={flag.country} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 text-sm shadow-md w-max">
            Buyurtma berish
          </button>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-5 lg:gap-8 overflow-hidden pt-2">
          {books.map((book, idx) => (
            <div
              key={idx}
              className={`relative ${book.bg} rounded-3xl flex flex-col items-center justify-between group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 box-border overflow-hidden`}
            >
              <div className="w-full h-full px-4 pt-8 pb-8 flex flex-col items-center group-hover:-translate-y-5 transition-transform duration-300">
                <div className="relative w-full h-56 lg:h-60 flex items-center justify-center mb-6">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="max-h-full max-w-40 lg:max-w-44 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <h3 className="text-gray-900 font-bold text-base xl:text-4 text-center">
                    {book.title}
                  </h3>
                  <p className="text-purple-400 font-semibold text-sm text-center uppercase tracking-wide">
                    {book.subtitle}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-14 border-t border-white/60 flex translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/5 backdrop-blur-md z-10">
                <div className="flex-1 flex items-center justify-center gap-2 border-r border-white/60 hover:bg-white/30 transition-colors">
                  <img src={`https://flagcdn.com/w80/${book.langCode}.png`} alt={book.lang} className="w-5 h-5 rounded-full object-cover shadow-sm ring-1 ring-white/50" />
                  <span className="text-gray-800 font-semibold text-sm">{book.lang}</span>
                  <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span className="text-blue-900 font-bold text-sm tracking-wide">Buyurtma qilish</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

     <div className="md:hidden">
        <div className="bg-[#fcfaff] rounded-3xl pt-16 pb-8 px-5 mb-10 flex flex-col items-center shadow-sm">
          <div className="flex flex-col items-center mb-10 w-full">
            
            <div className="w-[260px] h-[260px] rounded-full bg-[#ef9c86] flex items-center justify-center relative shadow-sm">
              
              {/* Left Waves */}
              <svg className="absolute left-[8%] bottom-[20%] opacity-90 w-[50px] h-[70px]" viewBox="0 0 55 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5 C 30 20, 30 60, 50 75" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M38 12 C 22 25, 22 55, 38 68" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M26 20 C 15 30, 15 50, 26 60" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>

              {/* Right Waves */}
              <svg className="absolute right-[8%] top-[20%] opacity-90 w-[50px] h-[70px]" viewBox="0 0 55 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5 C 25 20, 25 60, 5 75" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M17 12 C 33 25, 33 55, 17 68" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M29 20 C 40 30, 40 50, 29 60" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>

              <img
                src={ruchka}
                alt="Ovoz chiqaruvchi ruchka"
                className="absolute h-[118%] w-auto object-contain z-10 drop-shadow-2xl"
              />
            </div>

            <button className="mt-8 bg-[#6a4f91] hover:bg-[#5b3e83] text-white rounded-full px-6 py-[10px] flex items-center gap-3 shadow-[0_4px_10px_rgba(106,76,149,0.3)] transition-colors">
              <div className="w-[22px] h-[22px] border border-white rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white ml-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <span className="text-[13px] font-medium tracking-wide">Videosini ko'rish</span>
            </button>
          </div>

          <div className="w-full text-left mb-6 pl-1">
            <h2 className="text-[#594285] text-[20px] font-bold uppercase leading-snug w-[80%]">
              Ovoz chiqaruvchi ruchka
            </h2>
          </div>

          <div className="w-full space-y-3.5 mb-8 pl-1">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <svg className="w-[22px] h-[22px] text-[#6a4f91] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span className="text-[#333] text-[13px] font-medium leading-snug">{feature}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-gradient-to-r from-[#ba43cd] to-[#d846b8] hover:opacity-90 text-white font-bold py-[14px] rounded-full transition-all duration-300 text-[15px] shadow-[0_4px_12px_rgba(186,67,205,0.3)]">
            Buyurtma berish
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative bg-gradient-to-r ${step.gradient} rounded-2xl px-5 py-6 flex flex-col justify-between min-h-32 overflow-hidden group`}
            >
              <div className="w-11 h-11 text-white z-10 mb-4 opacity-100">{step.icon}</div>
              <div className="z-10">
                <p className="text-white font-semibold text-sm leading-snug w-5/6">{step.text}</p>
              </div>
              
              <div
                className="absolute -bottom-5 -right-5 w-32 h-32 text-white opacity-30 group-hover:scale-110 transition-transform duration-500"
                style={{ transform: step.watermarkTransform || 'none' }}
              >
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
