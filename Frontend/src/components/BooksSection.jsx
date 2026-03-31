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
  { img: books1, title: 'Children English', subtitle: 'BOOK 1', bg: 'bg-[#E5F0FF]' },
  { img: books2, title: 'Children English', subtitle: 'BOOK 2', bg: 'bg-[#FFE8DE]' },
  { img: books3, title: 'Children English', subtitle: 'BOOK 2', bg: 'bg-[#F6E8FF]' },
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
    <section className="px-4 md:px-6 lg:px-10 py-10 md:py-16 max-w-1440px mx-auto">


      <div className="hidden md:flex items-start gap-10 lg:gap-14">
        <div className="w-260px lg:w-280px flex-shrink-0 pt-2">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#5C3E8A] leading-tight mb-1">
            8ta tilda
          </h2>
          <p className="text-[#5C3E8A]/80 text-base mb-6 font-medium">
            Ingliz tilini o'rganing
          </p>

          <div className="grid grid-cols-4 gap-3 mb-8">
            {flags.map((flag, idx) => (
              <div
                key={idx}
                className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 border border-gray-100 shadow-sm"
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

          <button className="bg-[#B944D6] hover:bg-[#a135bd] text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300 text-sm w-full lg:w-auto shadow-md">
            Buyurtma berish
          </button>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-5 lg:gap-6">
          {books.map((book, idx) => (
            <div
              key={idx}
              className={`${book.bg} rounded-2xl p-5 lg:p-6 flex flex-col items-center group cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="relative w-full h-[180px] lg:h-[200px] flex items-center justify-center mb-4">
                <img
                  src={book.img}
                  alt={book.title}
                  className="max-h-full max-w-[140px] lg:max-w-[160px] object-contain drop-shadow-lg -rotate-3 group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
              <h3 className="text-gray-900 font-bold text-base text-center">
                {book.title}
              </h3>
              <p className="text-purple-500 font-semibold text-sm text-center mt-0.5">
                {book.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>


      <div className="md:hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#5C3E8A] leading-tight">
              8ta tilda
            </h2>
            <p className="text-[#5C3E8A]/80 text-sm mt-0.5 font-medium">
              Ingliz tilini o'rganing
            </p>
          </div>
          <button className="bg-[#B944D6] hover:bg-[#a135bd] text-white font-semibold px-5 py-2.5 rounded-full text-xs shadow-md transition-colors">
            Buyurtma berish
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {flags.map((flag, idx) => (
            <div
              key={idx}
              className="w-12 h-12 mx-auto rounded-full overflow-hidden flex items-center justify-center cursor-pointer border border-gray-100 shadow-sm"
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
                <div className="relative w-full h-160px flex items-center justify-center mb-3">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="max-h-full max-w-120px object-contain drop-shadow-lg -rotate-3"
                  />
                </div>
                <h3 className="text-gray-900 font-bold text-sm text-center">
                  {book.title}
                </h3>
                <p className="text-purple-500 font-semibold text-xs text-center mt-0.5">
                  {book.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-5">
          <button
            onClick={() => scrollCards('prev')}
            className="w-10 h-10 border border-[#007AFF] bg-white rounded-full flex items-center justify-center text-[#007AFF] hover:bg-blue-50 transition shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={() => scrollCards('next')}
            className="w-10 h-10 border border-[#007AFF] bg-white rounded-full flex items-center justify-center text-[#007AFF] hover:bg-blue-50 transition shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

    </section>
  )
}
