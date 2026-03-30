export default function FeaturesGrid() {
  const items = [
    { title: "3 yoshdan 15 yoshgacha bo'lgan bolalar uchun", bg: "bg-[#FFF4E5]", icon: "👶" },
    { title: "Farzandi chet tillarini o'rganishini xohlovchi ota-onalar uchun", bg: "bg-[#F3E8FF]", icon: "👨‍👩‍👧‍👦" },
    { title: "Maktabgacha ta'lim muassasalari va o'quv markazlari uchun", bg: "bg-[#E5F7FF]", icon: "🏫" },
    { title: "Sayohat qilishni va yangi madaniyatlarni o'rganishni sevuvchilar uchun", bg: "bg-[#E5FFF2]", icon: "🌍" },
    { title: "Xorijiy tillarni mustaqil o'rganmoqchi bo'lganlar uchun", bg: "bg-[#FFF0F0]", icon: "📖" },
    { title: "O'z nutqini va talaffuzini yaxshilamoqchi bo'lganlar uchun", bg: "bg-[#F0F4FF]", icon: "🗣️" },
  ]

  return (
    <section className="px-4 md:px-10 py-16 max-w-[1440px] mx-auto">
      <h2 className="text-center text-[#4A2D7A] text-2xl md:text-4xl font-black uppercase mb-12">
        Robot ustoz kimlar uchun foydali?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className={`${item.bg} p-8 rounded-[32px] flex flex-col items-start gap-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
            <div className="text-4xl">{item.icon}</div>
            <p className="text-[#4A2D7A] font-bold text-lg leading-tight">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}