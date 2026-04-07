export default function Marquee() {
  return (
    <div className="bg-[#6B4095] py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
      <div className="flex animate-marquee">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="text-white text-xl md:text-2xl font-bold uppercase mx-10">
            Angelfaces to'plamini <span className="text-orange-400">10% chegirma</span> bilan sotib oling! 🚀
          </span>
        ))}
      </div>
    </div>
  )
}