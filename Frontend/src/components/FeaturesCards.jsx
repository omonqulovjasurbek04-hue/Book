export default function FeaturesCards() {
  const cards = [
    {
      title: 'Buni qanday ishlasa?',
      description:
        'Angelfaces to\'plamini 8 tilda tan olish va o\'rganing',
      size: 'large',
      bg: 'bg-[#FFE8DE]',
      color: 'text-[#FF7A18]',
    },
    {
      title: 'Sifatli audio',
      description: '3D audio orqali eng yaxshi tadqiq',
      size: 'medium',
      bg: 'bg-[#E8F1FF]',
      color: 'text-[#4F46E5]',
    },
    {
      title: '10% chegirma',
      description: 'Bugun buyurtma qiling',
      size: 'medium',
      bg: 'bg-[#F6E8FF]',
      color: 'text-[#A855F7]',
    },
    {
      title: 'Kitoblarni o\'rganing',
      description: 'Bolalarga mo\'ljallangan kitoblar',
      size: 'medium',
      bg: 'bg-[#EAFFF8]',
      color: 'text-[#10B981]',
    },
    {
      title: 'Oson usuli',
      description: 'Istalgan joyda istalgan vaqtda',
      size: 'medium',
      bg: 'bg-[#FFF4E6]',
      color: 'text-[#F59E0B]',
    },
    {
      title: 'Bepul konsultatsiya',
      description: 'Mutaxassislarimiz sizga yordam beradi',
      size: 'medium',
      bg: 'bg-[#F3E8FF]',
      color: 'text-[#7C3AED]',
    },
  ]

  return (
    <section className="px-4 md:px-6 lg:px-10 py-10 md:py-16 max-w-[1440px] mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#5C3E8A] mb-10 text-center">
        BUNGA HAQIDA
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-max">
        {/* Large card - takes up 2 rows in the first column */}
        <div
          className={`md:row-span-2 ${cards[0].bg} rounded-2xl p-8 lg:p-10 flex flex-col justify-center min-h-[300px] group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1`}
        >
          <h3 className={`text-2xl lg:text-3xl font-bold ${cards[0].color} mb-4`}>
            {cards[0].title}
          </h3>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            {cards[0].description}
          </p>
        </div>

        {/* Regular cards */}
        {cards.slice(1).map((card, idx) => (
          <div
            key={idx + 1}
            className={`${card.bg} rounded-2xl p-6 lg:p-7 flex flex-col justify-center min-h-[140px] group cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1`}
          >
            <h3 className={`text-lg font-bold ${card.color} mb-2`}>{card.title}</h3>
            <p className="text-gray-700 text-sm lg:text-base">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
