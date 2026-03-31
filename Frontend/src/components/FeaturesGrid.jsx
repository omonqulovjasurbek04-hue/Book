import React from 'react'

export default function FeaturesGrid() {
  const items = [
    {
      id: "blue",
      title: "Farzandlari va nevaralari ko'p bo'lgan oilalar",
      desc: "uchun atiga bitta to'plam orqali ko'plab bolalar o'rganishi mumkin",
      bg: "bg-[#eaf0ff]",
      titleColor: "text-[#4A329A]",
      iconColor: "text-[#4A329A]",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      id: "peach",
      title: "Qayta va qayta kursga pul",
      desc: "to'lab charchagan ota-onalar uchun",
      bg: "bg-[#ffe8e0]",
      titleColor: "text-[#e94a45]",
      iconColor: "text-[#e94a45]",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: "pink",
      title: "Qayta va qayta kurslarga pul",
      desc: "sarflashni yechimi qidirganlar uchun",
      bg: "bg-[#fbe8ff]",
      titleColor: "text-[#a832c3]",
      iconColor: "text-[#a832c3]",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      )
    },
    {
      id: "yellow",
      title: "Jahon Tillarni til egalarigan",
      desc: "(native speaker) o'rganmoqchi bo'lganlar uchun.",
      bg: "bg-[#ffffec]",
      titleColor: "text-[#a2a028]",
      iconColor: "text-[#a2a028]",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      )
    },
    {
      id: "mint",
      title: "Qiziqarli o'yinlar, mashqlar hamda ashulalar",
      desc: "yordamida o'rganishini xohlovchilar uchun.",
      bg: "bg-[#eaf8ee]",
      titleColor: "text-[#34bf63]",
      iconColor: "text-[#34bf63]",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.15.743a9 9 0 01-6.118-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
        </svg>
      )
    }
  ]

  return (
    <section className="px-5 md:px-10 py-16 md:py-20 max-w-[1240px] mx-auto bg-white">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
        
        {/* Slot 1: Text Container */}
        <div className="flex flex-col justify-center items-start lg:pr-6 md:col-span-1 lg:col-span-1 min-h-[260px]">
          <h2 className="text-[#51368a] text-3xl lg:text-[2rem] font-black uppercase mb-4 leading-tight tracking-[0.02em]">
            ROBOT USTOZ KIMLAR UCHUN FOYDALI.
          </h2>
          <p className="text-gray-600 font-medium text-[15px] leading-relaxed">
            Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi.
          </p>
        </div>

        {/* Barcha kartochkalar */}
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`${item.bg} p-8 rounded-[24px] flex flex-col items-start gap-4 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 relative overflow-hidden group min-h-[260px]`}
          >
            {/* Tepalikdagi Kichik Icon */}
            <div className={`w-8 h-8 ${item.iconColor} z-10 mb-2`}>
              {item.icon}
            </div>
            
            {/* Sarlavha va Tavsif */}
            <div className="z-10 flex-col flex-1">
              <h4 className={`${item.titleColor} font-bold text-lg leading-tight mb-2.5 max-w-[90%]`}>
                {item.title}
              </h4>
              <p className="text-[#333] text-[15px] leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Suv belgisi fon burchakda xuddi rasmdagidek tekis strokelar bilan tutish */}
            <div className={`absolute -bottom-8 -right-8 w-40 h-40 ${item.iconColor} opacity-[0.05] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 pointer-events-none`}>
              {item.icon}
            </div>
            
            {/* Orqa fon doira */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white opacity-40 rounded-full z-0 pointer-events-none"></div>
          </div>
        ))}
        
      </div>

    </section>
  )
}