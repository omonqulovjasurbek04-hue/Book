import ruchka from '../assets/ruchka.png'

const features = [
  'Sifatli 3D audio orqali',
  'Hech qanday grammatik qoidalarsiz',
  "So'z yodlashlarsiz",
  'Istalgan joyda va istalgan vaqtda',
]

const steps = [
  {
    number: '1.',
    title: 'Saytda Buyurtma qoldiring',
    gradient: 'from-[#FF7A18] to-[#FF3D77]',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
      </svg>
    ),
  },
  {
    number: '2.',
    title: "Biz siz bilan bog'lanamiz",
    gradient: 'from-[#4F46E5] to-[#7C3AED]',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    number: '3.',
    title: 'Manzilingizga 48 soat ichida yetkazib beramiz',
    gradient: 'from-[#A855F7] to-[#EC4899]',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
]

export default function PenSection() {
  return (
    <section className="px-4 md:px-6 lg:px-10 py-10 md:py-16 max-w-[1440px] mx-auto mb-25">
      <div className="hidden md:block">
        <div className="bg-[#F8F4FF] rounded-3xl px-10 lg:px-16 py-12 lg:py-14">
          <div className="flex items-center gap-10 lg:gap-16">

            <div className="w-[42%] lg:w-[38%] flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full bg-[#FDDCC4] flex items-center justify-center relative">

                  <div className="absolute top-12 right-4 flex flex-col gap-1">
                    <div className="w-5 h-5 border-r-2 border-t-2 border-[#FF6B35] rounded-tr-full opacity-60"></div>
                    <div className="w-8 h-8 border-r-2 border-t-2 border-[#FF6B35] rounded-tr-full opacity-40 -mt-2 ml-1"></div>
                    <div className="w-11 h-11 border-r-2 border-t-2 border-[#FF6B35] rounded-tr-full opacity-25 -mt-3 ml-2"></div>
                  </div>
                  <img
                    src={ruchka}
                    alt="Ovoz chiqaruvchi ruchka"
                    className="h-[85%] object-contain relative z-10 drop-shadow-xl"
                  />
                </div>

                <button className="absolute bottom-16 -left-4 bg-[#6B4095] hover:bg-[#5a3580] text-white rounded-full px-5 py-2.5 flex items-center gap-2.5 shadow-lg transition-colors z-20">
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#6B4095] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Videosini ko'rish</span>
                </button>
              </div>
            </div>


            <div className="flex-1">
              <h2 className="text-[#4A2D7A] text-3xl lg:text-4xl font-extrabold uppercase leading-tight mb-6">
                Ovoz chiqaruvchi<br />ruchka
              </h2>

              <div className="space-y-3.5 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#B944D6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <span className="text-gray-700 text-base lg:text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-[#6B4095] hover:bg-[#5a3580] text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300 text-sm shadow-md">
                Buyurtma berish
              </button>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-3 gap-5 lg:gap-6 mt-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-6 lg:p-7 flex items-end justify-between min-h-[130px] group cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div>
                <p className="text-white/90 text-sm font-bold mb-1">{step.number}</p>
                <p className="text-white font-bold text-base lg:text-lg leading-snug">{step.title}</p>
              </div>
              <div className="flex-shrink-0 ml-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="md:hidden">

        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <div className="w-[240px] h-[240px] rounded-full bg-[#FDDCC4] flex items-center justify-center relative">

              <div className="absolute top-8 right-2 flex flex-col gap-1">
                <div className="w-4 h-4 border-r-2 border-t-2 border-[#FF6B35] rounded-tr-full opacity-60"></div>
                <div className="w-6 h-6 border-r-2 border-t-2 border-[#FF6B35] rounded-tr-full opacity-40 -mt-1 ml-0.5"></div>
                <div className="w-8 h-8 border-r-2 border-t-2 border-[#FF6B35] rounded-tr-full opacity-25 -mt-2 ml-1"></div>
              </div>
              <img
                src={ruchka}
                alt="Ovoz chiqaruvchi ruchka"
                className="h-[85%] object-contain relative z-10 drop-shadow-xl"
              />
            </div>

            <button className="absolute bottom-10 -left-2 bg-[#6B4095] hover:bg-[#5a3580] text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg transition-colors z-20">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-[#6B4095] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="text-xs font-medium">Videosini ko'rish</span>
            </button>
          </div>
        </div>


        <h2 className="text-[#4A2D7A] text-2xl font-extrabold uppercase leading-tight mb-4">
          Ovoz chiqaruvchi ruchka
        </h2>

        <div className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <svg className="w-4.5 h-4.5 text-[#B944D6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              <span className="text-gray-700 text-[15px]">{feature}</span>
            </div>
          ))}
        </div>

        <button className="w-full bg-[#6B4095] hover:bg-[#5a3580] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 text-base shadow-md mb-8">
          Buyurtma berish
        </button>


        <div className="flex flex-col gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-r ${step.gradient} rounded-2xl px-5 py-5 flex items-center justify-between`}
            >
              <div>
                <p className="text-white font-bold text-[15px] leading-snug">
                  {step.number} {step.title}
                </p>
              </div>
              <div className="flex-shrink-0 ml-4 opacity-80">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
