import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav className="flex items-center justify-between px-5 md:px-10 lg:px-16 py-4 max-w-1440px mx-auto">
        <a href="#" className="md:hidden text-xl font-bold text-orange-400 tracking-wider uppercase">
          LOGO
        </a>

        <div className="hidden md:flex items-center gap-1">
          <a href="#" className="px-4 py-2 text-gray-800 font-medium text-[15px] hover:text-purple-600 transition-colors">
            Главная
          </a>
          <button className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium text-[15px] hover:text-purple-600 transition-colors">
            Проекты <span className="text-xs ml-0.5">▾</span>
          </button>
          <button className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium text-[15px] hover:text-purple-600 transition-colors">
            Сервисы <span className="text-xs ml-0.5">▾</span>
          </button>
          <a href="#" className="px-4 py-2 text-gray-700 font-medium text-[15px] hover:text-purple-600 transition-colors">
            Контакты
          </a>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="flex items-center gap-1 text-gray-700 text-sm font-medium px-2 py-1.5 hover:text-purple-600 transition-colors">
            Uzb <span className="text-xs">▾</span>
          </button>

          <a
            href="#contact"
            className="border border-purple-400 text-purple-700 text-xs md:text-sm font-medium px-3 py-1.5 md:px-5 md:py-2 rounded-full hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300"
          >
            Biz bilan bog'lanish
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-9 h-9"
            aria-label="Menu"
          >
            <span className={`block w-5 h-2px bg-purple-600 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-6px' : ''}`}></span>
            <span className={`block w-5 h-2px bg-purple-600 rounded-full mt-4px transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-3.5 h-2px bg-purple-600 rounded-full mt-4px transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-6px w-5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/30 z-40" onClick={() => setMenuOpen(false)} />
      )}

      <div className={`md:hidden fixed top-0 right-0 h-full w-260px bg-white shadow-2xl z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <span className="text-lg font-bold text-purple-700">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col p-4 gap-1">
          <a href="#" className="px-4 py-3 rounded-xl text-gray-800 font-medium hover:bg-purple-50 transition-colors">Главная</a>
          <a href="#" className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-purple-50 transition-colors">Проекты</a>
          <a href="#" className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-purple-50 transition-colors">Сервисы</a>
          <a href="#" className="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-purple-50 transition-colors">Контакты</a>
          <hr className="my-2 border-gray-100" />
          <a href="#contact" className="text-center bg-purple-600 text-white font-medium px-5 py-2.5 rounded-xl hover:bg-purple-700 transition-colors">
            Biz bilan bog'lanish
          </a>
        </div>
      </div>
    </header>
  )
}