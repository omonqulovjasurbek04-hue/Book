export default function StatsSection() {
  const stats = [
    {
      number: '10%',
      label: 'CHEGIRMA',
      bg: 'bg-gradient-to-br from-[#FF7A18] to-[#FF3D77]',
    },
    {
      number: '8',
      label: 'TILDA',
      bg: 'bg-gradient-to-br from-[#4F46E5] to-[#7C3AED]',
    },
    {
      number: '48h',
      label: 'YETKAZISH',
      bg: 'bg-gradient-to-br from-[#A855F7] to-[#EC4899]',
    },
    {
      number: '∞',
      label: 'IMKONIYAT',
      bg: 'bg-gradient-to-br from-[#10B981] to-[#14B8A6]',
    },
  ]

  return (
    <section className="px-4 md:px-6 lg:px-10 py-10 md:py-16 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`${stat.bg} rounded-2xl p-6 lg:p-8 text-white text-center min-h-[140px] flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
          >
            <div className="text-4xl lg:text-5xl font-black mb-2">{stat.number}</div>
            <div className="text-xs lg:text-sm font-bold uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
