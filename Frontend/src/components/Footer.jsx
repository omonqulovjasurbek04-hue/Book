export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-black text-purple-700">ANGELFACES</div>
        <p className="text-gray-500 text-sm text-center">
          © 2026 Angelfaces. Barcha huquqlar himoyalangan.
        </p>
        <div className="flex gap-4">
          <span className="text-gray-400 hover:text-purple-600 cursor-pointer">Telegram</span>
          <span className="text-gray-400 hover:text-purple-600 cursor-pointer">Instagram</span>
        </div>
      </div>
    </footer>
  )
}