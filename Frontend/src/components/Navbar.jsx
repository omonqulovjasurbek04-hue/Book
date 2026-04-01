import { useState, useRef, useEffect, useContext } from 'react'
import { ModalContext } from '../App'


const languages = [
  { code: 'gb', label: 'Eng' },
  { code: 'uz', label: 'Uzb' },
  { code: 'ru', label: 'Rus' }
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const [mobileLangMenuOpen, setMobileLangMenuOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(languages[0]) // Eng
  const { setModalOpen } = useContext(ModalContext)

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  }

  // Dropdown uchun tashqari bosilganda yopish funksiyasi
  const langRef = useRef(null)
  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangMenuOpen(false)
        setMobileLangMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="relative z-50 bg-white">
      
      <nav className="hidden md:flex flex-row items-center justify-between py-5 w-full max-w-[1200px] mx-auto px-6 lg:px-8">

        <div className="flex items-center gap-[35px] lg:gap-[45px]">
          <a href="#" className="text-[#3a3a3a] font-medium text-[15px] hover:text-[#51368a] transition-colors whitespace-nowrap">
            Главная
          </a>
          <button className="flex items-center gap-[6px] text-[#3a3a3a] font-medium text-[15px] hover:text-[#51368a] transition-colors whitespace-nowrap cursor-pointer">
            Проекты
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="flex items-center gap-[6px] text-[#3a3a3a] font-medium text-[15px] hover:text-[#51368a] transition-colors whitespace-nowrap cursor-pointer">
            Сервисы
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <a href="#" className="text-[#3a3a3a] font-medium text-[15px] hover:text-[#51368a] transition-colors whitespace-nowrap">
            Контакты
          </a>
        </div>

        <div className="flex items-center gap-[28px]" ref={langRef}>
          {/* Desktop Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-[6px] text-[#3a3a3a] text-[15px] font-semibold hover:text-[#51368a] transition-colors whitespace-nowrap cursor-pointer px-2 py-1 rounded-full"
            >
              <img src={`https://flagcdn.com/w80/${selectedLang.code}.png`} alt={selectedLang.label} className="w-[18px] h-[18px] rounded-full object-cover shadow-sm ring-1 ring-gray-100" />
              {selectedLang.label}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`text-gray-500 mt-0.5 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {langMenuOpen && (
              <div className="absolute top-full right-0 mt-3 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden min-w-[110px] py-1.5 z-50">
                {languages.map(lang => (
                  <button 
                    key={lang.code}
                    onClick={() => { setSelectedLang(lang); setLangMenuOpen(false); }}
                    className={`flex items-center gap-3 w-full px-4 py-2 hover:bg-purple-50 transition-colors text-sm font-medium ${selectedLang.code === lang.code ? 'text-[#51368a] bg-purple-50/50' : 'text-gray-700'}`}
                  >
                    <img src={`https://flagcdn.com/w80/${lang.code}.png`} alt={lang.label} className="w-[18px] h-[18px] rounded-full object-cover shrink-0 shadow-sm" />
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button
            onClick={scrollToContact}
            className="border-2 border-[#51368a] text-[#51368a] text-[14px] font-bold px-7 py-2 rounded-full hover:bg-[#51368a] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Biz bilan bog'lanish
          </button>
        </div>
      </nav>

      <nav className="md:hidden flex items-center justify-between px-4 py-3 w-full">
        <a href="#" className="text-4 font-black tracking-widest text-[#F08076] uppercase">
          LOGO
        </a>

        <div className="flex items-center gap-3 lg:gap-4">
          
          {/* Mobile Language Selector */}
          <div className="relative">
            <button 
              onClick={(e) => { e.stopPropagation(); setMobileLangMenuOpen(!mobileLangMenuOpen); }}
              className="flex items-center gap-1.5 text-gray-800 text-[13px] font-semibold bg-gray-50/80 px-2 py-[5px] rounded-full border border-gray-200 shadow-sm hover:border-purple-200"
            >
              <img src={`https://flagcdn.com/w80/${selectedLang.code}.png`} alt={selectedLang.label} className="w-[14px] h-[14px] rounded-full object-cover shrink-0" />
              {selectedLang.label}
              <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className={`text-gray-500 mt-px transition-transform duration-200 ${mobileLangMenuOpen ? 'rotate-180' : ''}`}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {mobileLangMenuOpen && (
              <div className="absolute top-[120%] right-0 bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden min-w-[100px] py-1.5 z-50">
                {languages.map(lang => (
                  <button 
                    key={lang.code}
                    onClick={() => { setSelectedLang(lang); setMobileLangMenuOpen(false); }}
                    className={`flex items-center gap-2.5 w-full px-3.5 py-2 hover:bg-purple-50 text-[13px] font-medium transition-colors ${selectedLang.code === lang.code ? 'text-[#51368a] bg-purple-50/50' : 'text-gray-700'}`}
                  >
                    <img src={`https://flagcdn.com/w80/${lang.code}.png`} alt={lang.label} className="w-[14px] h-[14px] rounded-full object-cover shrink-0 shadow-sm" />
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={scrollToContact}
            className="border-[1.5px] border-[#c0a2f4] text-[#51368a] text-[11px] font-bold px-3 py-[5px] rounded-full focus:ring-2 focus:ring-purple-200 hover:bg-[#51368a] hover:text-white transition-all duration-300 shadow-sm cursor-pointer"
          >
            Biz bilan bog'lanish
          </button>

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
          <button 
            onClick={scrollToContact} 
            className="text-center bg-purple-600 text-white font-medium px-5 py-2.5 rounded-xl hover:bg-purple-700 transition-colors cursor-pointer"
          >
            Biz bilan bog'lanish
          </button>
        </div>
      </div>
    </header>
  )
}