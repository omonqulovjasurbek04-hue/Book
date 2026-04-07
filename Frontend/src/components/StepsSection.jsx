export default function StepsSection() {
  const steps = [
    { 
      id: "01", 
      text: "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi",
      top: "65%",
      left: "20%",
      shape: (
        <svg className="w-full h-full text-[#4bc4f6] drop-shadow-md" viewBox="0 0 100 100" fill="currentColor">
          <rect x="20" y="20" width="60" height="60" rx="10" transform="rotate(0 50 50)" />
          <rect x="20" y="20" width="60" height="60" rx="10" transform="rotate(45 50 50)" />
        </svg>
      )
    },
    { 
      id: "02", 
      text: "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi",
      top: "25%",
      left: "40%",
      shape: (
        <svg className="w-full h-full text-[#6a67ac] drop-shadow-md" viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,15 61,38 90,38 67,56 76,82 50,68 24,82 33,56 10,38 39,38" />
        </svg>
      )
    },
    { 
      id: "03", 
      text: "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi",
      top: "55%",
      left: "60%",
      shape: (
        <div className="w-[66%] h-[66%] rounded-full bg-[#efc854] drop-shadow-md m-auto absolute inset-0"></div>
      )
    },
    { 
      id: "04", 
      text: "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi",
      top: "45%",
      left: "80%",
      shape: (
        <svg className="w-full h-full text-[#22c85e] drop-shadow-md" viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,10 59,33 82,18 71,42 94,50 71,58 82,82 59,67 50,90 41,67 18,82 29,58 6,50 29,42 18,18 41,33" />
        </svg>
      )
    },
  ]

  return (
    <section className="px-4 py-16 md:py-24 bg-[#FCFBFF] overflow-hidden">
      <div className="max-w-[1300px] mx-auto text-left mb-10 md:mb-[70px] relative z-20">
        <h2 className="text-[#6a549e] text-2xl md:text-[36px] font-bold uppercase leading-[1.3] w-fit pl-2 md:pl-10 tracking-wide">
          Audio kurs kimlar <br className="hidden md:block" /> uchun foydali?
        </h2>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block relative w-full h-[400px] max-w-[1300px] mx-auto">
        {/* Qora silliq egri chiziq */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M -5,10 C 5,65 12,65 20,65 S 30,25 40,25 S 50,55 60,55 S 70,45 80,45 S 90,45 105,45" 
            fill="none" 
            stroke="#666" 
            strokeWidth="1.2" 
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {steps.map((step) => (
          <div 
            key={step.id} 
            className="absolute flex flex-col items-start w-[180px] lg:w-[210px] z-10"
            style={{ 
              top: `calc(${step.top} - 52.5px)`, 
              left: step.id === "04" ? `calc(${step.left} - 80px)` : `calc(${step.left} - 52.5px)` 
            }}
          >
            {/* Shakl va raqam */}
            <div 
              className="w-[105px] h-[105px] relative flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-default"
              style={{ marginLeft: step.id === "04" ? "27.5px" : "0" }}
            >
              {step.shape}
              <span className="absolute z-10 text-white text-[19px] font-extrabold font-sans tracking-wide">{step.id}</span>
            </div>
            
            {/* Matn */}
            <p className="mt-6 text-[#555] text-[13px] md:text-[14px] font-medium text-left leading-[1.6]">
              {step.text}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="block md:hidden max-w-sm mx-auto space-y-12 mt-12 pb-8">
         {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-start text-left pl-6">
            <div className="w-24 h-24 relative flex items-center justify-center mb-6">
              {step.shape}
              <span className="absolute z-10 text-white text-lg font-bold">{step.id}</span>
            </div>
            <p className="text-[#555] text-[15px] font-medium leading-relaxed pr-4">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}