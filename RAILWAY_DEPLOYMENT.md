# 🚀 Railway.com ga Loyihani Yuklash (Optimal Docker Server)

Ushbu qo'llanma orqali siz **Laravel (Backend)** va **React + Tailwind (Frontend)** loyihangizni [Railway.app](https://railway.app/) serveriga **to'liq optimallashtirilgan yorug'lik tezligidagi Docker Nginx serverlari** orqali yuklaysiz. (Faqatgina ishlab chiqish uchun mo'ljallangan `artisan serve` dan voz kechildi).

**Repo:** `github.com/omonqulovjasurbek04-hue/Book`

---

## 🏗 Yangi Arxitektura (Backend & Frontend)

Loyiha hozir mutlaqo mustaqil 2 ta serverga ajratildi:
- **Backend**: `php:8.3-fpm` va `nginx` orqali ishlaydi. Ma'lumotlar bazasi migratsiyalari avtomatlashgan holda tez ishlashi ta'minlandi.
- **Frontend**: Vite orqali React kompilyatsiya bo'ladi (`dist` papkaga) va eng yengil `nginx:alpine` orqali xizmat ko'rsatib, SPA (Single Page Application) routing (sahifani yangilaganda uzilmaslik) masalalari xatosiz hal etildi, siqish (gzip) yoqildi.

---

## 🔧 1. Railway.com da Loyiha Yaratish

1. [railway.com](https://railway.com) saytiga boring va GitHub orqali kiring.
2. Tepadagi katta **+ New Project** -> **Deploy from GitHub repo** orqali loyihani tanlang.

---

## 🐘 2. Ma'lumotlar Bazasini (MySQL) Yaratish

Backend uchun doimiy ma'lumotlar bazasi (Database) kerak.

1. Loyiha oynasida **+ New** -> **Database** -> **MySQL** bosing.
2. MySQL tayyor bo'ladi. Uning ustiga bosing, `Variables` (O'zgaruvchilar) bo'limiga kirib u yerdagi `MYSQLHOST`, `MYSQLUSER` kabi o'zgaruvchilarga e'tibor qarating - endi ushbu kodlarni Backend loyihangizga ulashingiz kerak bo'ladi.

---

## ⚙️ 3. Backend (Laravel) Service Yaratish

1. Loyiha oynasida **+ New** -> **GitHub Repo** -> yana shu reponi (Book) tanlang.
2. Kubik (Service) ustiga bosing, o'ng tarafdan **Settings** bo'limiga o'ting.
3. **Root Directory:** ga `Backend` deb yozing.
4. U yerda **Build** avtomatik **Dockerfile** orqali aniqlanadi, qo'shimcha start skriptlarini yozish shart emas! Skript avtomat migratsiya bajaradi!
5. **Variables** bo'limiga o'ting va **Raw Editor** orqali bazangiz parametrlarini qo'shing:

```env
APP_ENV=production
APP_KEY=base64:mZ3vulXCYnQSZfMDh4NhhIv90IvDDWxqBHScOpMyI5A=
APP_DEBUG=false
APP_URL=https://SIZNING-BACKEND.up.railway.app

DB_CONNECTION=mysql
DB_HOST=MySQL_dagi_MYSQLHOST_yozuvi
DB_PORT=MySQL_dagi_MYSQLPORT_yozuvi
DB_DATABASE=MySQL_dagi_MYSQLDATABASE_yozuvi
DB_USERNAME=MySQL_dagi_MYSQLUSER_yozuvi
DB_PASSWORD=MySQL_dagi_MYSQLPASSWORD_maxfiy_kodi

CORS_ALLOWED_ORIGINS=https://SIZNING-FRONTEND.up.railway.app
```
*(Yuqoridagi URL'larni hozir o'zimiz olamiz va to'g'irlaymiz)*

---

## ⚛️ 4. Frontend (React) Service Yaratish

1. Yana **+ New** boshqadan bosib -> **GitHub Repo** -> Reopni tanlang. 
2. Yaratilgan yangi service'ning **Settings** qismida:
   - **Root Directory:** ga `Frontend` deb yozing.
   - Barcha jarayon Nginx Alpine asosidagi yangi `Dockerfile` ga tayanadi. (SPA fallback, server caching hammasi bor)
3. **Variables** bo'limiga kirib qo'shing:

```env
VITE_API_URL=https://SIZNING-BACKEND.up.railway.app/api
```
*(Tepadagi backend manzilingizni aynan /api bilan tugaydigan xolida).*

---

## 🌐 5. Domain'larni Sozlash & Biriktirish

Oxirgi qadam: Ularga Internet manzili berib bir-biriga ulash.

1. Ikkala blok uchun (Backend va Frontend) ustiga bosib -> **Settings** -> **Networking** qismidan **Generate Domain** qiling.
2. Backend uchun olingan URL'ni Frontend'ning **Variables** qismidagi `VITE_API_URL` ga `/api` tugatib yozing.
3. Frontend uchun olingan URL'ni Backend'ning **Variables** qismidagi `CORS_ALLOWED_ORIGINS` ga ulang.
4. Serverlar avtomat qariyb 3-4 daqiqada qaytadan yurgiziladi (deploy bo'ladi) va mutlaqo **prod** xolatiga optimal Nginx bo'lib hizmat qila boshlaydi!

> Xato yoki muammo bo'lsa har bir blokni **View Logs** (jurnal) joyidan kuzatishingiz mumkin. Yordam kerak bo'lsa aytasiz!

🚀 Omad!
