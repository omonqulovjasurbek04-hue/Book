import { useState } from 'react'
import { useLanguage, translations } from '../context/LanguageContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const navLinks = [
    { name: t.home, href: "#" },
    { name: t.collections, href: "#books" },
    { name: t.reviews, href: "#reviews" },
    { name: t.contact, href: "#contact" },
  ]

  const languages = [
    { code: 'uz', name: 'Ўзбек' },
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="flex items-center justify-between px-5 md:px-10 lg:px-16 py-4 max-w-[1440px] mx-auto">
        
        {/* LOGO */}
        <a href="#" className="text-2xl font-black text-purple-700 tracking-tighter uppercase">
          ANGEL<span className="text-orange-500">FACES</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="px-4 py-2 text-gray-700 font-semibold text-[15px] hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="hidden sm:flex items-center gap-1.5 text-gray-700 text-sm font-bold bg-gray-100 px-3 py-2 rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              {language.toUpperCase()}
              <svg className={`w-3 h-3 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
            </button>
            
            {langOpen && (
              <div className="absolute top-12 right-0 bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-32 animate-in fade-in slide-in-from-top-2 duration-200">
                {languages.map(lng => (
                  <button
                    key={lng.code}
                    onClick={() => {
                      setLanguage(lng.code)
                      setLangOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      language === lng.code 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {lng.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="hidden lg:block bg-purple-600 text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-purple-700 shadow-lg shadow-purple-200 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {t.makeOrder}
          </a>

          {/* BURGER BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 bg-purple-50 rounded-xl transition-all duration-300"
          >
            <span className={`block w-5 h-[2.5px] bg-purple-600 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`}></span>
            <span className={`block w-5 h-[2.5px] bg-purple-600 rounded-full mt-[5px] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-[2.5px] bg-purple-600 rounded-full mt-[5px] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-purple-900/20 backdrop-blur-sm z-40 animate-in fade-in duration-200" onClick={() => setMenuOpen(false)} />
      )}

      {/* MOBILE SIDEBAR */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-all duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-50">
          <span className="text-xl font-black text-purple-700">MENU</span>
          <button onClick={() => setMenuOpen(false)} className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 transition-all duration-300 hover:bg-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        
        <div className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setMenuOpen(false)}
              className="px-5 py-4 rounded-2xl text-gray-800 font-bold hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 text-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-4 pt-6 border-t border-gray-100">
            <a href="#contact" className="flex items-center justify-center bg-purple-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-purple-100 transition-all duration-300 hover:bg-purple-700">
              {t.makeOrder}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}