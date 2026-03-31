import ruchka from '../assets/ruchka.png'

const features = [
  'Sifatli 3D audio orqali',
  'Hech qanday grammatik qoidalarsiz',
  "So'z yodlashlarsiz",
  'Istalgan joyda va istalgan vaqtda',
]

export default function PenSection() {
  return (
    <section className="px-4 md:px-6 lg:px-10 py-10 md:py-16 max-w-[1440px] mx-auto">
      {/* DESKTOP VERSION */}
      <div className="hidden md:block">
        <div className="bg-[#F8F4FF] rounded-3xl px-10 lg:px-16 py-12 lg:py-14">
          <div className="flex items-center gap-10 lg:gap-16">
            {/* Pen Image */}
            <div className="w-[42%] lg:w-[38%] flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full bg-[#FDDCC4] flex items-center justify-center relative">
                  <div className="absolute top-12 right-4 flex flex-col gap-1">
                    <div className="w-5 h-5 border-r-2 border-t-2 border-[#FF6B35] rounded-tr-full opacity-60"></div>\n                    <div className="w-8 h-8 border-r-2 border-t-2 border-[#FF6B35] rounded-tr-full opacity-40 -mt-2 ml-1"></div>
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

            {/* Content */}
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
      </div>

      {/* MOBILE VERSION */}
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
        <button className="w-full bg-[#6B4095] hover:bg-[#5a3580] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 text-base shadow-md">
          Buyurtma berish
        </button>
      </div>
    </section>
  )
}