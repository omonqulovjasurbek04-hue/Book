import React from 'react'

export default function FeaturesGrid() {
  const items = [
    {
      id: "blue",
      title: "Farzandlari va nevaralari ko'p bo'lgan oilalar",
      desc: "uchun atiga bitta to'plam orqali ko'plab bolalar o'rganishi mumkin",
      bg: "bg-[#e2edff]",
      titleColor: "text-[#594285]",
      iconColor: "text-[#aa8ced]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="7" r="3.5" />
          <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
          <circle cx="17" cy="11" r="2.5" />
          <path d="M17 15.5c2 0 4 1 4 3.5V21" />
        </svg>
      )
    },
    {
      id: "peach",
      title: "Qayta va qayta kursga pul",
      desc: "to'lab charchagan ota-onalar uchun",
      bg: "bg-[#feece5]",
      titleColor: "text-[#ff4e56]",
      iconColor: "text-[#ff9272]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="16" height="12" rx="2" />
          <text x="10" y="14" fontFamily="sans-serif" fontSize="6" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">0</text>
          <path d="M22 10v10a2 2 0 0 1-2 2H6" />
        </svg>
      )
    },
    {
      id: "pink",
      title: "Qayta va qayta kurslarga pul",
      desc: "sarflashni yechimi qidirganlar uchun",
      bg: "bg-[#f5e5fc]",
      titleColor: "text-[#ad30d5]",
      iconColor: "text-[#dfa5ed]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    {
      id: "yellow",
      title: "Jahon Tillarni til egalarigan",
      desc: "(native speaker) o'rganmoqchi bo'lganlar uchun.",
      bg: "bg-[#feffe5]",
      titleColor: "text-[#dbcf1f]",
      iconColor: "text-[#e6df83]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      id: "mint",
      title: "Qiziqarli o'yinlar, mashqlar hamda ashulalar",
      desc: "yordamida o'rganishini hohlovchilar uchun.",
      bg: "bg-[#e5f5ea]",
      titleColor: "text-[#0ba856]",
      iconColor: "text-[#93e0b5]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      )
    }
  ]

  return (
    <section className="px-5 md:px-10 pt-4 pb-10 md:py-20 max-w-[1240px] mx-auto bg-white mb-2">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 auto-rows-fr">
        
        {/* Slot 1: Text Container (Visible on both mobile and desktop) */}
        <div className="flex flex-col justify-center items-start md:mb-0 lg:pr-6 md:col-span-1 lg:col-span-1 md:min-h-[260px]">
          <h2 className="text-[#594285] md:text-[#51368a] text-[16px] md:text-3xl lg:text-[2rem] font-bold uppercase mb-2 md:mb-4 leading-normal tracking-wide w-full pr-4 md:pr-0">
            ROBOT USTOZ KIMLAR UCHUN FOYDALI.
          </h2>
          <p className="text-[#555] font-medium text-[13px] md:text-[15px] leading-relaxed w-[95%] md:w-full">
            Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi
          </p>
        </div>

        {/* Barcha kartochkalar */}
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`${item.bg} p-6 pb-[90px] rounded-[20px] flex flex-col items-start gap-3 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 relative overflow-hidden group min-h-[240px] shadow-sm`}
          >
            {/* Tepalikdagi Kichik Icon */}
            <div className={`w-10 h-10 ${item.titleColor} z-10 mb-2`}>
              {item.icon}
            </div>
            
            {/* Sarlavha va Tavsif */}
            <div className="z-10 flex-col flex-1 relative">
              <h4 className={`${item.titleColor} font-bold text-[17px] leading-snug mb-2 max-w-[90%]`}>
                {item.title}
              </h4>
              <p className="text-[#444] text-[14.5px] font-medium leading-[1.6]">
                {item.desc}
              </p>
            </div>

            {/* Suv belgisi - Oq dumaloq markazlashtirilgan icon bilan xuddi rasmdagidek */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-white/60 backdrop-blur-sm rounded-full z-0 flex items-center justify-center pl-4 pb-4">
              <div className={`w-28 h-28 ${item.iconColor} opacity-50`}>
                {item.icon}
              </div>
            </div>
          </div>
        ))}
        
      </div>

    </section>
  )
}