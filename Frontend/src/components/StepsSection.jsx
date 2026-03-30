export default function StepsSection() {
  const steps = [
    { id: 1, text: "O'zbek tilidagi tushuntirishlarni tinglang" },
    { id: 2, text: "Chet tilidagi so'zlarni qaytaring" },
    { id: 3, text: "Talaffuzingizni tekshiring" },
    { id: 4, text: "Muloqot qilishni boshlang" },
  ]

  return (
    <section className="px-4 py-12 md:py-20 bg-white">
      <h2 className="text-center text-[#4A2D7A] text-xl md:text-4xl font-black uppercase mb-10 md:mb-16">
        Audio kurs qanday ishlaydi?
      </h2>
      <div className="max-w-5xl mx-auto relative flex flex-col md:flex-row justify-between gap-6 md:gap-10">
        {/* Nuqtali chiziq faqat desktopda */}
        <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] border-t-2 border-dashed border-purple-200 z-0"></div>
        
        {steps.map((step) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center text-center max-w-[200px] mx-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-600 text-white text-2xl md:text-3xl font-black rounded-full flex items-center justify-center shadow-xl mb-4 md:mb-6 transform transition-all hover:scale-110 hover:shadow-2xl">
              {step.id}
            </div>
            <p className="text-[#4A2D7A] font-bold leading-snug text-sm md:text-base">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}