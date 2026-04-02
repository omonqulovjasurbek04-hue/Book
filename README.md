# 📚 Book Loyihasi

Ushbu loyiha bitta repozitoriya (monorepo) ichida alohida **Backend (Laravel PHP)** va **Frontend (React + Tailwind CSS)** bo'lgan to'liq Fullstack ilovadir.

---

## 🛠 Hozirgi Kamchiliklar va Qilinishi Kerak Bo'lgan Ishlar (TODO)

Loyihani to'liq optimal va muammosiz ishlashi hamda Railway.app ga joylashtirishda e'tibor qaratilishi kerak bo'lgan asosiy kamchiliklar:

### 1. Backend: Avtomatik Seeding xavfi (Database dublikat muammosi)
- **Muammo:** Hozirgi `Backend/railway.json` faylida `startCommand` qismida `php artisan db:seed --force` buyrug'i bor. Bu degani, loyiha har safar Railway'da qayta yonganda (deploy yoki restart bo'lganda), bazaga eski seeding ma'lumotlari qayta-qayta yozilaveradi va ma'lumotlaringiz takrorlanib ketadi.
- **Yechim:** `Backend/railway.json` ni oching va faqat migratsiya qoladigan ko'rinishga keltiring:
  ```json
  "deploy": {
    "startCommand": "php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=$PORT"
  }
  ```
  *(Seeding kerak bo'lsa, uni birinchi marta Railway CLI yoki terminalidan qo'lda ishga tushirish xavfsizroq)*.

### 2. Frontend: React Router va 404 (Refresh) Xatosi
- **Muammo:** Hozir `Frontend/railway.json` faylida `staticDir: \"dist\"` ko'rsatilgan. Bu React build fayllarini beradi, lekin agar ilovada bir nechta sahifalar bo'lsa (masalan `/books`, `/about`), sahifaga to'g'ridan-to'g'ri kirilganda yoki yangilanganda (F5) brauzer 404 Not Found xatoligini ko'rsatadi. Chunki server qanday yo'naltirishni (fallback) bilmaydi.
- **Yechim:** Railway Nixpacks konfiguratsiyasiga barcha yo'llar `index.html` dan o'tishini tushuntirishingiz yoki React uchun maxsus static server ulashingiz kerak bo'lishi mumkin. Oddiy yechimlardan biri vite'da `_redirects` fayl orqali barcha yo'llarni `index.html` ga o'tkazish.

### 3. Railway.app Env (O'zgaruvchilar) dagi qilinmagan ishlar
Siz faqat kodni yuklaganingiz bilan ish bitmaydi. Quyidagi muhit o'zgaruvchilari (Variables) Railway.com da hali yozilmagan. Ularni qo'lda qo'shish kerak:
- **Backend uchun Variable-lar:**
  - `APP_KEY` ni (`php artisan key:generate` orqali yoki local .env dan) nusxalab Railway ga qo'ying.
  - Ma'lumotlar bazasi (MySQL) Railway'da yangi ochilgach, ularning `DB_HOST`, `DB_PASSWORD` larini xuddi `RAILWAY_DEPLOYMENT.md` da aytilganidek qilib Variables ga yozing.
  - **CORS ulanishi:** eng muhimi, Frontend loyihasiga berilgan domen nomini backenddagi `CORS_ALLOWED_ORIGINS` ga biriktiring.
- **Frontend uchun Variable:**
  - Railway'dagi Frontend Settings qismidan, backend'ingiz URL manzilini `VITE_API_URL` nomi bilan qo'shishingiz shart. E'tibor bering, oxirida `/api` ulanishi kerak:
    `VITE_API_URL=https://sizning-backend-domeningiz.up.railway.app/api`

### 4. Havfsizlik / API token kamchiliklari
- `Frontend/src/api.js` ichida hozir token localStorage dan olinib jo'natiladi, lekin bu faqat tayyorgarlik holatida turibdi. Tizimda to'liq avtorizatsiya va login/register bo'limlari hali to'liq moslashtirilmagan. Kelajakda avtorizatsiyani tugallash lozim.

---

## 🗄 Loyiha Strukturasi:
```
Book/
├── Backend/      (Laravel 11+ API)
│   ├── app/
│   ├── routes/api.php
│   └── railway.json     -> Faqat Backend server uchun
├── Frontend/     (React, Vite, Tailwind CSS)
│   ├── src/api.js       -> Backend-ga CORS va Axios orqali murojaat
│   └── railway.json     -> Faqat Frontend UI server uchun
├── RAILWAY_DEPLOYMENT.md -> To'liq joylash instruksiyalari
└── README.md
```

Qo'shimcha batafsil ma'lumotlar ulanishi va Railway xatolari bilan ishlash bo'yicha: `RAILWAY_DEPLOYMENT.md` fayliga murojaat qiling.

---

## 🔑 Admin Panelga O'tish Bo'yicha Qo'llanma

Loyihaning Backend qismida buyurtmalarni va foydalanuvchilarni boshqarish uchun tayyor Admin Panel mavjud bo'lishi mumkin. 

Admin panelga kirish uchun quyidagi ko'rsatmalarga amal qiling:
1. **Domen orqali kirish:** O'zingizning Backend saytingiz manzilining oxiriga `/admin` yoki API yo'lini qo'shing.  
   - Localhost (kompyuter) da: `http://localhost:8000/admin`  
   - Railway.app (jonli) da: `https://[SIZNING-BACKEND-DOMAININGIZ].up.railway.app/admin`
2. **Login/Parol:** Dastlabki `User` yoki `Admin` seeding orqali yaratilgan bo'lsa (yoki o'zingiz ro'yxatdan o'tsangiz), o'sha elektron pochta va parol bilan tizimga kiring.
3. **Imkoniyatlar:** Tizimga kirgach, kelib tushgan "Buyurtmalar", foydalanuvchilar ro'yxati va asosiy sozlamalarni bevosita Admin oynadan ko'rishingiz mumkin bo'ladi.

> **Eslatma:** Agar admin panelni qaysi yo'ldaligini o'zgartirgan bo'lsangiz (masalan Laravel Nova, Filament yoki oddiy Blade), URL shunga mos ravishda `/nova`, `/admin` yo'llarida bo'lishi mumkin. Hozirda asosiy entry nuqta Backend domeniga bog'liq.
