import { useState } from 'react'
import books1 from '../assets/Books1.png'
import books2 from '../assets/Books2.png'
import books3 from '../assets/Books3.png'

const flags = [
  { country: 'Ingliz', emoji: '🇬🇧' },
  { country: "O'zbek", emoji: '🇺🇿' },
  { country: 'Rus', emoji: '🇷🇺' },
  { country: 'Arab', emoji: '🇸🇦' },
  { country: 'Fransuz', emoji: '🇫🇷' },
  { country: 'Kares', emoji: '🇰🇷' },
  { country: 'Ispan', emoji: '🇪🇸' },
  { country: 'Xitoy', emoji: '🇨🇳' },
]

const books = [
  { img: books1, title: 'Children English', subtitle: 'BOOK 1', bg: 'bg-blue-100/60' },
  { img: books2, title: 'Children English', subtitle: 'BOOK 2', bg: 'bg-pink-100/60' },
  { img: books3, title: 'Children English', subtitle: 'BOOK 3', bg: 'bg-purple-100/60' },
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
    <section className="px-4 md:px-6 lg:px-10 py-10 md:py-16 max-w-[1440px] mx-auto">

      <div className="hidden md:flex items-start gap-10 lg:gap-14">
        <div className="w-[260px] lg:w-[280px] flex-shrink-0 pt-2">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-1">
            8ta tilda
          </h2>
          <p className="text-gray-500 text-base mb-5">
            Ingliz tilini o'rganing
          </p>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {flags.map((flag, idx) => (
              <div
                key={idx}
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl cursor-pointer hover:scale-110 hover:shadow-md transition-all duration-200"
                title={flag.country}
              >
                {flag.emoji}
              </div>
            ))}
          </div>

          <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-200 text-sm">
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
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 leading-tight italic">
              8ta tilda
            </h2>
            <p className="text-gray-500 text-sm mt-0.5">
              Ingliz tilini o'rganing
            </p>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm shadow-md mt-1">
            Buyurtma berish
          </button>
        </div>

        <div className="flex items-center gap-2.5 mt-4 mb-6 overflow-x-auto pb-1">
          {flags.map((flag, idx) => (
            <div
              key={idx}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl flex-shrink-0"
              title={flag.country}
            >
              {flag.emoji}
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
                <div className="relative w-full h-[160px] flex items-center justify-center mb-3">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="max-h-full max-w-[120px] object-contain drop-shadow-lg -rotate-3"
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
            className="w-10 h-10 border border-gray-300 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 transition shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={() => scrollCards('next')}
            className="w-10 h-10 border border-gray-300 bg-white rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 transition shadow-sm"
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
