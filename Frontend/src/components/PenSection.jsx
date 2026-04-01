import React from 'react'
import ruchka from '../assets/ruchka.png'

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


export default function PenSection() {
  return (
    <section className="w-full py-16 md:py-20 mb-10 bg-[#FCFAFF]">
      <div className="w-full max-w-[1240px] mx-auto px-6 lg:px-10 flex flex-col items-center">
        
        {/* Yuqori blok: Ruchka va Ma'lumotlar */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1000px] gap-12 lg:gap-24 mb-20 relative">
          
          {/* Chap tomon: Rasm */}
          <div className="relative flex-shrink-0 w-72 md:w-80 lg:w-96 flex justify-center">
            {/* Olovrang fon doirasi */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full bg-[#f3ae99] z-0 shadow-inner"></div>
            
            {/* Oq ingichka chiziqlar (To'lqin effekti) */}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-10 pointer-events-none opacity-90"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 50 150 C 30 120, 30 80, 50 50" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 65 135 C 50 115, 50 85, 65 65" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 150 150 C 170 120, 170 80, 150 50" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 135 135 C 150 115, 150 85, 135 65" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            {/* Ruchka rasmi */}
            <img
              src={ruchka}
              alt="Ovoz chiqaruvchi ruchka"
              className="w-[85%] object-contain relative z-20 hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] -rotate-6"
            />

            {/* Videosini ko'rish tugmasi */}
            <button className="absolute -left-10 md:-left-16 top-1/4 bg-[#5E4C8E] hover:bg-[#4d3d75] text-white rounded-full pr-5 pl-2 py-2 flex items-center gap-3 shadow-[0_5px_15px_rgba(94,76,142,0.4)] transition-all z-30 hover:scale-105">
              <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <span className="text-sm font-medium tracking-wide">Videosini ko'rish</span>
            </button>
          </div>

          {/* O'ng tomon: Matnlar */}
          <div className="flex-1 w-full flex flex-col items-start px-2">
            <h2 className="text-[#51368a] text-[1.65rem] md:text-3xl lg:text-[2rem] font-black uppercase mb-8 leading-tight tracking-wide">
              OVOZ CHIQARUVCHI <br /> RUCHKA
            </h2>

            <div className="space-y-4 mb-10 w-full">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <svg className="w-[22px] h-[22px] text-[#51368a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <span className="text-[#333] font-medium lg:text-[17px]">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#cc4ac1] hover:bg-[#b53fa9] text-white font-semibold px-8 py-3.5 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-md">
              Buyurtma berish
            </button>
          </div>

        </div>

        {/* Pastki blok: 3 ta qadam (Gradient Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 justify-center w-full">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative bg-gradient-to-r ${step.gradient} rounded-[24px] p-6 lg:p-7 overflow-hidden min-h-[150px] flex flex-col justify-start cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
            >
              {/* Icon qismi: Oq rang, tepada */}
              <div className="text-white z-10 opacity-100 mb-6 w-8 h-8 opacity-80">
                {step.icon}
              </div>
              
              <div className="z-10 mt-auto">
                <p className="text-white font-bold text-base leading-tight w-11/12">{step.text}</p>
              </div>
              
              {/* Suv belgisi fon burchakda */}
              <div className="absolute -bottom-8 -right-8 w-36 h-36 text-white opacity-20 transition-transform duration-500 group-hover:scale-110 pointer-events-none">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

