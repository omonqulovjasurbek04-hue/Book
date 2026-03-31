import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#fcfaff] py-10 md:py-16">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 text-[14px] text-gray-700 font-medium">
          <a href="#" className="hover:text-purple-600 transition-colors">Главная</a>
          <a href="#" className="hover:text-purple-600 transition-colors flex items-center gap-1">Проекты <span className="text-[10px] text-gray-400">▼</span></a>
          <a href="#" className="hover:text-purple-600 transition-colors flex items-center gap-1">Сервисы <span className="text-[10px] text-gray-400">▼</span></a>
          <a href="#" className="hover:text-purple-600 transition-colors">Контакты</a>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <span className="text-gray-600 text-[13px] font-medium tracking-wide">Мы в соцсетях:</span>
          <div className="flex gap-4 text-gray-700">
            {/* Facebook */}
            <a href="#" className="hover:text-purple-600 transition-colors">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-purple-600 transition-colors">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Telegram */}
            <a href="#" className="hover:text-purple-600 transition-colors">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="hover:text-purple-600 transition-colors">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 00-1.94 2C1 8.18 1 12 1 12s0 3.82.46 5.58a2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 001.94-2C23 15.82 23 12 23 12s0-3.82-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  )
}