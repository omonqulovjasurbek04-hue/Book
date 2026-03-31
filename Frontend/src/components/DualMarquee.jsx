export default function DualMarquee() {
  // Matnni bir necha marta takrorlaymiz
  const textItem = "ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING."
  const repeatedText = Array(15).fill(textItem).join("   •   ")

  return (
    <div className="relative w-full h-40 md:h-52 overflow-hidden bg-white flex items-center justify-center my-10">
      
      {/* Yashil lenta (ostida, bir oz o'ngga burilgan) */}
      <div className="absolute w-[120%] h-12 md:h-16 bg-[#28bf6b] transform rotate-1 md:rotate-[1.5deg] flex items-center z-0 shadow-md">
        <div className="animate-marquee whitespace-nowrap text-white font-bold text-xs md:text-[15px] tracking-widest uppercase">
          {repeatedText}
        </div>
      </div>

      {/* Binafsharang lenta (ustida, chapga burilgan, kattaroq va qalinroq) */}
      <div className="absolute w-[120%] h-14 md:h-[72px] bg-[#ac43c4] transform -rotate-3 md:-rotate-[2.5deg] flex items-center z-10 shadow-xl">
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
