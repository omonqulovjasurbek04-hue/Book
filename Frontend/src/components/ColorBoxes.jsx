export default function ColorBoxes() {
  const boxes = [
    {
      color: 'from-[#FF7A18] to-[#FF3D77]',
      title: 'Yuqori sifat',
      description: '3D audio texnologiyasi bilan eng yaxshi sifat',
      icon: '✓',
    },
    {
      color: 'from-[#4F46E5] to-[#7C3AED]',
      title: "Tezkor dostavka",
      description: 'O\'zbekiston bo\'ylab 48 soatda yetkazish',
      icon: '→',
    },
    {
      color: 'from-[#A855F7] to-[#EC4899]',
      title: 'Arzon narx',
      description: '10% chegirma bilan eng qulay narx',
      icon: '★',
    },
  ]

  return (
    <section className="px-4 md:px-6 lg:px-10 py-10 md:py-16 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {boxes.map((box, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${box.color} rounded-2xl p-6 lg:p-8 min-h-[200px] flex flex-col justify-between text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group cursor-pointer`}
          >
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-2">{box.title}</h3>
              <p className="text-white/90 text-base lg:text-lg leading-relaxed">{box.description}</p>
            </div>
            <div className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity self-end">
              {box.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
