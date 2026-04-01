import { useState, useContext } from 'react'
import { ModalContext } from '../App'
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
  { country: 'Koreys', code: 'kr' },
  { country: 'Ispan', code: 'es' },
  { country: 'Xitoy', code: 'cn' },
]

const books = [
  { img: books1, title: 'Children English', subtitle: 'BOOK 1', bg: 'bg-blue-50' },
  { img: books2, title: 'Children English', subtitle: 'BOOK 2', bg: 'bg-orange-50' },
  { img: books3, title: 'Children English', subtitle: 'BOOK 3', bg: 'bg-fuchsia-50' },
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
  const [selectedLang, setSelectedLang] = useState(flags[0])
  const [activeMobileBook, setActiveMobileBook] = useState(null)
  const { setModalOpen } = useContext(ModalContext)

  const scrollCards = (direction) => {
    setScrollPos((prev) => {
      if (direction === 'next') return Math.min(prev + 1, books.length - 2)
      return Math.max(prev - 1, 0)
    })
    setActiveMobileBook(null)
  }

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 py-10 md:py-16">

      <div className="hidden md:flex items-start justify-between gap-10 lg:gap-20">
        
        <div className="w-72 shrink-0 pt-2 flex flex-col">
          <h2 className="text-[2rem] lg:text-[2.5rem] font-extrabold text-purple-900 leading-tight mb-2">
            8ta tilda
          </h2>
          <p className="text-[#a379df] text-base mb-8 font-medium">
            {selectedLang.country} tilini o'rganing
          </p>

          <div className="grid grid-cols-4 gap-x-3 gap-y-4 mb-8 w-fit">
            {flags.map((flag, idx) => {
              const isActive = selectedLang.code === flag.code;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedLang(flag)}
                  className={`w-11 h-11 rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'ring-4 ring-purple-500 scale-110 shadow-lg' 
                      : 'border border-gray-100 shadow-sm hover:scale-105 hover:ring-2 hover:ring-purple-300'
                  }`}
                  title={flag.country}
                >
                  <img 
                    src={`https://flagcdn.com/w80/${flag.code}.png`} 
                    alt={flag.country} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            })}
          </div>
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
                  <h3 className="text-gray-900 font-bold text-base xl:text-[17px] text-center">
                    {book.title}
                  </h3>
                  <p className="text-[#a379df] font-semibold text-sm text-center uppercase tracking-wide">
                    {book.subtitle}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-14 border-t border-white/60 flex translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/20 backdrop-blur-md z-10">
                <div className="flex-1 flex items-center justify-center gap-2 border-r border-white/60 hover:bg-white/40 transition-colors">
                  <img src={`https://flagcdn.com/w80/${selectedLang.code}.png`} alt={selectedLang.country} className="w-5 h-5 rounded-full object-cover shadow-sm ring-1 ring-white/50" />
                  <span className="text-gray-900 font-semibold text-[13px]">{selectedLang.country}</span>
                  <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div 
                  onClick={() => setModalOpen(true)}
                  className="flex-1 flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer"
                >
                  <span className="text-purple-700 font-bold text-[13px] tracking-wide pointer-events-none">Buyurtma qilish</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden flex flex-col pt-0 pb-4 px-1">
        
        <div className="flex justify-between items-center mb-5">
          <div className="flex flex-col">
            <h2 className="text-[20px] font-bold text-[#51368a] leading-tight mb-1">
              8ta tilda
            </h2>
            <p className="text-[#a379df] text-[12px] font-medium">
              {selectedLang.country} tilini o'rganing
            </p>
          </div>
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-[#c24cd2] text-white font-medium px-5 py-2 rounded-full text-[13px] shadow-[0_4px_12px_rgba(186,67,205,0.3)] transform transition-active active:scale-95"
          >
            Buyurtma berish
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pt-2 pb-6 px-2 -mx-2 mb-2 flex-nowrap" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {flags.map((flag, idx) => {
            const isActive = selectedLang.code === flag.code;
            return (
              <div
                key={idx}
                onClick={() => setSelectedLang(flag)}
                className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center cursor-pointer transition-all border ${
                  isActive 
                    ? 'ring-2 ring-[#c24cd2] ring-offset-2 scale-[1.15] shadow-md border-transparent' 
                    : 'shadow-sm border-gray-200'
                }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={`https://flagcdn.com/w80/${flag.code}.png`} 
                    alt={flag.country} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>

        <div className="relative w-full overflow-hidden mb-6">
          <div 
            className="flex transition-transform duration-300 ease-in-out gap-4"
            style={{ transform: `translateX(calc(-${scrollPos * 50}% - ${scrollPos * 8}px))` }}
          >
            {books.map((book, idx) => {
              const shortLang = { gb: 'Eng', uz: 'Uzb', ru: 'Rus', sa: 'Ara', fr: 'Fran', kr: 'Kor', es: 'Isp', cn: 'Xit' }
              return (
              <div
                key={idx}
                onClick={() => setActiveMobileBook(activeMobileBook === idx ? null : idx)}
                className={`w-[calc(50%-8px)] shrink-0 ${book.bg} rounded-[20px] pb-5 pt-5 flex flex-col items-center shadow-sm relative overflow-hidden transition-all duration-300`}
              >
                <div className="absolute top-0 right-0 w-8 h-32 bg-white/30 skew-x-[30deg] translate-x-12"></div>
                
                <div className={`w-full flex items-center justify-center mb-4 xl:h-auto h-[120px] transition-transform duration-300 ${activeMobileBook === idx ? '-translate-y-4' : 'translate-y-0'}`}>
                  <img src={book.img} alt={book.title} className="w-[85%] max-h-full object-contain drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)] relative z-10 pointer-events-none" />
                </div>
                
                <div className={`flex flex-col items-center transition-transform duration-300 ${activeMobileBook === idx ? '-translate-y-4' : 'translate-y-0'} pointer-events-none`}>
                  <h3 className="text-gray-900 font-bold text-[13px] text-center px-1 leading-snug">
                    {book.title}
                  </h3>
                  <p className="text-[#a379df] font-semibold text-[10px] text-center uppercase mt-1 tracking-wide">
                    {book.subtitle}
                  </p>
                </div>

                <div 
                  className={`absolute bottom-0 left-0 w-full h-11 bg-black/5 flex border-t border-white/60 transition-transform duration-300 z-20 ${
                    activeMobileBook === idx ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  <div className="flex-[0.8] flex items-center justify-center gap-1.5 border-r border-white/60">
                    <img src={`https://flagcdn.com/w80/${selectedLang.code}.png`} alt={selectedLang.country} className="w-3.5 h-3.5 rounded-full object-cover shadow-[0_1px_2px_rgba(0,0,0,0.2)]" />
                    <span className="text-gray-800 font-medium text-[11px]">{shortLang[selectedLang.code]}</span>
                    <svg width="6" height="4" viewBox="0 0 10 6" fill="none" className="text-gray-600">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalOpen(true);
                    }}
                    className="flex-[1.2] flex items-center justify-center active:bg-black/10 transition-colors cursor-pointer"
                  >
                    <span className="text-[#2b3576] font-bold text-[11px] tracking-wide text-center">Buyurtma qilish</span>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <button 
            onClick={() => scrollCards('prev')} 
            disabled={scrollPos === 0}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${scrollPos === 0 ? 'border-gray-200 text-gray-300' : 'border-gray-400 text-gray-600 active:bg-gray-100'}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <button 
            onClick={() => scrollCards('next')} 
            disabled={scrollPos >= books.length - 2}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${scrollPos >= books.length - 2 ? 'border-gray-200 text-gray-300' : 'border-gray-400 text-gray-600 active:bg-gray-100'}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

      </div>

    </section>
  )
}
