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
  { country: 'Koreys', code: 'kr' }, // To'g'irlandi
  { country: 'Ispan', code: 'es' },
  { country: 'Xitoy', code: 'cn' },
]

const books = [
  { img: books1, title: 'Children English', subtitle: 'BOOK 1', bg: 'bg-[#E5F0FF]' },
  { img: books2, title: 'Children English', subtitle: 'BOOK 2', bg: 'bg-[#FFE8DE]' },
  { img: books3, title: 'Children English', subtitle: 'BOOK 3', bg: 'bg-[#F6E8FF]' }, // BOOK 3 qilindi
]

export default function BooksSection() {
  const [scrollPos, setScrollPos] = useState(0)

  const scrollCards = (direction) => {
    setScrollPos((prev) => {
      if (direction === 'next') return prev === books.length - 1 ? 0 : prev + 1
      return prev === 0 ? books.length - 1 : prev - 1
    })
  }

  // Takrorlanuvchi Bayroqlar komponenti
  const FlagsGrid = () => (
    <div className="grid grid-cols-4 gap-3 mb-8">
      {flags.map((flag, idx) => (
        <div
          key={idx}
          className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 border border-gray-100 shadow-sm active:scale-95"
          title={flag.country}
        >
          <img 
            src={`https://flagcdn.com/w80/${flag.code}.png`} 
            alt={flag.country} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )

  return (
    <section className="px-4 md:px-6 lg:px-10 py-10 md:py-16 max-w-[1440px] mx-auto overflow-hidden">

      {/* DESKTOP VERSION */}
      <div className="hidden md:flex items-start gap-10 lg:gap-20">
        <div className="w-[280px] flex-shrink-0">
          <h2 className="text-4xl font-bold text-[#5C3E8A] leading-tight mb-1">8ta tilda</h2>
          <p className="text-[#5C3E8A]/70 text-lg mb-8 font-medium">Ingliz tilini o'rganing</p>
          
          <FlagsGrid />

          <button className="bg-[#B944D6] hover:bg-[#a135bd] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg active:scale-95">
            Buyurtma berish
          </button>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {books.map((book, idx) => (
            <div
              key={idx}
              className={`${book.bg} rounded-[32px] p-8 flex flex-col items-center group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
            >
              <div className="relative w-full h-[220px] flex items-center justify-center mb-6">
                <img
                  src={book.img}
                  alt={book.title}
                  className="max-h-full object-contain drop-shadow-2xl -rotate-6 group-hover:rotate-0 transition-transform duration-500"
                />
              </div>
              <h3 className="text-gray-900 font-bold text-lg">{book.title}</h3>
              <p className="text-purple-600 font-bold text-sm mt-1 uppercase tracking-wider">{book.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="md:hidden">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#5C3E8A] mb-2">8 tilida</h2>
          <p className="text-[#5C3E8A]/70 text-sm font-medium mb-6">Ingliz tilini o'rganing</p>
          <FlagsGrid />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {books.map((book, idx) => (
            <div
              key={idx}
              className={`${book.bg} rounded-[20px] p-4 flex flex-col items-center group cursor-pointer hover:shadow-lg transition-all duration-300`}
            >
              <div className="h-[140px] flex items-center justify-center mb-3 w-full">
                <img src={book.img} alt={book.title} className="max-h-full object-contain drop-shadow-lg -rotate-3 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm">{book.title}</h3>
              <p className="text-purple-600 font-bold text-xs mt-1 uppercase">{book.subtitle}</p>
            </div>
          ))}
        </div>

        <button className="w-full bg-[#B944D6] hover:bg-[#a135bd] text-white font-bold py-3 px-4 rounded-full transition-all transform hover:scale-105 active:scale-95 text-sm shadow-lg uppercase">
          Buyurtma berish
        </button>
      </div>

    </section>
  )
}