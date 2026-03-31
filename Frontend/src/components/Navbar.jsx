import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-50 bg-white">
      
      <nav className="hidden md:flex flex-row items-center justify-between py-5 w-full max-w-[1200px] mx-auto px-6 lg:px-8">

        <div className="flex items-center gap-[35px] lg:gap-[45px]">
          <a href="#" className="text-[#3a3a3a] font-medium text-sm hover:text-purple-600 transition-colors whitespace-nowrap">
            Главная
          </a>
          <button className="flex items-center gap-[6px] text-[#3a3a3a] font-medium text-sm hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer">
            Проекты
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="flex items-center gap-[6px] text-[#3a3a3a] font-medium text-sm hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer">
            Сервисы
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <a href="#" className="text-[#3a3a3a] font-medium text-sm hover:text-purple-600 transition-colors whitespace-nowrap">
            Контакты
          </a>
        </div>

        <div className="flex items-center gap-[28px]">
          <button className="flex items-center gap-[5px] text-[#3a3a3a] text-sm font-medium hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer">
            Uzb
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <a
            href="#contact"
            className="border border-[#784db3] text-[#784db3] text-sm font-medium px-6 py-[9px] rounded-full hover:bg-[#784db3] hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            Biz bilan bog'lanish
          </a>
        </div>
      </nav>

      <nav className="md:hidden flex items-center justify-between px-4 py-3 w-full">
        <a href="#" className="text-4 font-black tracking-widest text-[#F08076] uppercase">
          LOGO
        </a>

        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-1 text-gray-800 text-sm font-medium">
            Uzb
            <svg className="ml-0.5" width="7" height="4" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <a
            href="#contact"
            className="border border-[#c5aeea] text-[#5b3b9b] text-[11px] font-medium px-3.5 py-1.5 rounded-full hover:bg-[#7e22ce] hover:text-white transition-all duration-300"
          >
            Biz bilan bog'lanish
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center justify-center w-7 h-7 gap-[5px] ml-0.5"
            aria-label="Menu"
          >
            <span className={`block h-[2px] bg-[#333] rounded-full transition-all duration-300 w-5 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block h-[2px] bg-[#333] rounded-full transition-all duration-300 w-5 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-[2px] bg-[#333] rounded-full transition-all duration-300 w-5 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/30 z-40" onClick={() => setMenuOpen(false)} />
      )}

      <div className={`md:hidden fixed top-0 right-0 h-full w-[260px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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