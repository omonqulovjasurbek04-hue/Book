export default function DualMarquee() {
  // Matnni bir necha marta takrorlaymiz
  const textItem = "ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING."
  const repeatedText = Array(15).fill(textItem).join("   •   ")

  return (
    <div className="relative w-full h-40 md:h-60 overflow-hidden bg-white flex items-center justify-center my-10">
      
      {/* Pastki lenta (burchakka burilgan) */}
      <div className="absolute w-[120%] -left-[10%] h-12 md:h-[60px] bg-gradient-to-r from-[#32c069] to-[#048eed] transform rotate-3 md:rotate-[3deg] flex items-center z-0 shadow-lg">
        <div className="animate-marquee whitespace-nowrap text-white font-bold text-xs md:text-[15px] tracking-widest uppercase">
          {repeatedText}
        </div>
      </div>

      {/* Ustki leta (qarama-qarshi tomonga burilgan, qalinroq) */}
      <div className="absolute w-[120%] -left-[10%] h-14 md:h-[70px] bg-gradient-to-r from-[#ac43c4] to-[#c755dd] transform -rotate-3 md:-rotate-[3deg] flex items-center z-10 shadow-xl">
        <div 
          className="animate-marquee whitespace-nowrap text-white font-extrabold text-sm md:text-[17px] tracking-widest uppercase"
          style={{ animationDirection: 'reverse', animationDuration: '30s' }}
        >
          {repeatedText}
        </div>
      </div>

    </div>
  )
}
