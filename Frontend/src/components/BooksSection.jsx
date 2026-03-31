import { useState } from 'react'
import books1 from '../assets/Books1.png'
import books2 from '../assets/Books2.png'
import books3 from '../assets/Books3.png'

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
  { img: books1, title: 'Children English', subtitle: 'BOOK 1', bg: 'bg-[#e7f0ff]', lang: 'Eng', langCode: 'gb' },
  { img: books2, title: 'Children English', subtitle: 'BOOK 2', bg: 'bg-[#ffede7]', lang: 'Fran', langCode: 'fr' },
  { img: books3, title: 'Children English', subtitle: 'BOOK 2', bg: 'bg-[#fbe7ff]', lang: 'Rus', langCode: 'ru' },
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
              className={`relative ${book.bg} rounded-3xl flex flex-col items-center justify-between group cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 box-border overflow-hidden pb-8 pt-8 px-4`}
            >
              <div className="w-full h-full flex flex-col items-center">
                <div className="relative w-full h-56 lg:h-60 flex items-center justify-center mb-6">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="max-h-full max-w-40 lg:max-w-44 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <h3 className="text-gray-900 font-bold text-base xl:text-[17px] text-center">
                    {book.title}
                  </h3>
                  <p className="text-[#8c67ab] font-medium text-xs text-center uppercase tracking-wide">
                    {book.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-purple-900 leading-tight">
              8ta tilda
            </h2>
            <p className="text-purple-900/80 text-sm mt-0.5 font-medium">
              Ingliz tilini o'rganing
            </p>
          </div>
          <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-5 py-2.5 rounded-full text-xs shadow-md transition-colors">
            Buyurtma berish
          </button>
        </div>

        <div className="flex items-center justify-between gap-1 mb-8 overflow-x-auto hide-scrollbar">
          {flags.map((flag, idx) => (
            <div
              key={idx}
              className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-full overflow-hidden flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-sm"
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

        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300"
            style={{ transform: `translateX(-${scrollPos * 52}%)` }}
          >
            {books.map((book, idx) => (
              <div
                key={idx}
                className={`${book.bg} rounded-2xl p-4 flex flex-col items-center min-w-[48%] flex-shrink-0`}
              >
                <div className="relative w-full h-40 flex items-center justify-center mb-3">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="max-h-full max-w-32 object-contain drop-shadow-lg -rotate-3"
                  />
                </div>
                <h3 className="text-gray-900 font-bold text-[15px] text-center">
                  {book.title}
                </h3>
                <p className="text-[#8c67ab] font-medium text-[11px] text-center mt-0.5 uppercase tracking-wide">
                  {book.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-5">
          <button
            onClick={() => scrollCards('prev')}
            className="w-10 h-10 border border-purple-300 bg-white rounded-full flex items-center justify-center text-purple-900 hover:bg-purple-50 transition shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={() => scrollCards('next')}
            className="w-10 h-10 border border-purple-300 bg-white rounded-full flex items-center justify-center text-purple-900 hover:bg-purple-50 transition shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

    </section>
  )
}
