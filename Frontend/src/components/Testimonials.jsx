export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ayisha Astonbayeva',
      role: 'Hamshirasi',
      text: 'Mening bolamning ingliz tili juda yaxshi bo\'ldi. O\'ki Angelfaces bilan!',
      avatar: '👩‍🏫',
    },
    {
      name: 'Abdullayev Mirodil',
      role: 'Ota',
      text: 'Juda qulay dastur. Bolam har kuni o\'rgane boshladi.',
      avatar: '👨‍💼',
    },
    {
      name: 'Xojieva Nilufar',
      role: 'O\'qituvchi',
      text: 'Mektepda ham ishlatib ko\'rdim. Bolalar juda yoqtiradi!',
      avatar: '👩‍🏫',
    },
  ]

  return (
    <section className="px-4 md:px-6 lg:px-10 py-10 md:py-16 max-w-[1440px] mx-auto mb-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#5C3E8A] mb-12 text-center">
        IZOHLAR VA FIKRLAR
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white border-2 border-[#F0E8FF] rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{testimonial.avatar}</div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-purple-600 text-sm font-medium">
                  {testimonial.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-700 text-base leading-relaxed">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
