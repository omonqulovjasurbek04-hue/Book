export default function DiagonalStripe({ bgGradient }) {
  return (
    <div className={`${bgGradient} py-8 md:py-12 skew-y-3 transform translate-y-1 opacity-90 animate-pulse`}>
      <div className="max-w-[1440px] mx-auto px-4 text-white font-bold uppercase text-xs md:text-sm tracking-widest overflow-hidden whitespace-nowrap">
        <div className="animate-scroll">
          Angelfaces • Premium Collection • 8 Languages • Free Delivery • Quality Guaranteed • Angelfaces • Premium Collection • 8 Languages • Free Delivery • Quality Guaranteed •
        </div>
      </div>
    </div>
  )
}
