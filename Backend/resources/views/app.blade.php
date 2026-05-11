{{-- AUTO-GENERATED: Do not edit manually. Run "node build.js" to regenerate --}}
<!DOCTYPE html>

<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="/web-icon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Angelfaces - Bolalar uchun 8 tilda o'quv kitoblar to'plami. 10% chegirma bilan sotib oling!" />
  <title>Angelfaces - Bolalar kitoblari</title>
  <script type="module" crossorigin src="/build/assets/index-BfrDGelr.js"></script>
  <link rel="stylesheet" crossorigin href="/build/assets/index-B4donurk.css">
</head>
<body class="min-h-screen bg-white font-sans text-gray-900 pb-0 flex flex-col items-center">
  <div class="w-full">
    <!-- Navbar Section -->
    <header class="relative z-50 bg-white" id="navbar">
      <nav class="hidden md:flex flex-row items-center justify-between py-5 w-full max-w-[1200px] mx-auto px-6 lg:px-8">
        <div class="flex items-center gap-[35px] lg:gap-[45px]">
          <a href="#" class="text-[#3a3a3a] font-medium text-[15px] hover:text-[#51368a] transition-colors whitespace-nowrap">Главная</a>
          <button class="flex items-center gap-[6px] text-[#3a3a3a] font-medium text-[15px] hover:text-[#51368a] transition-colors whitespace-nowrap cursor-pointer">
            Проекты
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-400">
              <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="flex items-center gap-[6px] text-[#3a3a3a] font-medium text-[15px] hover:text-[#51368a] transition-colors whitespace-nowrap cursor-pointer">
            Сервисы
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-400">
              <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <a href="#" class="text-[#3a3a3a] font-medium text-[15px] hover:text-[#51368a] transition-colors whitespace-nowrap">Контакты</a>
        </div>

        <div class="flex items-center gap-[28px]" id="langDropdownContainer">
          <!-- Desktop Language Selector -->
          <div class="relative">
            <button onclick="toggleLangMenu()" class="flex items-center gap-[6px] text-[#3a3a3a] text-[15px] font-semibold hover:text-[#51368a] transition-colors whitespace-nowrap cursor-pointer px-2 py-1 rounded-full">
              <img id="currentLangImg" src="https://flagcdn.com/w80/gb.png" alt="Eng" class="w-[18px] h-[18px] rounded-full object-cover shadow-sm ring-1 ring-gray-100" />
              <span id="currentLangLabel">Eng</span>
              <svg id="langArrow" width="10" height="6" viewBox="0 0 10 6" fill="none" class="text-gray-500 mt-0.5 transition-transform duration-200">
                <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div id="langMenu" class="hidden absolute top-full right-0 mt-3 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden min-w-[110px] py-1.5 z-50">
              <button onclick="setLang('gb', 'Eng')" class="flex items-center gap-3 w-full px-4 py-2 hover:bg-purple-50 transition-colors text-sm font-medium text-[#51368a] bg-purple-50/50">
                <img src="https://flagcdn.com/w80/gb.png" alt="Eng" class="w-[18px] h-[18px] rounded-full object-cover shrink-0 shadow-sm" /> Eng
              </button>
              <button onclick="setLang('uz', 'Uzb')" class="flex items-center gap-3 w-full px-4 py-2 hover:bg-purple-50 transition-colors text-sm font-medium text-gray-700">
                <img src="https://flagcdn.com/w80/uz.png" alt="Uzb" class="w-[18px] h-[18px] rounded-full object-cover shrink-0 shadow-sm" /> Uzb
              </button>
              <button onclick="setLang('ru', 'Rus')" class="flex items-center gap-3 w-full px-4 py-2 hover:bg-purple-50 transition-colors text-sm font-medium text-gray-700">
                <img src="https://flagcdn.com/w80/ru.png" alt="Rus" class="w-[18px] h-[18px] rounded-full object-cover shrink-0 shadow-sm" /> Rus
              </button>
            </div>
          </div>
          
          <button onclick="scrollToContact()" class="border-2 border-[#51368a] text-[#51368a] text-[14px] font-bold px-7 py-2 rounded-full hover:bg-[#51368a] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
            Biz bilan bog'lanish
          </button>
        </div>
      </nav>

      <nav class="md:hidden flex items-center justify-between px-4 py-3 w-full">
        <a href="#" class="text-4 font-black tracking-widest text-[#F08076] uppercase">LOGO</a>
        <div class="flex items-center gap-3 lg:gap-4">
          <!-- Mobile Language Selector -->
          <div class="relative" id="mobileLangDropdownContainer">
            <button onclick="toggleMobileLangMenu(event)" class="flex items-center gap-1.5 text-gray-800 text-[13px] font-semibold bg-gray-50/80 px-2 py-[5px] rounded-full border border-gray-200 shadow-sm hover:border-purple-200">
              <img id="mobileCurrentLangImg" src="https://flagcdn.com/w80/gb.png" alt="Eng" class="w-[14px] h-[14px] rounded-full object-cover shrink-0" />
              <span id="mobileCurrentLangLabel">Eng</span>
              <svg id="mobileLangArrow" width="8" height="5" viewBox="0 0 10 6" fill="none" class="text-gray-500 mt-px transition-transform duration-200">
                <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div id="mobileLangMenu" class="hidden absolute top-[120%] right-0 bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden min-w-[100px] py-1.5 z-50">
               <button onclick="setLang('gb', 'Eng')" class="flex items-center gap-2.5 w-full px-3.5 py-2 hover:bg-purple-50 text-[13px] font-medium transition-colors text-[#51368a] bg-purple-50/50">
                  <img src="https://flagcdn.com/w80/gb.png" alt="Eng" class="w-[14px] h-[14px] rounded-full object-cover shrink-0 shadow-sm" /> Eng
               </button>
               <button onclick="setLang('uz', 'Uzb')" class="flex items-center gap-2.5 w-full px-3.5 py-2 hover:bg-purple-50 text-[13px] font-medium transition-colors text-gray-700">
                  <img src="https://flagcdn.com/w80/uz.png" alt="Uzb" class="w-[14px] h-[14px] rounded-full object-cover shrink-0 shadow-sm" /> Uzb
               </button>
               <button onclick="setLang('ru', 'Rus')" class="flex items-center gap-2.5 w-full px-3.5 py-2 hover:bg-purple-50 text-[13px] font-medium transition-colors text-gray-700">
                  <img src="https://flagcdn.com/w80/ru.png" alt="Rus" class="w-[14px] h-[14px] rounded-full object-cover shrink-0 shadow-sm" /> Rus
               </button>
            </div>
          </div>
          <button onclick="scrollToContact()" class="border-[1.5px] border-[#c0a2f4] text-[#51368a] text-[11px] font-bold px-3 py-[5px] rounded-full focus:ring-2 focus:ring-purple-200 hover:bg-[#51368a] hover:text-white transition-all duration-300 shadow-sm cursor-pointer">
            Biz bilan bog'lanish
          </button>
          <button onclick="toggleMobileMenu()" class="flex flex-col items-center justify-center w-7 h-7 gap-[5px] ml-0.5" aria-label="Menu">
            <span id="menuLine1" class="block h-[2px] bg-[#333] rounded-full transition-all duration-300 w-5"></span>
            <span id="menuLine2" class="block h-[2px] bg-[#333] rounded-full transition-all duration-300 w-5"></span>
            <span id="menuLine3" class="block h-[2px] bg-[#333] rounded-full transition-all duration-300 w-5"></span>
          </button>
        </div>
      </nav>

      <div id="mobileMenuOverlay" class="hidden md:hidden fixed inset-0 bg-black/30 z-40" onclick="closeMobileMenu()"></div>

      <div id="mobileMenu" class="md:hidden fixed top-0 right-0 h-full w-[260px] bg-white shadow-2xl z-[55] transform translate-x-full transition-transform duration-300">
        <div class="flex items-center justify-between p-5 border-b border-gray-100">
          <span class="text-lg font-bold text-purple-700">Menu</span>
          <button onclick="closeMobileMenu()" class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <svg class="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-col p-4 gap-1">
          <a href="#" class="px-4 py-3 rounded-xl text-gray-800 font-medium hover:bg-purple-50 transition-colors">Главная</a>
          <a href="#" class="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-purple-50 transition-colors">Проекты</a>
          <a href="#" class="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-purple-50 transition-colors">Сервисы</a>
          <a href="#" class="px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-purple-50 transition-colors">Контакты</a>
          <hr class="my-2 border-gray-100" />
          <button onclick="scrollToContact()" class="text-center bg-purple-600 text-white font-medium px-5 py-2.5 rounded-xl hover:bg-purple-700 transition-colors cursor-pointer">
            Biz bilan bog'lanish
          </button>
        </div>
      </div>
    </header>
    
    <main class="pt-16 w-full">
      <!-- Hero Section -->
      <section id="hero" class="w-full max-w-[1536px] mx-auto">
        <div class="hidden md:block px-4 lg:px-6 xl:px-10 pb-6 pt-1">
          <div class="bg-[#6B4095] rounded-3xl overflow-hidden relative">
            <div class="w-full max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between py-12 lg:py-14 gap-8">
              <div class="flex-1 lg:max-w-xl">
                <h1 class="text-white text-4xl lg:text-[2.75rem] font-bold leading-[1.2] mb-4 uppercase">
                  <span id="heroTitle">Angelfaces to'plamini</span>
                  <span class="text-[#FF8A65]">10%</span>
                  <span id="heroTitleSpan">chegirma bilan sotib oling.</span>
                </h1>
                <p id="heroSubtitle" class="text-purple-200 text-base lg:text-lg mb-8 leading-relaxed">
                  Ingliz, Rus, Xitoy, Fransuz, Kares, Ispan, O'zbek va Arab tillarini tez va oson o'rganing!
                </p>
                <button onclick="scrollToContact()" class="bg-[#D6E8FD] hover:bg-blue-200 text-purple-900 font-bold px-8 py-3.5 rounded-full transition-colors text-base mb-6 cursor-pointer">
                  Buyurtma berish
                </button>
                <div class="flex items-center gap-4 bg-white/10 rounded-2xl px-5 py-4 w-fit">
                  <div class="flex-shrink-0">
                    <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  <p id="heroGuarantee" class="text-white text-sm font-medium leading-tight">
                    Buyurtmangiz 48 soatda yetib bormasa tekinga olasiz.
                  </p>
                </div>
              </div>
              <div class="w-[45%] flex flex-col items-center relative">
                <div class="relative w-full pb-10">
                  <div id="heroSlider" class="group relative w-full h-96 lg:h-[480px] flex justify-center items-center transition-opacity duration-500 opacity-100 perspective-[1200px]">
                    <div class="absolute bottom-6 left-1/2 w-[110%] max-w-[600px] h-[110px] lg:h-[130px] -translate-x-1/2 pointer-events-none z-0">
                      <svg viewBox="0 0 400 100" class="h-full w-full" preserveAspectRatio="none">
                        <path d="M 5 55 C 5 20, 80 5, 200 5 C 320 5, 395 20, 395 55" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="1.5" />
                        <path d="M 5 55 C 5 80, 50 92, 110 95" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="1.5" />
                        <path d="M 102 89 L 112 95 L 102 101" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M 290 95 C 350 92, 395 80, 395 55" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="1.5" />
                      </svg>
                    </div>
                    <div class="absolute top-[2%] left-[0%] lg:-left-4 z-40 transition-opacity duration-300 opacity-100 group-hover:opacity-0 pointer-events-none">
                      <div class="relative">
                        <div class="rounded-[14px] bg-white px-5 py-3 shadow-[0_15px_30px_rgba(0,0,0,0.15)] flex flex-col items-center">
                          <p class="text-[#a832d2] text-9 font-extrabold italic tracking-tighter leading-none mb-1">10%</p>
                          <p class="text-[#a832d2] text-xs font-bold uppercase tracking-widest leading-none mt-1">CHEGIRMA</p>
                        </div>
                        <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[14px] border-l-transparent border-r-transparent border-t-white"></div>
                      </div>
                    </div>
                    <div class="absolute bottom-[25%] left-[-15%] z-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
                      <div class="relative">
                        <div class="bg-white rounded-2xl px-6 py-4 flex flex-col items-start justify-center shadow-[0_15px_30px_rgba(0,0,0,0.15)]">
                          <p class="text-[#997bb3] text-base font-medium italic line-through decoration-[#997bb3] leading-none mb-2 tracking-wide">650.000 som</p>
                          <p class="text-[#4b2d75] text-6 font-black italic leading-none tracking-wide">400.000 som</p>
                        </div>
                        <div class="absolute bottom-5 -right-3 w-0 h-0 border-t-2.5 border-b-2.5 border-l-[16px] border-t-transparent border-b-transparent border-l-white"></div>
                      </div>
                    </div>
                    <div class="relative flex w-full h-full items-center justify-center">
                      <div class="absolute z-10">
                        <img id="desktopLeftBook" src="/build/assets/Books3.png" alt="Book" class="h-auto w-[160px] md:w-48 lg:w-[240px] object-contain" style="opacity: 0.8" />
                      </div>
                      <div class="absolute z-30">
                        <img id="desktopMainBook" src="/build/assets/Books1.png" alt="Book" class="h-auto w-56 md:w-64 lg:w-80 object-contain drop-shadow-2xl" />
                      </div>
                      <div class="absolute z-10">
                        <img id="desktopRightBook" src="/build/assets/Books2.png" alt="Book" class="h-auto w-[160px] md:w-48 lg:w-[240px] object-contain" style="opacity: 0.8" />
                      </div>
                    </div>
                  </div>
                  <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-6 z-40">
                    <button onclick="goToSlide('prev')" class="w-14 h-14 bg-white rounded-full flex items-center justify-center text-purple-900 hover:scale-105 active:scale-95 transition-transform shadow-[0_5px_15px_rgba(0,0,0,0.15)]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button onclick="goToSlide('next')" class="w-14 h-14 bg-white rounded-full flex items-center justify-center text-purple-900 hover:scale-105 active:scale-95 transition-transform shadow-[0_5px_15px_rgba(0,0,0,0.15)]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:hidden px-4">
          <div class="flex flex-col items-center pt-4 pb-2">
            <div class="relative w-full max-w-80">
              <div id="mobileSlider" class="group relative w-full h-[360px] flex justify-center items-center transition-opacity duration-500 opacity-100 perspective-[1000px]">
                <div class="absolute bottom-6 left-1/2 w-[110%] max-w-[340px] h-20 -translate-x-1/2 pointer-events-none z-0">
                  <svg viewBox="0 0 400 100" class="h-full w-full" preserveAspectRatio="none">
                    <path d="M 5 55 C 5 20, 80 5, 200 5 C 320 5, 395 20, 395 55" fill="none" stroke="#222" stroke-width="1.2" />
                    <path d="M 5 55 C 5 80, 50 92, 110 95" fill="none" stroke="#222" stroke-width="1.2" />
                    <path d="M 102 89 L 112 95 L 102 101" fill="none" stroke="#222" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M 290 95 C 350 92, 395 80, 395 55" fill="none" stroke="#222" stroke-width="1.2" />
                  </svg>
                </div>
                <!-- Chegirma badge -->
                <div class="absolute top-[2%] left-[2%] z-40 transition-opacity duration-300 opacity-100 group-hover:opacity-0 pointer-events-none">
                  <div class="relative">
                    <div class="rounded-[14px] bg-white px-4 py-2 shadow-[0_10px_20px_rgba(0,0,0,0.15)] flex flex-col items-center">
                      <p class="text-[#a832d2] text-[28px] font-extrabold italic tracking-tighter leading-none mb-1">10%</p>
                      <p class="text-[#a832d2] text-2.5 font-bold uppercase tracking-widest leading-none mt-0.5">chegirma</p>
                    </div>
                    <div class="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-2.5 border-l-transparent border-r-transparent border-t-white"></div>
                  </div>
                </div>
                <!-- Narx badge -->
                <div class="absolute bottom-[28%] left-[-2%] z-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div class="relative">
                    <div class="bg-white rounded-[16px] px-4 py-3 flex flex-col items-start justify-center shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
                      <p class="text-[#997bb3] text-sm font-medium italic line-through decoration-[#997bb3] leading-none mb-1.5 tracking-wide">650.000 som</p>
                      <p class="text-[#4b2d75] text-5 font-black italic leading-none tracking-wide">400.000 som</p>
                    </div>
                    <div class="absolute bottom-4 -right-2 w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent border-l-white"></div>
                  </div>
                </div>
                <!-- Mobile Books Image Container -->
                <div class="relative flex w-full h-full items-center justify-center">
                  <div class="absolute z-10">
                    <img id="mobileLeftBook" src="/build/assets/Books3.png" alt="Book" class="h-auto w-32 object-contain" style="opacity: 0.8" />
                  </div>
                  <div class="absolute z-30">
                    <img id="mobileMainBook" src="/build/assets/Books1.png" alt="Book" class="h-auto w-48 object-contain drop-shadow-xl" />
                  </div>
                  <div class="absolute z-10">
                    <img id="mobileRightBook" src="/build/assets/Books2.png" alt="Book" class="h-auto w-32 object-contain" style="opacity: 0.8" />
                  </div>
                </div>
              </div>

              <!-- Buttons -->
              <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40">
                <button onclick="goToSlide('prev')" class="w-10 h-10 bg-transparent border-[1.2px] border-[#333] rounded-full flex items-center justify-center text-[#333] hover:bg-gray-100 transition hover:scale-105 active:scale-95">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button onclick="goToSlide('next')" class="w-10 h-10 bg-transparent border-[1.2px] border-[#333] rounded-full flex items-center justify-center text-[#333] hover:bg-gray-100 transition hover:scale-105 active:scale-95">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div class="pt-5 pb-4">
            <h1 class="text-gray-900 text-[1.55rem] font-bold leading-[1.25] mb-3 uppercase">
              <span id="heroMobileTitle">Angelfaces to'plamini</span>
              <span class="text-[#FF8A65]">10%</span>
              <span id="heroMobileTitleSpan">chegirma bilan sotib oling.</span>
            </h1>
            <p id="heroMobileSubtitle" class="text-gray-500 text-sm mb-5 leading-relaxed">
              Ingliz, Rus, Xitoy, Fransuz, Kares, Ispan, O'zbek va Arab tillarini tez va oson o'rganing!
            </p>
            <button onclick="scrollToContact()" class="w-full bg-gradient-to-r from-[#E066FF] to-[#9B59B6] hover:from-[#D055EE] hover:to-[#8A48A5] text-white font-bold px-8 py-4 rounded-full transition-all text-base mb-5 shadow-md cursor-pointer">
              Buyurtma berish
            </button>
            <div class="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-4 py-3.5 mb-2">
              <div class="flex-shrink-0">
                <svg class="w-7 h-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <p id="heroMobileGuarantee" class="text-gray-800 text-sm font-medium leading-tight">
                Buyurtmangiz 48 soatda<br /> yetib bormasa tekinga olasiz.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Books Section -->
      <section id="books-section" class="w-full max-w-[1200px] mx-auto px-6 lg:px-8 py-10 md:py-16">
        <div class="hidden md:flex items-start justify-between gap-10 lg:gap-20">
          <div class="w-72 shrink-0 pt-2 flex flex-col">
            <h2 class="text-[2rem] lg:text-[2.5rem] font-extrabold text-purple-900 leading-tight mb-2">
              8ta tilda
            </h2>
            <p id="booksDesktopSubtitle" class="text-[#a379df] text-base mb-8 font-medium">
              Ingliz tilini o'rganing
            </p>
            <div class="grid grid-cols-4 gap-x-3 gap-y-4 mb-8 w-fit">
              <!-- Flag items -->
              <div onclick="selectFlag('gb', 'Ingliz')" class="flag-item flag-gb ring-4 ring-purple-500 scale-110 shadow-lg w-11 h-11 rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300" title="Ingliz">
                <img src="https://flagcdn.com/w80/gb.png" alt="Ingliz" class="w-full h-full object-cover">
              </div>
              <div onclick="selectFlag('uz', 'O\'zbek')" class="flag-item flag-uz border border-gray-100 shadow-sm hover:scale-105 hover:ring-2 hover:ring-purple-300 w-11 h-11 rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300" title="O'zbek">
                <img src="https://flagcdn.com/w80/uz.png" alt="O'zbek" class="w-full h-full object-cover">
              </div>
              <div onclick="selectFlag('ru', 'Rus')" class="flag-item flag-ru border border-gray-100 shadow-sm hover:scale-105 hover:ring-2 hover:ring-purple-300 w-11 h-11 rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300" title="Rus">
                <img src="https://flagcdn.com/w80/ru.png" alt="Rus" class="w-full h-full object-cover">
              </div>
              <div onclick="selectFlag('sa', 'Arab')" class="flag-item flag-sa border border-gray-100 shadow-sm hover:scale-105 hover:ring-2 hover:ring-purple-300 w-11 h-11 rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300" title="Arab">
                <img src="https://flagcdn.com/w80/sa.png" alt="Arab" class="w-full h-full object-cover">
              </div>
              <div onclick="selectFlag('fr', 'Fransuz')" class="flag-item flag-fr border border-gray-100 shadow-sm hover:scale-105 hover:ring-2 hover:ring-purple-300 w-11 h-11 rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300" title="Fransuz">
                <img src="https://flagcdn.com/w80/fr.png" alt="Fransuz" class="w-full h-full object-cover">
              </div>
              <div onclick="selectFlag('kr', 'Koreys')" class="flag-item flag-kr border border-gray-100 shadow-sm hover:scale-105 hover:ring-2 hover:ring-purple-300 w-11 h-11 rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300" title="Koreys">
                <img src="https://flagcdn.com/w80/kr.png" alt="Koreys" class="w-full h-full object-cover">
              </div>
              <div onclick="selectFlag('es', 'Ispan')" class="flag-item flag-es border border-gray-100 shadow-sm hover:scale-105 hover:ring-2 hover:ring-purple-300 w-11 h-11 rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300" title="Ispan">
                <img src="https://flagcdn.com/w80/es.png" alt="Ispan" class="w-full h-full object-cover">
              </div>
              <div onclick="selectFlag('cn', 'Xitoy')" class="flag-item flag-cn border border-gray-100 shadow-sm hover:scale-105 hover:ring-2 hover:ring-purple-300 w-11 h-11 rounded-full overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300" title="Xitoy">
                <img src="https://flagcdn.com/w80/cn.png" alt="Xitoy" class="w-full h-full object-cover">
              </div>
            </div>
          </div>

          <div class="flex-1 grid grid-cols-3 gap-5 lg:gap-8 overflow-hidden pt-2">
            <!-- Book 1 -->
            <div class="relative bg-blue-50 rounded-3xl flex flex-col items-center justify-between group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 box-border overflow-hidden">
              <div class="w-full h-full px-4 pt-8 pb-8 flex flex-col items-center group-hover:-translate-y-5 transition-transform duration-300">
                <div class="relative w-full h-56 lg:h-60 flex items-center justify-center mb-6">
                  <img src="/build/assets/Books1.png" alt="Children English" class="h-full w-auto object-contain drop-shadow-lg">
                </div>
                <div class="flex flex-col items-center gap-1.5">
                  <h3 class="text-gray-900 font-bold text-base xl:text-[17px] text-center">Children English</h3>
                  <p class="text-[#a379df] font-semibold text-sm text-center uppercase tracking-wide">BOOK 1</p>
                </div>
              </div>
              <div class="absolute bottom-0 left-0 w-full h-14 border-t border-white/60 flex translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/20 backdrop-blur-md z-10">
                <div class="flex-1 flex items-center justify-center gap-2 border-r border-white/60 hover:bg-white/40 transition-colors">
                  <img src="https://flagcdn.com/w80/gb.png" alt="Ingliz" class="booksFlagImg w-5 h-5 rounded-full object-cover shadow-sm ring-1 ring-white/50">
                  <span class="booksFlagText text-gray-900 font-semibold text-[13px]">Ingliz</span>
                  <svg width="8" height="5" viewBox="0 0 10 6" fill="none" class="text-gray-600"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div onclick="scrollToContact()" class="flex-1 flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer">
                  <span class="text-purple-700 font-bold text-[13px] tracking-wide pointer-events-none">Buyurtma qilish</span>
                </div>
              </div>
            </div>
            <!-- Book 2 -->
            <div class="relative bg-orange-50 rounded-3xl flex flex-col items-center justify-between group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 box-border overflow-hidden">
              <div class="w-full h-full px-4 pt-8 pb-8 flex flex-col items-center group-hover:-translate-y-5 transition-transform duration-300">
                <div class="relative w-full h-56 lg:h-60 flex items-center justify-center mb-6">
                  <img src="/build/assets/Books2.png" alt="Children English" class="h-full w-auto object-contain drop-shadow-lg">
                </div>
                <div class="flex flex-col items-center gap-1.5">
                  <h3 class="text-gray-900 font-bold text-base xl:text-[17px] text-center">Children English</h3>
                  <p class="text-[#a379df] font-semibold text-sm text-center uppercase tracking-wide">BOOK 2</p>
                </div>
              </div>
              <div class="absolute bottom-0 left-0 w-full h-14 border-t border-white/60 flex translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/20 backdrop-blur-md z-10">
                <div class="flex-1 flex items-center justify-center gap-2 border-r border-white/60 hover:bg-white/40 transition-colors">
                  <img src="https://flagcdn.com/w80/gb.png" alt="Ingliz" class="booksFlagImg w-5 h-5 rounded-full object-cover shadow-sm ring-1 ring-white/50">
                  <span class="booksFlagText text-gray-900 font-semibold text-[13px]">Ingliz</span>
                  <svg width="8" height="5" viewBox="0 0 10 6" fill="none" class="text-gray-600"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div onclick="scrollToContact()" class="flex-1 flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer">
                  <span class="text-purple-700 font-bold text-[13px] tracking-wide pointer-events-none">Buyurtma qilish</span>
                </div>
              </div>
            </div>
            <!-- Book 3 -->
            <div class="relative bg-fuchsia-50 rounded-3xl flex flex-col items-center justify-between group cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 box-border overflow-hidden">
              <div class="w-full h-full px-4 pt-8 pb-8 flex flex-col items-center group-hover:-translate-y-5 transition-transform duration-300">
                <div class="relative w-full h-56 lg:h-60 flex items-center justify-center mb-6">
                  <img src="/build/assets/Books3.png" alt="Children English" class="h-full w-auto object-contain drop-shadow-lg">
                </div>
                <div class="flex flex-col items-center gap-1.5">
                  <h3 class="text-gray-900 font-bold text-base xl:text-[17px] text-center">Children English</h3>
                  <p class="text-[#a379df] font-semibold text-sm text-center uppercase tracking-wide">BOOK 3</p>
                </div>
              </div>
              <div class="absolute bottom-0 left-0 w-full h-14 border-t border-white/60 flex translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/20 backdrop-blur-md z-10">
                <div class="flex-1 flex items-center justify-center gap-2 border-r border-white/60 hover:bg-white/40 transition-colors">
                  <img src="https://flagcdn.com/w80/gb.png" alt="Ingliz" class="booksFlagImg w-5 h-5 rounded-full object-cover shadow-sm ring-1 ring-white/50">
                  <span class="booksFlagText text-gray-900 font-semibold text-[13px]">Ingliz</span>
                  <svg width="8" height="5" viewBox="0 0 10 6" fill="none" class="text-gray-600"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div onclick="scrollToContact()" class="flex-1 flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer">
                  <span class="text-purple-700 font-bold text-[13px] tracking-wide pointer-events-none">Buyurtma qilish</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:hidden flex flex-col pt-0 pb-4 px-1">
          <div class="flex justify-between items-center mb-5">
            <div class="flex flex-col">
              <h2 class="text-[20px] font-bold text-[#51368a] leading-tight mb-1">8ta tilda</h2>
              <p id="booksMobileSubtitle" class="text-[#a379df] text-[12px] font-medium">Ingliz tilini o'rganing</p>
            </div>
            <button onclick="scrollToContact()" class="bg-[#c24cd2] text-white font-medium px-5 py-2 rounded-full text-[13px] shadow-[0_4px_12px_rgba(186,67,205,0.3)] transform transition-active active:scale-95">
              Buyurtma berish
            </button>
          </div>

          <div class="flex gap-3 overflow-x-auto pt-2 pb-6 px-2 -mx-2 mb-2 flex-nowrap" style="scrollbar-width: none; -ms-overflow-style: none;">
            <!-- Mobile Flag Items -->
            <div onclick="selectFlag('gb', 'Ingliz')" class="mobile-flag-item flag-gb ring-2 ring-[#c24cd2] ring-offset-2 scale-[1.15] shadow-md border-transparent w-10 h-10 shrink-0 rounded-full flex items-center justify-center cursor-pointer transition-all border">
              <div class="w-full h-full rounded-full overflow-hidden"><img src="https://flagcdn.com/w80/gb.png" alt="Ingliz" class="w-full h-full object-cover"></div>
            </div>
            <div onclick="selectFlag('uz', 'O\'zbek')" class="mobile-flag-item flag-uz shadow-sm border-gray-200 w-10 h-10 shrink-0 rounded-full flex items-center justify-center cursor-pointer transition-all border">
              <div class="w-full h-full rounded-full overflow-hidden"><img src="https://flagcdn.com/w80/uz.png" alt="O'zbek" class="w-full h-full object-cover"></div>
            </div>
            <div onclick="selectFlag('ru', 'Rus')" class="mobile-flag-item flag-ru shadow-sm border-gray-200 w-10 h-10 shrink-0 rounded-full flex items-center justify-center cursor-pointer transition-all border">
              <div class="w-full h-full rounded-full overflow-hidden"><img src="https://flagcdn.com/w80/ru.png" alt="Rus" class="w-full h-full object-cover"></div>
            </div>
            <div onclick="selectFlag('sa', 'Arab')" class="mobile-flag-item flag-sa shadow-sm border-gray-200 w-10 h-10 shrink-0 rounded-full flex items-center justify-center cursor-pointer transition-all border">
              <div class="w-full h-full rounded-full overflow-hidden"><img src="https://flagcdn.com/w80/sa.png" alt="Arab" class="w-full h-full object-cover"></div>
            </div>
            <div onclick="selectFlag('fr', 'Fransuz')" class="mobile-flag-item flag-fr shadow-sm border-gray-200 w-10 h-10 shrink-0 rounded-full flex items-center justify-center cursor-pointer transition-all border">
              <div class="w-full h-full rounded-full overflow-hidden"><img src="https://flagcdn.com/w80/fr.png" alt="Fransuz" class="w-full h-full object-cover"></div>
            </div>
            <div onclick="selectFlag('kr', 'Koreys')" class="mobile-flag-item flag-kr shadow-sm border-gray-200 w-10 h-10 shrink-0 rounded-full flex items-center justify-center cursor-pointer transition-all border">
              <div class="w-full h-full rounded-full overflow-hidden"><img src="https://flagcdn.com/w80/kr.png" alt="Koreys" class="w-full h-full object-cover"></div>
            </div>
            <div onclick="selectFlag('es', 'Ispan')" class="mobile-flag-item flag-es shadow-sm border-gray-200 w-10 h-10 shrink-0 rounded-full flex items-center justify-center cursor-pointer transition-all border">
              <div class="w-full h-full rounded-full overflow-hidden"><img src="https://flagcdn.com/w80/es.png" alt="Ispan" class="w-full h-full object-cover"></div>
            </div>
            <div onclick="selectFlag('cn', 'Xitoy')" class="mobile-flag-item flag-cn shadow-sm border-gray-200 w-10 h-10 shrink-0 rounded-full flex items-center justify-center cursor-pointer transition-all border">
              <div class="w-full h-full rounded-full overflow-hidden"><img src="https://flagcdn.com/w80/cn.png" alt="Xitoy" class="w-full h-full object-cover"></div>
            </div>
          </div>

          <div class="relative w-full overflow-hidden mb-6">
            <div id="mobileBooksContainer" class="flex transition-transform duration-300 ease-in-out gap-4" style="transform: translateX(0px);">
              <!-- Book 1 Mobile -->
              <div id="mobileBook0" onclick="toggleMobileBook(0)" class="w-[calc(50%-8px)] shrink-0 bg-blue-50 rounded-[20px] pb-5 pt-5 flex flex-col items-center shadow-sm relative overflow-hidden transition-all duration-300">
                <div class="absolute top-0 right-0 w-8 h-32 bg-white/30 skew-x-[30deg] translate-x-12"></div>
                <div class="book-img-container w-full flex items-center justify-center mb-4 h-[120px]">
                  <img src="/build/assets/Books1.png" alt="Children English" class="h-full w-auto object-contain drop-shadow-md">
                </div>
                <div class="book-text-container flex flex-col items-center transition-transform duration-300 translate-y-0 pointer-events-none">
                  <h3 class="text-gray-900 font-bold text-[13px] text-center px-1 leading-snug">Children English</h3>
                  <p class="text-[#a379df] font-semibold text-[10px] text-center uppercase mt-1 tracking-wide">BOOK 1</p>
                </div>
                <div class="book-overlay absolute bottom-0 left-0 w-full h-11 bg-black/5 flex border-t border-white/60 transition-transform duration-300 z-20 translate-y-full">
                  <div class="flex-[0.8] flex items-center justify-center gap-1.5 border-r border-white/60">
                    <img src="https://flagcdn.com/w80/gb.png" alt="Ingliz" class="booksFlagImg w-3.5 h-3.5 rounded-full object-cover shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                    <span class="booksFlagCode text-gray-800 font-medium text-[11px]">Eng</span>
                    <svg width="6" height="4" viewBox="0 0 10 6" fill="none" class="text-gray-600"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <div onclick="scrollToContact()" class="flex-[1.2] flex items-center justify-center active:bg-black/10 transition-colors cursor-pointer">
                    <span class="text-[#2b3576] font-bold text-[11px] tracking-wide text-center">Buyurtma qilish</span>
                  </div>
                </div>
              </div>
              
              <!-- Book 2 Mobile -->
              <div id="mobileBook1" onclick="toggleMobileBook(1)" class="w-[calc(50%-8px)] shrink-0 bg-orange-50 rounded-[20px] pb-5 pt-5 flex flex-col items-center shadow-sm relative overflow-hidden transition-all duration-300">
                <div class="absolute top-0 right-0 w-8 h-32 bg-white/30 skew-x-[30deg] translate-x-12"></div>
                <div class="book-img-container w-full flex items-center justify-center mb-4 h-[120px]">
                  <img src="/build/assets/Books2.png" alt="Children English" class="h-full w-auto object-contain drop-shadow-md">
                </div>
                <div class="book-text-container flex flex-col items-center transition-transform duration-300 translate-y-0 pointer-events-none">
                  <h3 class="text-gray-900 font-bold text-[13px] text-center px-1 leading-snug">Children English</h3>
                  <p class="text-[#a379df] font-semibold text-[10px] text-center uppercase mt-1 tracking-wide">BOOK 2</p>
                </div>
                <div class="book-overlay absolute bottom-0 left-0 w-full h-11 bg-black/5 flex border-t border-white/60 transition-transform duration-300 z-20 translate-y-full">
                  <div class="flex-[0.8] flex items-center justify-center gap-1.5 border-r border-white/60">
                    <img src="https://flagcdn.com/w80/gb.png" alt="Ingliz" class="booksFlagImg w-3.5 h-3.5 rounded-full object-cover shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                    <span class="booksFlagCode text-gray-800 font-medium text-[11px]">Eng</span>
                    <svg width="6" height="4" viewBox="0 0 10 6" fill="none" class="text-gray-600"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <div onclick="scrollToContact()" class="flex-[1.2] flex items-center justify-center active:bg-black/10 transition-colors cursor-pointer">
                    <span class="text-[#2b3576] font-bold text-[11px] tracking-wide text-center">Buyurtma qilish</span>
                  </div>
                </div>
              </div>

              <!-- Book 3 Mobile -->
              <div id="mobileBook2" onclick="toggleMobileBook(2)" class="w-[calc(50%-8px)] shrink-0 bg-fuchsia-50 rounded-[20px] pb-5 pt-5 flex flex-col items-center shadow-sm relative overflow-hidden transition-all duration-300">
                <div class="absolute top-0 right-0 w-8 h-32 bg-white/30 skew-x-[30deg] translate-x-12"></div>
                <div class="book-img-container w-full flex items-center justify-center mb-4 h-[120px]">
                  <img src="/build/assets/Books3.png" alt="Children English" class="h-full w-auto object-contain drop-shadow-md">
                </div>
                <div class="book-text-container flex flex-col items-center transition-transform duration-300 translate-y-0 pointer-events-none">
                  <h3 class="text-gray-900 font-bold text-[13px] text-center px-1 leading-snug">Children English</h3>
                  <p class="text-[#a379df] font-semibold text-[10px] text-center uppercase mt-1 tracking-wide">BOOK 3</p>
                </div>
                <div class="book-overlay absolute bottom-0 left-0 w-full h-11 bg-black/5 flex border-t border-white/60 transition-transform duration-300 z-20 translate-y-full">
                  <div class="flex-[0.8] flex items-center justify-center gap-1.5 border-r border-white/60">
                    <img src="https://flagcdn.com/w80/gb.png" alt="Ingliz" class="booksFlagImg w-3.5 h-3.5 rounded-full object-cover shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                    <span class="booksFlagCode text-gray-800 font-medium text-[11px]">Eng</span>
                    <svg width="6" height="4" viewBox="0 0 10 6" fill="none" class="text-gray-600"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <div onclick="scrollToContact()" class="flex-[1.2] flex items-center justify-center active:bg-black/10 transition-colors cursor-pointer">
                    <span class="text-[#2b3576] font-bold text-[11px] tracking-wide text-center">Buyurtma qilish</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center items-center gap-4">
            <button id="bookScrollPrevBtn" onclick="scrollBooks('prev')" disabled class="w-8 h-8 rounded-full border flex items-center justify-center transition-colors border-gray-200 text-gray-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button id="bookScrollNextBtn" onclick="scrollBooks('next')" class="w-8 h-8 rounded-full border flex items-center justify-center transition-colors border-gray-400 text-gray-600 active:bg-gray-100">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </section>
      
      <!-- Pen Section -->
      <section id="pen-section" class="w-full py-16 md:py-20 mb-10 bg-[#FCFAFF]">
        <div class="w-full max-w-[1240px] mx-auto px-6 lg:px-10">
          
          <!-- DESKTOP -->
          <div class="hidden md:flex flex-col items-center w-full">
            <div class="flex flex-col md:flex-row items-center justify-between w-full max-w-[1000px] gap-12 lg:gap-24 mb-20 relative">
              <div class="relative flex-shrink-0 w-72 md:w-80 lg:w-96 flex justify-center">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full bg-[#f3ae99] z-0 shadow-inner"></div>
                <svg class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-10 pointer-events-none opacity-90" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50 150 C 30 120, 30 80, 50 50" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M 65 135 C 50 115, 50 85, 65 65" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M 150 150 C 170 120, 170 80, 150 50" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M 135 135 C 150 115, 150 85, 135 65" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <img src="/build/assets/ruchka.png" alt="Ovoz chiqaruvchi ruchka" class="w-[85%] object-contain relative z-20 hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] -rotate-6" />
                <button class="absolute left-1/2 -translate-x-1/2 -bottom-4 md:bottom-auto md:-translate-x-0 md:-left-16 md:top-1/4 bg-[#5E4C8E] hover:bg-[#4d3d75] text-white rounded-full pr-5 pl-2 py-2 flex items-center gap-3 shadow-[0_5px_15px_rgba(94,76,142,0.4)] transition-all z-30 hover:scale-105">
                  <div class="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <span class="text-sm font-medium tracking-wide">Videosini ko'rish</span>
                </button>
              </div>

              <div class="flex-1 w-full flex flex-col items-start px-2">
                <h2 class="text-[#51368a] text-[1.65rem] md:text-3xl lg:text-[2rem] font-black uppercase mb-8 leading-tight tracking-wide">
                  OVOZ CHIQARUVCHI <br /> RUCHKA
                </h2>
                <div class="space-y-4 mb-10 w-full">
                  <div class="flex items-center gap-3.5">
                    <svg class="w-[22px] h-[22px] text-[#51368a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <span class="text-[#333] font-medium lg:text-[17px]">Sifatli 3D audio orqali</span>
                  </div>
                  <div class="flex items-center gap-3.5">
                    <svg class="w-[22px] h-[22px] text-[#51368a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <span class="text-[#333] font-medium lg:text-[17px]">Hech qanday grammatik qoidalarsiz</span>
                  </div>
                  <div class="flex items-center gap-3.5">
                    <svg class="w-[22px] h-[22px] text-[#51368a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <span class="text-[#333] font-medium lg:text-[17px]">So'z yodlashlarsiz</span>
                  </div>
                  <div class="flex items-center gap-3.5">
                    <svg class="w-[22px] h-[22px] text-[#51368a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <span class="text-[#333] font-medium lg:text-[17px]">Istalgan joyda va istalgan vaqtda</span>
                  </div>
                </div>
                <button onclick="scrollToContact()" class="bg-[#cc4ac1] hover:bg-[#b53fa9] text-white font-semibold px-8 py-3.5 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-md cursor-pointer">
                  Buyurtma berish
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 justify-center w-full">
              <!-- Step 1 -->
              <div class="relative bg-gradient-to-r from-[#FF8A65] to-[#FF6B6B] rounded-[24px] p-6 lg:p-7 overflow-hidden min-h-[150px] flex flex-col justify-start cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div class="text-white z-10 opacity-80 mb-6 w-8 h-8">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full drop-shadow-sm" style="transform: rotate(-45deg)"><path d="M7 3h10v12l-3 4h-4l-3-4V3z" /><path d="M7 7h10" /></svg>
                </div>
                <div class="z-10 mt-auto">
                  <p class="text-white font-bold text-base leading-tight w-11/12">1. Saytda Buyurtma <br/> qoldiring</p>
                </div>
                <div class="absolute -bottom-8 -right-8 w-36 h-36 text-white opacity-20 transition-transform duration-500 group-hover:scale-110 pointer-events-none">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full drop-shadow-sm" style="transform: rotate(-45deg)"><path d="M7 3h10v12l-3 4h-4l-3-4V3z" /><path d="M7 7h10" /></svg>
                </div>
              </div>
              <!-- Step 2 -->
              <div class="relative bg-gradient-to-r from-[#577BDE] to-[#3B82F6] rounded-[24px] p-6 lg:p-7 overflow-hidden min-h-[150px] flex flex-col justify-start cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div class="text-white z-10 opacity-80 mb-6 w-8 h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div class="z-10 mt-auto">
                  <p class="text-white font-bold text-base leading-tight w-11/12">2. Biz siz bilan <br/> bog`lanamiz</p>
                </div>
                <div class="absolute -bottom-8 -right-8 w-36 h-36 text-white opacity-20 transition-transform duration-500 group-hover:scale-110 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
              </div>
              <!-- Step 3 -->
              <div class="relative bg-gradient-to-r from-[#B947DB] to-[#E9439D] rounded-[24px] p-6 lg:p-7 overflow-hidden min-h-[150px] flex flex-col justify-start cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div class="text-white z-10 opacity-80 mb-6 w-8 h-8">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M2 10h4" /><path d="M1 14h5" /><rect x="8" y="5" width="11" height="11" rx="1" /><path d="M19 10h3l2 3v3h-5v-6z" /><circle cx="11.5" cy="18" r="2.5" /><circle cx="21.5" cy="18" r="2.5" /></svg>
                </div>
                <div class="z-10 mt-auto">
                  <p class="text-white font-bold text-base leading-tight w-11/12">3. Manzilingizga 48 soat ichida <br/> yetkazib beramiz</p>
                </div>
                <div class="absolute -bottom-8 -right-8 w-36 h-36 text-white opacity-20 transition-transform duration-500 group-hover:scale-110 pointer-events-none">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M2 10h4" /><path d="M1 14h5" /><rect x="8" y="5" width="11" height="11" rx="1" /><path d="M19 10h3l2 3v3h-5v-6z" /><circle cx="11.5" cy="18" r="2.5" /><circle cx="21.5" cy="18" r="2.5" /></svg>
                </div>
              </div>
            </div>
          </div>

          <!-- MOBIL -->
          <div class="md:hidden w-full">
            <div class="bg-transparent pt-4 pb-4 px-4 flex flex-col items-center w-full">
              <div class="flex flex-col items-center mb-12 w-full relative">
                <div class="w-[280px] h-[280px] rounded-full bg-[#ef9c86] flex items-center justify-center relative shadow-sm mb-6 mt-2 overflow-visible">
                  <svg class="absolute left-[8%] bottom-[20%] opacity-90 w-[50px] h-[70px]" viewBox="0 0 55 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 5 C 30 20, 30 60, 50 75" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" />
                    <path d="M38 12 C 22 25, 22 55, 38 68" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" />
                    <path d="M26 20 C 15 30, 15 50, 26 60" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" />
                  </svg>
                  <svg class="absolute right-[8%] top-[20%] opacity-90 w-[50px] h-[70px]" viewBox="0 0 55 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5 C 25 20, 25 60, 5 75" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" />
                    <path d="M17 12 C 33 25, 33 55, 17 68" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" />
                    <path d="M29 20 C 40 30, 40 50, 29 60" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" />
                  </svg>
                  <img src="/build/assets/ruchka.png" alt="Ovoz chiqaruvchi ruchka" class="absolute h-[115%] w-auto object-contain z-10 drop-shadow-2xl -rotate-6" />
                </div>
                <button class="bg-[#6a4f91] hover:bg-[#5b3e83] text-white rounded-[30px] px-6 py-2 flex items-center gap-3 shadow-[0_4px_12px_rgba(106,76,149,0.3)] transition-transform hover:scale-105 z-20 absolute -bottom-5">
                  <div class="w-[24px] h-[24px] border-[1.5px] border-white rounded-full flex items-center justify-center shrink-0">
                    <svg class="w-3 h-3 text-white ml-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                  <span class="text-[13px] font-medium tracking-wide">Videosini ko'rish</span>
                </button>
              </div>

              <div class="w-full text-left mb-5 pl-1">
                <h2 class="text-[#594285] text-[22px] font-bold uppercase leading-snug w-[80%]">Ovoz chiqaruvchi ruchka</h2>
              </div>
              <div class="w-full space-y-4 mb-8 pl-1">
                <div class="flex items-center gap-3">
                  <svg class="w-[20px] h-[20px] text-[#6a4f91] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span class="text-[#333] text-[14px] font-medium leading-snug">Sifatli 3D audio orqali</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg class="w-[20px] h-[20px] text-[#6a4f91] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span class="text-[#333] text-[14px] font-medium leading-snug">Hech qanday grammatik qoidalarsiz</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg class="w-[20px] h-[20px] text-[#6a4f91] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span class="text-[#333] text-[14px] font-medium leading-snug">So'z yodlashlarsiz</span>
                </div>
                <div class="flex items-center gap-3">
                  <svg class="w-[20px] h-[20px] text-[#6a4f91] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span class="text-[#333] text-[14px] font-medium leading-snug">Istalgan joyda va istalgan vaqtda</span>
                </div>
              </div>
              <button onclick="scrollToContact()" class="w-full bg-gradient-to-r from-[#ba43cd] to-[#d846b8] hover:opacity-90 text-white font-bold py-3.5 rounded-[30px] transition-all duration-300 text-[15px] shadow-[0_4px_12px_rgba(186,67,205,0.3)] cursor-pointer">
                Buyurtma berish
              </button>
            </div>

            <div class="flex flex-col gap-4">
              <div class="relative bg-gradient-to-r from-[#FF8A65] to-[#FF6B6B] rounded-2xl px-5 py-6 flex flex-col justify-between min-h-32 overflow-hidden group">
                <div class="w-11 h-11 text-white z-10 mb-4 opacity-100">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full drop-shadow-sm" style="transform: rotate(-45deg)"><path d="M7 3h10v12l-3 4h-4l-3-4V3z" /><path d="M7 7h10" /></svg>
                </div>
                <div class="z-10"><p class="text-white font-semibold text-sm leading-snug w-5/6">1. Saytda Buyurtma <br/> qoldiring</p></div>
                <div class="absolute -bottom-5 -right-5 w-32 h-32 text-white opacity-30 group-hover:scale-110 transition-transform duration-500">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full drop-shadow-sm" style="transform: rotate(-45deg)"><path d="M7 3h10v12l-3 4h-4l-3-4V3z" /><path d="M7 7h10" /></svg>
                </div>
              </div>
              <div class="relative bg-gradient-to-r from-[#577BDE] to-[#3B82F6] rounded-2xl px-5 py-6 flex flex-col justify-between min-h-32 overflow-hidden group">
                <div class="w-11 h-11 text-white z-10 mb-4 opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div class="z-10"><p class="text-white font-semibold text-sm leading-snug w-5/6">2. Biz siz bilan <br/> bog`lanamiz</p></div>
                <div class="absolute -bottom-5 -right-5 w-32 h-32 text-white opacity-30 group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
              </div>
              <div class="relative bg-gradient-to-r from-[#B947DB] to-[#E9439D] rounded-2xl px-5 py-6 flex flex-col justify-between min-h-32 overflow-hidden group">
                <div class="w-11 h-11 text-white z-10 mb-4 opacity-100">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M2 10h4" /><path d="M1 14h5" /><rect x="8" y="5" width="11" height="11" rx="1" /><path d="M19 10h3l2 3v3h-5v-6z" /><circle cx="11.5" cy="18" r="2.5" /><circle cx="21.5" cy="18" r="2.5" /></svg>
                </div>
                <div class="z-10"><p class="text-white font-semibold text-sm leading-snug w-5/6">3. Manzilingizga 48 soat ichida <br/> yetkazib beramiz</p></div>
                <div class="absolute -bottom-5 -right-5 w-32 h-32 text-white opacity-30 group-hover:scale-110 transition-transform duration-500">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M2 10h4" /><path d="M1 14h5" /><rect x="8" y="5" width="11" height="11" rx="1" /><path d="M19 10h3l2 3v3h-5v-6z" /><circle cx="11.5" cy="18" r="2.5" /><circle cx="21.5" cy="18" r="2.5" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Features Grid -->
      <section id="features-grid" class="px-5 md:px-10 pt-4 pb-10 md:py-20 max-w-[1240px] mx-auto bg-white mb-2">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 auto-rows-fr">
          
          <div class="flex flex-col justify-center items-start md:mb-0 lg:pr-6 md:col-span-1 lg:col-span-1 md:min-h-[260px]">
            <h2 class="text-[#594285] md:text-[#51368a] text-[16px] md:text-3xl lg:text-[2rem] font-bold uppercase mb-2 md:mb-4 leading-normal tracking-wide w-full pr-4 md:pr-0">
              ROBOT USTOZ KIMLAR UCHUN FOYDALI.
            </h2>
            <p class="text-[#555] font-medium text-[13px] md:text-[15px] leading-relaxed w-[95%] md:w-full">
              Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi
            </p>
          </div>

          <!-- item blue -->
          <div class="bg-[#e2edff] p-6 pb-[90px] rounded-[20px] flex flex-col items-start gap-3 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 relative overflow-hidden group min-h-[240px] shadow-sm">
            <div class="w-10 h-10 text-[#594285] z-10 mb-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="10" cy="7" r="3.5" />
                <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
                <circle cx="17" cy="11" r="2.5" />
                <path d="M17 15.5c2 0 4 1 4 3.5V21" />
              </svg>
            </div>
            <div class="z-10 flex-col flex-1 relative">
              <h4 class="text-[#594285] font-bold text-[17px] leading-snug mb-2 max-w-[90%]">Farzandlari va nevaralari ko'p bo'lgan oilalar</h4>
              <p class="text-[#444] text-[14.5px] font-medium leading-[1.6]">uchun atiga bitta to'plam orqali ko'plab bolalar o'rganishi mumkin</p>
            </div>
            <div class="absolute -bottom-10 -right-10 w-44 h-44 bg-white/60 backdrop-blur-sm rounded-full z-0 flex items-center justify-center pl-4 pb-4">
              <div class="w-28 h-28 text-[#aa8ced] opacity-50">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="10" cy="7" r="3.5" />
                  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
                  <circle cx="17" cy="11" r="2.5" />
                  <path d="M17 15.5c2 0 4 1 4 3.5V21" />
                </svg>
              </div>
            </div>
          </div>

          <!-- item peach -->
          <div class="bg-[#feece5] p-6 pb-[90px] rounded-[20px] flex flex-col items-start gap-3 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 relative overflow-hidden group min-h-[240px] shadow-sm">
            <div class="w-10 h-10 text-[#ff4e56] z-10 mb-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="6" width="16" height="12" rx="2" />
                <text x="10" y="14" font-family="sans-serif" font-size="6" font-weight="bold" text-anchor="middle" fill="currentColor" stroke="none">0</text>
                <path d="M22 10v10a2 2 0 0 1-2 2H6" />
              </svg>
            </div>
            <div class="z-10 flex-col flex-1 relative">
              <h4 class="text-[#ff4e56] font-bold text-[17px] leading-snug mb-2 max-w-[90%]">Qayta va qayta kursga pul</h4>
              <p class="text-[#444] text-[14.5px] font-medium leading-[1.6]">to'lab charchagan ota-onalar uchun</p>
            </div>
            <div class="absolute -bottom-10 -right-10 w-44 h-44 bg-white/60 backdrop-blur-sm rounded-full z-0 flex items-center justify-center pl-4 pb-4">
              <div class="w-28 h-28 text-[#ff9272] opacity-50">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="6" width="16" height="12" rx="2" />
                  <text x="10" y="14" font-family="sans-serif" font-size="6" font-weight="bold" text-anchor="middle" fill="currentColor" stroke="none">0</text>
                  <path d="M22 10v10a2 2 0 0 1-2 2H6" />
                </svg>
              </div>
            </div>
          </div>

          <!-- item pink -->
          <div class="bg-[#f5e5fc] p-6 pb-[90px] rounded-[20px] flex flex-col items-start gap-3 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 relative overflow-hidden group min-h-[240px] shadow-sm">
            <div class="w-10 h-10 text-[#ad30d5] z-10 mb-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div class="z-10 flex-col flex-1 relative">
              <h4 class="text-[#ad30d5] font-bold text-[17px] leading-snug mb-2 max-w-[90%]">Qayta va qayta kurslarga pul</h4>
              <p class="text-[#444] text-[14.5px] font-medium leading-[1.6]">sarflashni yechimi qidirganlar uchun</p>
            </div>
            <div class="absolute -bottom-10 -right-10 w-44 h-44 bg-white/60 backdrop-blur-sm rounded-full z-0 flex items-center justify-center pl-4 pb-4">
              <div class="w-28 h-28 text-[#dfa5ed] opacity-50">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>
          </div>

          <!-- item yellow -->
          <div class="bg-[#feffe5] p-6 pb-[90px] rounded-[20px] flex flex-col items-start gap-3 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 relative overflow-hidden group min-h-[240px] shadow-sm">
            <div class="w-10 h-10 text-[#dbcf1f] z-10 mb-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div class="z-10 flex-col flex-1 relative">
              <h4 class="text-[#dbcf1f] font-bold text-[17px] leading-snug mb-2 max-w-[90%]">Jahon Tillarni til egalarigan</h4>
              <p class="text-[#444] text-[14.5px] font-medium leading-[1.6]">(native speaker) o'rganmoqchi bo'lganlar uchun.</p>
            </div>
            <div class="absolute -bottom-10 -right-10 w-44 h-44 bg-white/60 backdrop-blur-sm rounded-full z-0 flex items-center justify-center pl-4 pb-4">
              <div class="w-28 h-28 text-[#e6df83] opacity-50">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- item mint -->
          <div class="bg-[#e5f5ea] p-6 pb-[90px] rounded-[20px] flex flex-col items-start gap-3 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 relative overflow-hidden group min-h-[240px] shadow-sm">
            <div class="w-10 h-10 text-[#0ba856] z-10 mb-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </div>
            <div class="z-10 flex-col flex-1 relative">
              <h4 class="text-[#0ba856] font-bold text-[17px] leading-snug mb-2 max-w-[90%]">Qiziqarli o'yinlar, mashqlar hamda ashulalar</h4>
              <p class="text-[#444] text-[14.5px] font-medium leading-[1.6]">yordamida o'rganishini hohlovchilar uchun.</p>
            </div>
            <div class="absolute -bottom-10 -right-10 w-44 h-44 bg-white/60 backdrop-blur-sm rounded-full z-0 flex items-center justify-center pl-4 pb-4">
              <div class="w-28 h-28 text-[#93e0b5] opacity-50">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Dual Marquee -->
      <section id="dual-marquee">
        <div class="relative w-full overflow-hidden bg-white" style="height: 220px; margin: 40px 0;">
          
          <!-- 1-chi ribbon: Purple (yuqori) -->
          <div class="absolute left-1/2 flex items-center z-10 shadow-lg pointer-events-none" style="width: 160%; max-width: 2200px; height: 96px; top: 42px; transform: translateX(-50%) skewY(-2deg); background: linear-gradient(92.1deg, #943BD6 0%, #DA43C4 100%); border-radius: 24px;">
            <div class="animate-marquee whitespace-nowrap text-white font-extrabold text-sm md:text-[17px] tracking-widest uppercase" style="animation-direction: reverse; animation-duration: 30s; padding-left: 40px;">
              ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.
            </div>
          </div>

          <!-- 2-chi ribbon: Green-Blue (pastki) -->
          <div class="absolute left-1/2 flex items-center z-0 shadow-lg pointer-events-none" style="width: 160%; max-width: 2200px; height: 96px; top: 118px; transform: translateX(-50%) skewY(2deg); background: linear-gradient(92.1deg, #32C069 23.24%, #048EED 90.43%); border-radius: 24px;">
            <div class="animate-marquee whitespace-nowrap text-white font-bold text-xs md:text-[15px] tracking-widest uppercase" style="animation-duration: 26s; padding-left: 40px;">
              ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.   •   ANGELFACES TO'PLAMINI 10% CHEGIRMA BILAN SOTIB OLING.
            </div>
          </div>
        </div>
      </section>
      
      <!-- Steps & Order Form -->
      <div class="w-full bg-white pb-10">
        <!-- Steps Section -->
        <section id="steps-section" class="px-4 py-16 md:py-24 bg-[#FCFBFF] overflow-hidden">
          <div class="max-w-[1300px] mx-auto text-left mb-10 md:mb-[70px] relative z-20">
            <h2 class="text-[#6a549e] text-2xl md:text-[36px] font-bold uppercase leading-[1.3] w-fit pl-2 md:pl-10 tracking-wide">
              Audio kurs kimlar <br class="hidden md:block" /> uchun foydali?
            </h2>
          </div>

          <!-- Desktop View -->
          <div class="hidden md:block relative w-full h-[400px] max-w-[1300px] mx-auto">
            <svg class="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M -5,10 C 5,65 12,65 20,65 S 30,25 40,25 S 50,55 60,55 S 70,45 80,45 S 90,45 105,45" fill="none" stroke="#666" stroke-width="1.2" vector-effect="non-scaling-stroke"/>
            </svg>

            <!-- Step 1 -->
            <div class="absolute flex flex-col items-start w-[180px] lg:w-[210px] z-10" style="top: calc(65% - 52.5px); left: calc(20% - 52.5px);">
              <div class="w-[105px] h-[105px] relative flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-default" style="margin-left: 0;">
                <svg class="w-full h-full text-[#4bc4f6] drop-shadow-md" viewBox="0 0 100 100" fill="currentColor">
                  <rect x="20" y="20" width="60" height="60" rx="10" transform="rotate(0 50 50)" />
                  <rect x="20" y="20" width="60" height="60" rx="10" transform="rotate(45 50 50)" />
                </svg>
                <span class="absolute z-10 text-white text-[19px] font-extrabold font-sans tracking-wide">01</span>
              </div>
              <p class="mt-6 text-[#555] text-[13px] md:text-[14px] font-medium text-left leading-[1.6]">
                Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi
              </p>
            </div>

            <!-- Step 2 -->
            <div class="absolute flex flex-col items-start w-[180px] lg:w-[210px] z-10" style="top: calc(25% - 52.5px); left: calc(40% - 52.5px);">
              <div class="w-[105px] h-[105px] relative flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-default" style="margin-left: 0;">
                <svg class="w-full h-full text-[#6a67ac] drop-shadow-md" viewBox="0 0 100 100" fill="currentColor">
                  <polygon points="50,15 61,38 90,38 67,56 76,82 50,68 24,82 33,56 10,38 39,38" />
                </svg>
                <span class="absolute z-10 text-white text-[19px] font-extrabold font-sans tracking-wide">02</span>
              </div>
              <p class="mt-6 text-[#555] text-[13px] md:text-[14px] font-medium text-left leading-[1.6]">
                Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi
              </p>
            </div>

            <!-- Step 3 -->
            <div class="absolute flex flex-col items-start w-[180px] lg:w-[210px] z-10" style="top: calc(55% - 52.5px); left: calc(60% - 52.5px);">
              <div class="w-[105px] h-[105px] relative flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-default" style="margin-left: 0;">
                <div class="w-[66%] h-[66%] rounded-full bg-[#efc854] drop-shadow-md m-auto absolute inset-0"></div>
                <span class="absolute z-10 text-white text-[19px] font-extrabold font-sans tracking-wide">03</span>
              </div>
              <p class="mt-6 text-[#555] text-[13px] md:text-[14px] font-medium text-left leading-[1.6]">
                Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi
              </p>
            </div>

            <!-- Step 4 -->
            <div class="absolute flex flex-col items-start w-[180px] lg:w-[210px] z-10" style="top: calc(45% - 52.5px); left: calc(80% - 80px);">
              <div class="w-[105px] h-[105px] relative flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-default" style="margin-left: 27.5px;">
                <svg class="w-full h-full text-[#22c85e] drop-shadow-md" viewBox="0 0 100 100" fill="currentColor">
                  <polygon points="50,10 59,33 82,18 71,42 94,50 71,58 82,82 59,67 50,90 41,67 18,82 29,58 6,50 29,42 18,18 41,33" />
                </svg>
                <span class="absolute z-10 text-white text-[19px] font-extrabold font-sans tracking-wide">04</span>
              </div>
              <p class="mt-6 text-[#555] text-[13px] md:text-[14px] font-medium text-left leading-[1.6]">
                Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi
              </p>
            </div>
          </div>

          <!-- Mobile View -->
          <div class="block md:hidden max-w-sm mx-auto space-y-12 mt-12 pb-8">
            <div class="flex flex-col items-start text-left pl-6">
              <div class="w-24 h-24 relative flex items-center justify-center mb-6">
                <svg class="w-full h-full text-[#4bc4f6] drop-shadow-md" viewBox="0 0 100 100" fill="currentColor">
                  <rect x="20" y="20" width="60" height="60" rx="10" transform="rotate(0 50 50)" />
                  <rect x="20" y="20" width="60" height="60" rx="10" transform="rotate(45 50 50)" />
                </svg>
                <span class="absolute z-10 text-white text-lg font-bold">01</span>
              </div>
              <p class="text-[#555] text-[15px] font-medium leading-relaxed pr-4">Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi</p>
            </div>
            <div class="flex flex-col items-start text-left pl-6">
              <div class="w-24 h-24 relative flex items-center justify-center mb-6">
                <svg class="w-full h-full text-[#6a67ac] drop-shadow-md" viewBox="0 0 100 100" fill="currentColor">
                  <polygon points="50,15 61,38 90,38 67,56 76,82 50,68 24,82 33,56 10,38 39,38" />
                </svg>
                <span class="absolute z-10 text-white text-lg font-bold">02</span>
              </div>
              <p class="text-[#555] text-[15px] font-medium leading-relaxed pr-4">Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi</p>
            </div>
            <div class="flex flex-col items-start text-left pl-6">
              <div class="w-24 h-24 relative flex items-center justify-center mb-6">
                <div class="w-[66%] h-[66%] rounded-full bg-[#efc854] drop-shadow-md m-auto absolute inset-0"></div>
                <span class="absolute z-10 text-white text-lg font-bold">03</span>
              </div>
              <p class="text-[#555] text-[15px] font-medium leading-relaxed pr-4">Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi</p>
            </div>
            <div class="flex flex-col items-start text-left pl-6">
              <div class="w-24 h-24 relative flex items-center justify-center mb-6">
                <svg class="w-full h-full text-[#22c85e] drop-shadow-md" viewBox="0 0 100 100" fill="currentColor">
                  <polygon points="50,10 59,33 82,18 71,42 94,50 71,58 82,82 59,67 50,90 41,67 18,82 29,58 6,50 29,42 18,18 41,33" />
                </svg>
                <span class="absolute z-10 text-white text-lg font-bold">04</span>
              </div>
              <p class="text-[#555] text-[15px] font-medium leading-relaxed pr-4">Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi</p>
            </div>
          </div>
        </section>

        <!-- Order Form Section -->
        <section id="contact" class="px-5 py-10 max-w-[1240px] mx-auto pb-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 min-h-auto">
            <div class="bg-[#eaf1ff] border-2 border-[#1E90FF] rounded-[20px] p-6 pb-[250px] md:pb-12 md:p-12 flex flex-col relative overflow-hidden min-h-[440px] md:min-h-[559px] w-full">
              <div class="absolute top-[200px] -right-[100px] md:top-[269px] md:-right-[169px] w-[350px] md:w-[529px] aspect-square bg-gradient-to-b from-[#e98f8e] to-[#eeae8c] rounded-full pointer-events-none z-0 hidden md:block"></div>
              <div class="z-10 relative flex flex-col h-full">
                <h3 class="text-[#594285] text-[22px] md:text-[38px] font-semibold uppercase leading-tight tracking-wide">SIZNING</h3>
                <div class="flex items-end gap-1.5 md:gap-3 border-b-2 border-[#594285] pb-1 w-max">
                  <span class="text-[#594285] text-[22px] md:text-[38px] font-semibold uppercase tracking-wide leading-none">CHEGIRMANGIZ</span>
                  <span class="text-[#e29381] text-[40px] md:text-[75px] font-bold leading-none translate-y-[4px]">10%</span>
                </div>
                <div class="text-gray-800 text-[13.5px] md:text-[14px] mt-6 md:mt-8 mb-6 space-y-2 font-medium relative z-30">
                  <p>Chegirma boshlanadi: <span class="font-bold text-black">25 mart</span></p>
                  <p>Chegirma tugaydi: <span class="font-bold text-black">24 aprel</span></p>
                </div>
                <div class="mt-2 md:mt-4 text-left w-full h-full flex flex-col justify-start relative z-30">
                  <p class="text-[#594285] font-bold text-[18px] md:text-[26px] mb-2 tracking-wide">Audio kurs narxi</p>
                  <p class="text-[#e29381] font-semibold line-through decoration-1 text-[18px] md:text-[22px] mb-1">1.200.000 so'm</p>
                  <p class="text-[#f76a3b] text-[28px] md:text-[36px] font-bold tracking-tight">533.000 so'm</p>
                </div>
              </div>
              
              <div class="absolute -bottom-[20px] -right-[20px] w-[255px] h-[255px] md:hidden z-20 pointer-events-none">
                <img src="/build/assets/Books3.png" class="absolute w-[125px] top-[45px] left-[0px] -rotate-[12deg] drop-shadow-[0_8px_12px_rgba(0,0,0,0.2)] opacity-95 z-0" alt="Book 3" />
                <img src="/build/assets/Books2.png" class="absolute w-[110px] top-[15px] right-[40px] rotate-[8deg] drop-shadow-md opacity-90 z-[5]" alt="Book 2" />
                <img src="/build/assets/Books1.png" class="absolute w-[170px] top-[50px] -right-[5px] rotate-[15deg] z-10 shadow-[-4px_0_15px_rgba(0,0,0,0.25)]" alt="Book 1" />
              </div>

              <div class="absolute right-0 top-0 w-full h-full z-20 pointer-events-none hidden md:block">
                <img src="/build/assets/Books3.png" class="absolute w-[167px] top-[299px] right-[217px] -rotate-[29deg] drop-shadow-xl opacity-95 z-0" alt="Book 3" />
                <img src="/build/assets/Books2.png" class="absolute w-[154px] top-[279px] -right-[61px] rotate-0 drop-shadow-lg opacity-90 z-[5]" alt="Book 2" />
                <img src="/build/assets/Books1.png" class="absolute w-[235px] top-[222px] right-[66px] rotate-[15deg] z-10 shadow-[-4px_0_13px_rgba(0,0,0,0.2)]" alt="Book 1" />
              </div>
            </div>

            <div class="bg-[#eaf1ff] rounded-[20px] p-6 sm:p-8 md:p-12 flex flex-col h-full min-h-[400px]">
              <h3 class="text-[#594285] text-lg sm:text-xl md:text-[28px] font-bold uppercase tracking-wide mb-10 md:mb-14 leading-[1.6]">
                BUYURTMA BERISH UCHUN<br />
                FORMANI TO'LDIRING
              </h3>
              
              <form onsubmit="submitOrder(event)" class="flex flex-col flex-grow">
                <div class="flex flex-col gap-8 md:gap-10">
                  <div class="relative border-b border-[#cdd5ea]">
                    <input type="text" id="orderName" name="name" placeholder="Ism" class="w-full bg-transparent border-none px-0 py-2 focus:ring-0 outline-none text-[#51368a] placeholder-gray-500 text-[15px] md:text-[16px]" required />
                  </div>
                  <div class="relative border-b border-[#cdd5ea]">
                    <input type="tel" id="orderPhone" name="phone" placeholder="Telefon" class="w-full bg-transparent border-none px-0 py-2 focus:ring-0 outline-none text-[#51368a] placeholder-gray-500 text-[15px] md:text-[16px]" required />
                  </div>
                </div>

                <div class="flex items-start gap-3 mt-10 md:mt-12 mb-auto">
                  <input type="checkbox" id="orderAgreed" name="agreed" class="mt-1 w-4 h-4 md:w-5 md:h-5 cursor-pointer accent-[#a532b2] rounded-sm focus:ring-0 border-[#c4cce0] text-[#a532b2] bg-transparent" required />
                  <label for="orderAgreed" class="text-[13px] md:text-[14px] text-gray-700 cursor-pointer leading-[1.4] select-none pl-1 font-medium">
                    Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz
                  </label>
                </div>

                <button type="submit" id="orderSubmitBtn" class="mt-10 md:mt-12 w-full sm:w-[240px] bg-gradient-to-r from-[#943bd6] to-[#da43c4] hover:opacity-90 text-white font-bold py-[14px] md:py-[16px] rounded-full text-[15px] md:text-[16px] shadow-md transition-all focus:outline-none disabled:opacity-70">
                  Buyurtma berish
                </button>
                
                <div id="orderSuccessMsg" class="mt-4 text-[#2ECC71] text-[18px] font-bold text-center w-full sm:w-[240px] hidden">
                  Tasdiqlandi
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      
      <!-- Review Section -->
      <section id="review-section" class="w-full bg-white py-12 md:py-20 lg:py-24 overflow-hidden">
        <div class="max-w-[1240px] mx-auto px-5 lg:px-10">
          
          <div class="flex justify-between items-center mb-8 md:mb-14">
            <h2 class="text-[#51368a] text-[20px] sm:text-2xl md:text-3xl lg:text-[2rem] font-bold uppercase tracking-wide">
              NATIJALAR
            </h2>
            <div class="hidden md:flex gap-4">
              <button onclick="slideReviews('left')" class="w-10 h-10 md:w-11 md:h-11 border-[1.5px] border-[#B955CA] text-[#B955CA] rounded-full flex items-center justify-center hover:bg-purple-50 transition-colors duration-300">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-5 h-5 ml-[-2px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onclick="slideReviews('right')" class="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-tr from-[#9B37C2] to-[#D556DA] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-300 shadow-sm shadow-purple-300">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-5 h-5 mr-[-2px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div id="reviewsContainer" class="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6" style="scrollbar-width: none; -ms-overflow-style: none;">
            <!-- Reviews will be dynamically inserted here -->
            <p id="reviewsLoading" class="text-center w-full text-purple-600">Yuklanmoqda...</p>
          </div>

          <div class="flex md:hidden justify-center items-center gap-4 mt-2">
            <button onclick="slideReviews('left')" class="w-10 h-10 border-[1.5px] border-[#B955CA] text-[#B955CA] rounded-full flex items-center justify-center hover:bg-purple-50 transition-colors duration-300">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-4 h-4 ml-[-1px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onclick="slideReviews('right')" class="w-10 h-10 border-[1.5px] border-[#B955CA] text-[#B955CA] rounded-full flex items-center justify-center hover:bg-purple-50 transition-colors duration-300">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-4 h-4 mr-[-1px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
        </div>
      </section>
    </main>
    
    <!-- Footer -->
    <footer id="footer" class="w-full bg-[#FCFAFF] py-10 md:py-12 mt-8 md:mt-0">
      <div class="max-w-[1240px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:justify-between items-start justify-start gap-8 md:gap-0">
        
        <div class="flex items-center gap-5 sm:gap-6 md:gap-8 text-[13px] sm:text-[14px] md:text-[14.5px] text-[#333] font-medium tracking-wide w-full md:w-auto overflow-x-auto whitespace-nowrap">
          <a href="#" class="hover:text-[#8b5cf6] transition-colors">Главная</a>
          <a href="#" class="hover:text-[#8b5cf6] transition-colors flex items-center gap-1.5">Проекты <span class="text-[9px] text-gray-500">▼</span></a>
          <a href="#" class="hover:text-[#8b5cf6] transition-colors flex items-center gap-1.5">Сервисы <span class="text-[9px] text-gray-500">▼</span></a>
          <a href="#" class="hover:text-[#8b5cf6] transition-colors">Контакты</a>
        </div>

        <div class="flex flex-col items-start gap-3 w-full md:w-auto">
          <span class="text-[#2b2b2b] text-[13px] md:text-[14px] font-medium tracking-wide">Мы в соцсетях:</span>
          <div class="flex items-center gap-4 text-[#2b2b2b]">
            <a href="#" class="hover:text-[#8b5cf6] transition-colors">
              <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" class="hover:text-[#8b5cf6] transition-colors">
              <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" class="hover:text-[#8b5cf6] transition-colors">
              <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </a>
            <a href="#" class="hover:text-[#8b5cf6] transition-colors">
              <svg class="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 00-1.94 2C1 8.18 1 12 1 12s0 3.82.46 5.58a2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 001.94-2C23 15.82 23 12 23 12s0-3.82-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </footer>
    
    <!-- Modals -->
    <div id="modals">
      <div id="orderModalUI" class="fixed inset-0 z-[100] items-center justify-center p-4 hidden" style="display: none;">
        <style>#orderModalUI:not(.hidden) { display: flex; }</style>
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" onclick="closeOrderModal()"></div>
        
        <div class="bg-[#614385] w-full max-w-[1000px] rounded-[30px] shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden min-h-[450px]">
          <button onclick="closeOrderModal()" class="absolute top-5 right-5 z-50 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M1 1l12 12m0-12L1 13" />
            </svg>
          </button>

          <div class="flex-1 p-8 md:p-14 flex flex-col justify-center relative z-20">
            <h2 class="text-white text-[22px] md:text-[32px] font-bold uppercase leading-tight md:leading-[1.3] mb-8 md:mb-10 w-full md:max-w-[85%]">
              BUYURTMA BERISH UCHUN FORMANI TO'LDIRING
            </h2>

            <form onsubmit="submitModalOrder(event)" class="flex flex-col gap-6 md:gap-7 w-full md:max-w-[90%]">
              <input type="text" id="modalName" placeholder="Ism" required class="w-full bg-transparent border-0 border-b border-[#a48abf] px-0 py-2.5 text-white placeholder-[#b8a2d1] focus:ring-0 focus:border-white transition-colors text-[15px]" />
              <input type="tel" id="modalPhone" placeholder="Telefon" required class="w-full bg-transparent border-0 border-b border-[#a48abf] px-0 py-2.5 text-white placeholder-[#b8a2d1] focus:ring-0 focus:border-white transition-colors text-[15px]" />
              
              <div class="flex items-start gap-4 mt-4">
                <input type="checkbox" id="modalAgreed" required class="mt-1 w-[18px] h-[18px] rounded-[4px] border-[#a48abf] bg-white/10 text-[#c24cd2] focus:ring-0 focus:ring-offset-0 cursor-pointer" />
                <label for="modalAgreed" class="text-[#d8caeb] text-[13px] leading-snug cursor-pointer select-none">
                  Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz
                </label>
              </div>

              <div class="mt-4 flex flex-col">
                <button type="submit" id="modalSubmitBtn" class="inline-block w-[200px] bg-gradient-to-r from-[#ba43cd] to-[#d846b8] hover:opacity-90 text-white font-bold py-3.5 rounded-full shadow-[0_4px_15px_rgba(186,67,205,0.4)] transition-all disabled:opacity-70 text-[15px]">
                  Buyurtma berish
                </button>
                <div id="modalSuccessMsg" class="mt-4 text-[#2ECC71] text-[18px] font-bold w-[200px] text-center hidden">
                  Tasdiqlandi
                </div>
              </div>
            </form>
          </div>

          <div class="hidden md:flex flex-1 relative overflow-hidden items-center justify-center">
            <div class="absolute top-[10%] -right-[20%] w-[120%] h-[120%] rounded-full bg-[#f2a68d] shadow-inner opacity-90 pointer-events-none"></div>
            <div class="relative w-full h-full min-h-[400px] flex items-center justify-center z-10">
              <img src="/build/assets/Books3.png" alt="Book 3" class="absolute w-[35%] right-[55%] -rotate-[20deg] drop-shadow-2xl z-0 -translate-y-[10%]" />
              <img src="/build/assets/Books2.png" alt="Book 2" class="absolute w-[32%] left-[55%] rotate-[10deg] drop-shadow-2xl z-10 translate-y-[5%]" />
              <img src="/build/assets/Books1.png" alt="Book 1" class="absolute w-[45%] z-20 rotate-[15deg] drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</body>
</html>
