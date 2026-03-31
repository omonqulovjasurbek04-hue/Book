import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
  uz: {
    home: "Bosh sahifa",
    collections: "To'plamlar",
    reviews: "Natijalar",
    contact: "Aloqa",
    language: "Til",
    discount: "Chegirma",
    buyNow: "Buyurtma berish",
    makeOrder: "Biz bilan bog'lanish",
    enterName: "Ismingiz",
    enterPhone: "+998901234567",
    agree: "Men shaxsiy ma'lumotlarimni qayta ishlanishiga roziman",
    submit: "Buyurtma berish",
    success: "✅ Buyurtmangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.",
    error: "❌",
    waiting: "Kutilmoqda...",
    titleMain: "Angelfaces to'plamini",
    descMain: "Ingliz, Rus, Xitoy, Fransuz, Koreys, Ispan, O'zbek va Arab tillarini biz bilan tez va oson o'rganing!",
    priceFull: "1,200,000 so'm",
    priceDiscount: "533,000 so'm",
    guarantee: "Buyurtmangiz 48 soatda yetib bormasa tekinga olasiz.",
    discountPercent: "10%",
    discountText: "chegirma",
    pen: "Ovoz chiqaruvchi ruchka",
    fillForm: "Buyurtma berish uchun formani to'ldiring:",
  },
  ru: {
    home: "Главная",
    collections: "Коллекции",
    reviews: "Отзывы",
    contact: "Контакты",
    language: "Язык",
    discount: "Скидка",
    buyNow: "Заказать",
    makeOrder: "Связаться с нами",
    enterName: "Ваше имя",
    enterPhone: "+998901234567",
    agree: "Я согласен с обработкой моих персональных данных",
    submit: "Заказать",
    success: "✅ Заказ принят! Мы свяжемся с вами в ближайшее время.",
    error: "❌",
    waiting: "Загрузка...",
    titleMain: "Коллекция Angelfaces",
    descMain: "Выучите английский, русский, китайский, французский, корейский, испанский, узбекский и арабский языки быстро и легко!",
    priceFull: "1,200,000 сўм",
    priceDiscount: "533,000 сўм",
    guarantee: "Если доставка займет более 48 часов, получите товар бесплатно.",
    discountPercent: "10%",
    discountText: "скидка",
    pen: "Говорящая ручка",
    fillForm: "Заполните форму для заказа:",
  },
  en: {
    home: "Home",
    collections: "Collections",
    reviews: "Reviews",
    contact: "Contact",
    language: "Language",
    discount: "Discount",
    buyNow: "Order Now",
    makeOrder: "Get In Touch",
    enterName: "Your Name",
    enterPhone: "+998901234567",
    agree: "I agree to the processing of my personal data",
    submit: "Order Now",
    success: "✅ Order received! We will contact you soon.",
    error: "❌",
    waiting: "Loading...",
    titleMain: "Angelfaces Collection",
    descMain: "Learn English, Russian, Chinese, French, Korean, Spanish, Uzbek and Arabic languages quickly and easily with us!",
    priceFull: "1,200,000 UZS",
    priceDiscount: "533,000 UZS",
    guarantee: "If delivery takes more than 48 hours, get the product for free.",
    discountPercent: "10%",
    discountText: "discount",
    pen: "Voice-activated pen",
    fillForm: "Fill in the form to place an order:",
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('uz')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
