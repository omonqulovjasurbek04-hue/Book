import React from 'react'

const reviews = [
  {
    id: 1,
    name: "Abduyaminov Akmal",
    product: "Children English book 1",
    text: "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi",
    image: "https://via.placeholder.com/80"
  },
  {
    id: 2,
    name: "Abduyaminov Akmal",
    product: "Children English book 1",
    text: "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi",
    image: "https://via.placeholder.com/80"
  },
  {
    id: 3,
    name: "Abduyaminov Akmal",
    product: "Children English book 1",
    text: "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi",
    image: "https://via.placeholder.com/80"
  }
]

export default function ReviewSection() {
  return (
    <section id="reviews" className="w-full bg-white py-16 md:py-24 border-b border-gray-50">
      <div className="max-w-[1240px] mx-auto px-5 lg:px-10">
        
        {/* Header qismi */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-[#51368a] text-[1.6rem] md:text-3xl lg:text-[2rem] font-black uppercase tracking-wide">
            NATIJALAR
          </h2>
          <div className="flex gap-4">
            <button className="w-10 h-10 md:w-12 md:h-12 border-[1.5px] border-[#cc40ce] text-[#cc40ce] rounded-full flex items-center justify-center hover:bg-[#cc40ce] hover:text-white transition-colors duration-300">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 border-[1.5px] border-[#cc40ce] bg-[#cc40ce] text-white rounded-full flex items-center justify-center hover:bg-[#b034b1] hover:border-[#b034b1] transition-colors duration-300 shadow-md">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Sharhlar (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-[#FCFAFF] p-6 md:p-8 rounded-[24px] hover:shadow-lg transition-shadow duration-300 relative">
              {/* Orqa fon qo'shtirnoq belgisi */}
              <div className="absolute top-10 left-6 text-[80px] font-serif text-[#cc40ce] opacity-[0.05] leading-none pointer-events-none">
                “
              </div>
              
              <div className="flex items-center gap-4 mb-5 relative z-10">
                <div className="w-14 h-14 md:w-[60px] md:h-[60px] rounded-full overflow-hidden flex-shrink-0">
                  <img src={rev.image} className="w-full h-full object-cover" alt={rev.name} />
                </div>
                <div>
                  <h4 className="font-bold text-[#333] text-sm md:text-[15px]">{rev.name}</h4>
                  <p className="text-[#51368a] text-xs font-semibold mt-0.5">{rev.product}</p>
                </div>
              </div>
              
              <p className="text-[#666] text-[13px] md:text-sm leading-relaxed font-medium relative z-10 w-11/12">
                {rev.text}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}