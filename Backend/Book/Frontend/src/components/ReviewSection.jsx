const reviews = [
  { id: 1, name: "Madina Akramova", text: "Bolalarimga kitob juda yoqdi, ayniqsa ovozli ruchka ularni dars qilishga qiziqtirib qo'ydi.", image: "https://via.placeholder.com/50" },
  { id: 2, name: "Jasur Toyirov", text: "Yetkazib berish juda tez ekan. 48 soat deyilgandi, 24 soatda keldi. Tavsiya qilaman!", image: "https://via.placeholder.com/50" },
  { id: 3, name: "Nilufar G'aniyeva", text: "8 ta til bitta to'plamda bo'lishi juda qulay. Narxi ham hamyonbop.", image: "https://via.placeholder.com/50" },
]

export default function ReviewSection() {
  return (
    <section id="reviews" className="px-4 py-16 max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-[#4A2D7A] text-3xl font-black uppercase">Natijalar</h2>
        <div className="flex gap-2">
          <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-purple-50">←</button>
          <button className="w-10 h-10 bg-[#B944D6] text-white rounded-full flex items-center justify-center shadow-lg">→</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {reviews.map((rev) => (
          <div key={rev.id} className="bg-white p-5 md:p-6 rounded-[20px] md:rounded-[24px] shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={rev.image} className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-purple-200" alt={rev.name} />
              <h4 className="font-bold text-[#4A2D7A] text-sm md:text-base">{rev.name}</h4>
            </div>
            <p className="text-gray-600 italic text-xs md:text-sm leading-relaxed">\"{ rev.text}\"</p>
          </div>
        ))}
      </div>
    </section>
  )
}