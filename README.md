# 📚 Book Loyihasi (To'liq Optimallashtirilgan)

Ushbu loyiha bitta repozitoriya (monorepo) ichida joylashgan yuksak darajada optimallashtirilgan **Backend (Laravel PHP 8.3)** va **Frontend (React + Vite + Tailwind CSS)** tizimidan iborat to'liq Fullstack ilova hisoblanadi.

Loyihada barcha eski konfiguratsiyalar o'chirilib, maxsus **Nginx va Docker** arxitekturasi orqali eng yuqori tezlikka ochiq holda ishlaydigan qilib yozilgan.

---

## 🏗 Loyiha Strukturasi: qanday ishlashi haqida

Siz hozir **Book** repozitoriyasining ildiz (root) papkasida turibsiz. Bu yerdan loyiha 2 ta mustaqil va juda kuchli serverga bo'linadi:

```text
Book/
├── Backend/      (Laravel API)
│   ├── Dockerfile       -> Nginx + PHP-FPM orqali ishlovchi to'liq izolyatsiyalangan server
│   ├── start.sh         -> Baza migratsiyalarini (avtomat) keshlab ishga tushiruvchi skript
│   ├── nginx.conf       -> Xafvsizlik va yo'naltirish qoidalari
│   └── railway.json     -> Railway ushbu Docker muhitini yurgizishi uchun ko'rsatma
│
├── Frontend/     (React, Vite, Tailwind CSS)
│   ├── Dockerfile       -> React dasturni eng yengil Nginx Alpine serveriga build qiluvchi muhit
│   ├── nginx.conf       -> SPA (Single Page Application) routing (xatoliklarsiz refresh qilish uchun) 
│   ├── src/api.js       -> Backend'ning haqiqiy API domeniga yuboriladigan so'rovlar manzili
│   └── railway.json     -> Railway Frontend uchun ushbu papkadan foydalanishi uchun ko'rsatma
│
└── RAILWAY_DEPLOYMENT.md -> 👉 SAYTNI SERVERGA TUSHIRISH BO'YICHA QADAM-BAQADAM QO'LLANMA
```

---

## ✅ Tizimning Eng Muhim Yutuqlari

*Siz serverni tushunishingiz yoki ortiqcha sozlamalarni bilishingiz shart emas, chunki hammasi xalos bo‘lingan xolatda avtomatlashtirilgan!*

1. **Atigi 2 ta API integratsiyasi:** Ortiqcha barcha ulanishlar tozalanib, faqatgina Buyurtmalar (`/orders`) hamda Natijalar (`/testimonials`) qoldirildi. Barcha kitoblar yoki boshqa ortiqcha komponentlar serverni band qilmasligi uchun butunlay olib tashlangan.
2. **Docker Monorepo Arxitekturasi:** Backend ham, Frontend ham alohida xavfsiz Docker Nginx yordamida harakatlanadi. Railway.app umuman qiynalmay loyihani 2 qismga ajratib deploy qiladi.
3. **Database muammosizligi:** Loyiha necha marta ishga tushsa ham avtomatik dublikat (Seeding) yozilib qolishiga chek qo'yilgan. Server shunchaki o'z ishini bajaradi.
4. **SPA Xatolar yo'qolgan:** Frontend Nginx bilan o'ralgani borasida foydalanuvchilar har qanday manzilda sahifani yangilasalar ham "404 Not Found" chiqmaydi, sayt uzilmaydi va siqilgan (gzip) tezlikda uzatiladi.

---

## 🚀 Qanday qilib serverga (Railway) yuklash kerak?

Eng asosiy Server ishlari mana shu joydan boshlanadi. Agar siz saytni yurgizmoqchi bo'lsangiz:

Ushbu repozitoriyadagi **`RAILWAY_DEPLOYMENT.md`** faylini ochib o'qing! Unda shunchaki 5 minut ichida tayyor yozilgan tizimni qanday qilib serverga ulab yuborish to'liq o'zbek tilida berilgan. Hech qanday komanda yozishingiz shart emas.

*(Xulosa: Barcha og'ir texnik va xatoga eltuvchi muammolar joyida hal qilingan. Shunchaki Github'dan ulaysiz va tayyor!)*
