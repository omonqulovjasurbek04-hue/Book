// main.js

// --- Globals ---
window.selectedLang = 'gb';

// --- Navbar Logic ---
window.toggleLangMenu = function() {
  const menu = document.getElementById('langMenu');
  const arrow = document.getElementById('langArrow');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    arrow.classList.add('rotate-180');
  } else {
    menu.classList.add('hidden');
    arrow.classList.remove('rotate-180');
  }
}

window.toggleMobileLangMenu = function(e) {
  e.stopPropagation();
  const menu = document.getElementById('mobileLangMenu');
  const arrow = document.getElementById('mobileLangArrow');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    arrow.classList.add('rotate-180');
  } else {
    menu.classList.add('hidden');
    arrow.classList.remove('rotate-180');
  }
}

window.setLang = function(code, label) {
  window.selectedLang = code;
  
  // Desktop
  document.getElementById('currentLangImg').src = `https://flagcdn.com/w80/${code}.png`;
  document.getElementById('currentLangLabel').innerText = label;
  document.getElementById('langMenu').classList.add('hidden');
  document.getElementById('langArrow').classList.remove('rotate-180');
  
  // Mobile
  document.getElementById('mobileCurrentLangImg').src = `https://flagcdn.com/w80/${code}.png`;
  document.getElementById('mobileCurrentLangLabel').innerText = label;
  document.getElementById('mobileLangMenu').classList.add('hidden');
  document.getElementById('mobileLangArrow').classList.remove('rotate-180');
  
  updateLanguageDisplay();
}

// Click outside to close dropdowns
document.addEventListener("mousedown", function(event) {
  const langContainer = document.getElementById('langDropdownContainer');
  const mobileLangContainer = document.getElementById('mobileLangDropdownContainer');
  
  if (langContainer && !langContainer.contains(event.target)) {
    document.getElementById('langMenu').classList.add('hidden');
    document.getElementById('langArrow').classList.remove('rotate-180');
  }
  
  if (mobileLangContainer && !mobileLangContainer.contains(event.target)) {
    document.getElementById('mobileLangMenu').classList.add('hidden');
    document.getElementById('mobileLangArrow').classList.remove('rotate-180');
  }
});

let menuOpen = false;
window.toggleMobileMenu = function() {
  menuOpen = !menuOpen;
  renderMobileMenu();
}

window.closeMobileMenu = function() {
  menuOpen = false;
  renderMobileMenu();
}

function renderMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileMenuOverlay');
  const line1 = document.getElementById('menuLine1');
  const line2 = document.getElementById('menuLine2');
  const line3 = document.getElementById('menuLine3');
  
  if (menuOpen) {
    menu.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    
    line1.classList.add('rotate-45', 'translate-y-[7px]');
    line2.classList.add('opacity-0');
    line3.classList.add('-rotate-45', '-translate-y-[7px]');
  } else {
    menu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    
    line1.classList.remove('rotate-45', 'translate-y-[7px]');
    line2.classList.remove('opacity-0');
    line3.classList.remove('-rotate-45', '-translate-y-[7px]');
  }
}

window.scrollToContact = function() {
  // Prevent default in a href if needed, but we use buttons mostly
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    window.scrollTo({
      top: contactSection.offsetTop,
      behavior: 'smooth'
    });
  }
  window.closeMobileMenu();
}

// --- Translations ---
const translations = {
  uz: {
    home: "Bosh sahifa",
    collections: "To'plamlar",
    reviews: "Natijalar",
    contact: "Aloqa",
    makeOrder: "Biz bilan bog'lanish",
    buyNow: "Buyurtma qilish",
    fillForm: "BURTMA BERISH UCHUN FORMANI TO'LDIRING"
  },
  ru: {
    home: "Главная",
    collections: "Коллекции",
    reviews: "Отзывы",
    contact: "Контакты",
    makeOrder: "Связаться с нами",
    buyNow: "Заказать",
    fillForm: "ЗАПОЛНИТЕ ФОРМУ ДЛЯ ЗАКАЗА"
  },
  gb: {
    home: "Home",
    collections: "Collections",
    reviews: "Reviews",
    contact: "Contact",
    makeOrder: "Get In Touch",
    buyNow: "Order Now",
    fillForm: "FILL IN THE FORM TO PLACE AN ORDER"
  }
};

function updateLanguageDisplay() {
  const lang = window.selectedLang === 'gb' ? 'gb' : (window.selectedLang === 'ru' ? 'ru' : 'uz');
  const t = translations[lang];
  console.log(`Language changed to ${lang}`, t);
  // Example of how we could update DOM elements with data-translate attributes:
  // document.querySelectorAll('[data-translate]').forEach(el => {
  //   const key = el.getAttribute('data-translate');
  //   if (t[key]) el.innerText = t[key];
  // });
}

// --- Hero Slider Logic ---
const bookSets = [
  { main: '/assets/Books1.svg', left: '/assets/Books3.svg', right: '/assets/Books2.svg' },
  { main: '/assets/Books2.svg', left: '/assets/Books1.svg', right: '/assets/Books3.svg' },
  { main: '/assets/Books3.svg', left: '/assets/Books2.svg', right: '/assets/Books1.svg' },
];

let currentSlide = 0;
let isAnimating = false;

window.goToSlide = function(direction) {
  if (isAnimating) return;
  isAnimating = true;

  if (direction === 'next') {
    currentSlide = (currentSlide + 1) % bookSets.length;
  } else {
    currentSlide = currentSlide === 0 ? bookSets.length - 1 : currentSlide - 1;
  }

  const current = bookSets[currentSlide];
  
  // Desktop
  document.getElementById('desktopMainBook').src = current.main;
  document.getElementById('desktopLeftBook').src = current.left;
  document.getElementById('desktopRightBook').src = current.right;
  
  // Mobile
  document.getElementById('mobileMainBook').src = current.main;
  document.getElementById('mobileLeftBook').src = current.left;
  document.getElementById('mobileRightBook').src = current.right;
  
  // Opacity effect
  const desktopSlider = document.getElementById('heroSlider');
  const mobileSlider = document.getElementById('mobileSlider');
  desktopSlider.classList.add('opacity-50');
  mobileSlider.classList.add('opacity-50');

  setTimeout(() => {
    isAnimating = false;
    desktopSlider.classList.remove('opacity-50');
    mobileSlider.classList.remove('opacity-50');
  }, 500);
}

// Auto slide
setInterval(() => {
  window.goToSlide('next');
}, 5000);

// --- Books Section Logic ---
window.selectFlag = function(code, country) {
  // Desktop
  document.getElementById('booksDesktopSubtitle').innerText = `${country} tilini o'rganing`;
  // Mobile
  document.getElementById('booksMobileSubtitle').innerText = `${country} tilini o'rganing`;
  
  // Highlight flag items
  document.querySelectorAll('.flag-item').forEach(el => {
    if (el.classList.contains(`flag-${code}`)) {
      el.classList.add('ring-4', 'ring-purple-500', 'scale-110', 'shadow-lg');
      el.classList.remove('border', 'border-gray-100', 'shadow-sm', 'hover:scale-105', 'hover:ring-2', 'hover:ring-purple-300');
    } else {
      el.classList.remove('ring-4', 'ring-purple-500', 'scale-110', 'shadow-lg');
      el.classList.add('border', 'border-gray-100', 'shadow-sm', 'hover:scale-105', 'hover:ring-2', 'hover:ring-purple-300');
    }
  });

  document.querySelectorAll('.mobile-flag-item').forEach(el => {
    if (el.classList.contains(`flag-${code}`)) {
      el.classList.add('ring-2', 'ring-[#c24cd2]', 'ring-offset-2', 'scale-[1.15]', 'shadow-md', 'border-transparent');
      el.classList.remove('shadow-sm', 'border-gray-200');
    } else {
      el.classList.remove('ring-2', 'ring-[#c24cd2]', 'ring-offset-2', 'scale-[1.15]', 'shadow-md', 'border-transparent');
      el.classList.add('shadow-sm', 'border-gray-200');
    }
  });

  // Update book cards flags
  document.querySelectorAll('.booksFlagImg').forEach(img => {
    img.src = `https://flagcdn.com/w80/${code}.png`;
  });
  
  const shortLangMap = { gb: 'Eng', uz: 'Uzb', ru: 'Rus', sa: 'Ara', fr: 'Fran', kr: 'Kor', es: 'Isp', cn: 'Xit' };
  document.querySelectorAll('.booksFlagText').forEach(el => {
    el.innerText = country;
  });
  document.querySelectorAll('.booksFlagCode').forEach(el => {
    el.innerText = shortLangMap[code];
  });
}

let activeMobileBook = null;
window.toggleMobileBook = function(idx) {
  activeMobileBook = activeMobileBook === idx ? null : idx;
  for (let i = 0; i < 3; i++) {
    const el = document.getElementById(`mobileBook${i}`);
    const imgCont = el.querySelector('.book-img-container');
    const textCont = el.querySelector('.book-text-container');
    const overlay = el.querySelector('.book-overlay');
    if (i === activeMobileBook) {
      imgCont.classList.remove('translate-y-0');
      imgCont.classList.add('-translate-y-4');
      textCont.classList.remove('translate-y-0');
      textCont.classList.add('-translate-y-4');
      overlay.classList.remove('translate-y-full');
      overlay.classList.add('translate-y-0');
    } else {
      imgCont.classList.remove('-translate-y-4');
      imgCont.classList.add('translate-y-0');
      textCont.classList.remove('-translate-y-4');
      textCont.classList.add('translate-y-0');
      overlay.classList.remove('translate-y-0');
      overlay.classList.add('translate-y-full');
    }
  }
}

let bookScrollPos = 0;
const totalBooks = 3;
window.scrollBooks = function(dir) {
  if (dir === 'next') {
    bookScrollPos = Math.min(bookScrollPos + 1, totalBooks - 2);
  } else {
    bookScrollPos = Math.max(bookScrollPos - 1, 0);
  }
  
  activeMobileBook = null;
  toggleMobileBook(null); // Reset active states
  
  const cont = document.getElementById('mobileBooksContainer');
  cont.style.transform = `translateX(calc(-${bookScrollPos * 50}% - ${bookScrollPos * 8}px))`;
  
  const prevBtn = document.getElementById('bookScrollPrevBtn');
  const nextBtn = document.getElementById('bookScrollNextBtn');
  
  if (bookScrollPos === 0) {
    prevBtn.disabled = true;
    prevBtn.classList.remove('border-gray-400', 'text-gray-600', 'active:bg-gray-100');
    prevBtn.classList.add('border-gray-200', 'text-gray-300');
  } else {
    prevBtn.disabled = false;
    prevBtn.classList.remove('border-gray-200', 'text-gray-300');
    prevBtn.classList.add('border-gray-400', 'text-gray-600', 'active:bg-gray-100');
  }
  
  if (bookScrollPos >= totalBooks - 2) {
    nextBtn.disabled = true;
    nextBtn.classList.remove('border-gray-400', 'text-gray-600', 'active:bg-gray-100');
    nextBtn.classList.add('border-gray-200', 'text-gray-300');
  } else {
    nextBtn.disabled = false;
    nextBtn.classList.remove('border-gray-200', 'text-gray-300');
    nextBtn.classList.add('border-gray-400', 'text-gray-600', 'active:bg-gray-100');
  }
}

// --- Order Form Logic ---
window.submitOrder = async function(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('orderSubmitBtn');
  const successMsg = document.getElementById('orderSuccessMsg');
  const nameVal = document.getElementById('orderName').value;
  const phoneVal = document.getElementById('orderPhone').value;
  const agreedVal = document.getElementById('orderAgreed').checked;

  submitBtn.disabled = true;
  submitBtn.innerText = "Yuborilmoqda...";

  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameVal,
        phone: phoneVal,
        comment: agreedVal ? "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz - Checkbox tanlangan" : ""
      })
    });
    
    if (response.ok) {
      successMsg.classList.remove('hidden');
      document.getElementById('orderName').value = '';
      document.getElementById('orderPhone').value = '';
      document.getElementById('orderAgreed').checked = false;
      setTimeout(() => {
        successMsg.classList.add('hidden');
      }, 5000);
    } else {
      console.error("Buyurtma yuborishda xatolik yuz berdi");
    }
  } catch (error) {
    console.error("Buyurtma yuborishda xatolik:", error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerText = "Buyurtma berish";
  }
}

// --- Reviews Logic ---
window.slideReviews = function(direction) {
  const container = document.getElementById('reviewsContainer');
  if (!container) return;
  const scrollAmount = window.innerWidth < 768 ? container.offsetWidth : 350;
  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

async function fetchReviews() {
  const container = document.getElementById('reviewsContainer');
  if (!container) return;

  try {
    const response = await fetch('/api/testimonials');
    const reviews = await response.json();
    
    container.innerHTML = ''; // Clear loading text
    
    if (reviews.length === 0) {
      container.innerHTML = `<p class="text-center w-full text-gray-400">Hozircha sharhlar yo'q</p>`;
      return;
    }
    
    reviews.forEach(rev => {
      const imgUrl = rev.image ? rev.image : '/assets/img.svg';
      const card = document.createElement('div');
      card.className = "snap-start flex-shrink-0 w-[100%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#FCFAFF] p-6 pb-12 md:p-8 md:pb-14 rounded-[24px] relative overflow-hidden group hover:shadow-[0_10px_30px_rgba(185,85,202,0.05)] transition-all duration-300";
      
      card.innerHTML = `
        <div class="absolute top-[40%] left-6 text-[120px] font-serif text-[#cc40ce] opacity-[0.03] leading-none pointer-events-none -translate-y-1/2">“</div>
        <div class="flex items-center gap-4 mb-6 relative z-10">
          <div class="w-[50px] h-[50px] md:w-[54px] md:h-[54px] rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
            <img src="${imgUrl}" class="w-full h-full object-cover" alt="${rev.name}" />
          </div>
          <div>
            <h4 class="font-semibold text-[#2b2b2b] text-[13px] md:text-[14px]">${rev.name}</h4>
            <p class="text-[#8964C0] text-[12px] md:text-[13px] font-medium mt-0.5">${rev.course_name}</p>
          </div>
        </div>
        <p class="text-[#333] text-[13px] md:text-[14px] leading-[1.6] font-medium relative z-10 w-[95%]">
          ${rev.message_uz}
        </p>
      `;
      container.appendChild(card);
    });
    
  } catch (error) {
    console.error("Fikrlar massivini olishda xatolik:", error);
    container.innerHTML = `<p class="text-center w-full text-red-500">Sharhlarni yuklashda xatolik yuz berdi</p>`;
  }
}

// Fetch reviews on load
document.addEventListener('DOMContentLoaded', () => {
  fetchReviews();
});
// --- Modal Logic ---
window.openOrderModal = function() {
  const modal = document.getElementById('orderModalUI');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

window.closeOrderModal = function() {
  const modal = document.getElementById('orderModalUI');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'unset';
    // optionally reset form
    document.getElementById('modalName').value = '';
    document.getElementById('modalPhone').value = '';
    document.getElementById('modalAgreed').checked = false;
    document.getElementById('modalSuccessMsg').classList.add('hidden');
  }
}

window.submitModalOrder = async function(e) {
  e.preventDefault();
  const submitBtn = document.getElementById('modalSubmitBtn');
  const successMsg = document.getElementById('modalSuccessMsg');
  const nameVal = document.getElementById('modalName').value;
  const phoneVal = document.getElementById('modalPhone').value;
  const agreedVal = document.getElementById('modalAgreed').checked;

  submitBtn.disabled = true;
  submitBtn.innerText = "Kuting...";

  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameVal,
        phone: phoneVal,
        comment: agreedVal ? "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz - Checkbox tanlangan" : ""
      })
    });
    
    if (response.ok) {
      successMsg.classList.remove('hidden');
      setTimeout(() => {
        closeOrderModal();
      }, 2000);
    } else {
      console.error("Buyurtma yuborishda xatolik yuz berdi");
    }
  } catch (error) {
    console.error("Buyurtma yuborishda xatolik:", error);
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerText = "Buyurtma berish";
  }
}
