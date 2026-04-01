# 🚀 Railway.com ga Loyihani Yuklash: To'liq Qo'llanma

Ushbu qo'llanma orqali siz **Laravel (Backend)** va **React + Tailwind (Frontend)** loyihangizni [Railway.app](https://railway.app/) serveriga yuklaysiz.

**Repo:** `github.com/omonqulovjasurbek04-hue/Book`  
**Branch:** `Jasurbek`

---

## ✅ Tayyor Bo'lgan Narsalar

| Qadam | Status |
|-------|--------|
| `.gitignore` fayllar to'g'rilandi | ✅ |
| `vendor/`, `node_modules/`, `.env` gitdan tozalandi | ✅ |
| `Frontend build` xatosiz ishlaydi | ✅ |
| GitHub ga push qilindi | ✅ |
| `railway.json` Backend da mavjud | ✅ |
| `railway.json` Frontend da mavjud | ✅ |
| CORS sozlamasi tayyor (`config/cors.php`) | ✅ |
| API client tayyor (`src/api.js`) | ✅ |

---

## 🔧 1. Railway.com ga Kirish

1. [railway.com](https://railway.com) saytiga boring
2. **Login with GitHub** ni bosing
3. GitHub akkauntingiz bilan kiring

---

## ⚙️ 2. Backend (Laravel) Service Yaratish

1. **New Project** → **Deploy from GitHub Repo**
2. `omonqulovjasurbek04-hue/Book` repo ni tanlang
3. **Settings** bo'limida:
   - **Root Directory:** `Backend`
   - Builder va Start command `railway.json` dan avtomatik olinadi:
     ```json
     {
       "build": { "builder": "NIXPACKS" },
       "deploy": {
         "startCommand": "php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=$PORT"
       }
     }
     ```

4. **Variables** bo'limiga quyidagilarni qo'shing:

```env
APP_ENV=production
APP_KEY=base64:mZ3vulXCYnQSZfMDh4NhhIv90IvDDWxqBHScOpMyI5A=
APP_DEBUG=false
APP_URL=https://SIZNING-BACKEND.up.railway.app

DB_CONNECTION=mysql
DB_HOST=[Railway MySQL Host]
DB_PORT=[Railway MySQL Port]
DB_DATABASE=[Database Nomi]
DB_USERNAME=[Username]
DB_PASSWORD=[Parol]

CORS_ALLOWED_ORIGINS=https://SIZNING-FRONTEND.up.railway.app
```

> [!TIP]
> **Database qo'shish:** Loyihada **+ New** → **Database** → **MySQL** bosing.  
> Host, Port, Username, Password avtomatik beriladi — ularni Variables ga nusxalang.

---

## 🗄️ 3. MySQL Database Qo'shish

1. Loyiha ichida **+ New** → **Database** → **MySQL**
2. Database yaratilgach, uning **Variables** bo'limidan:
   - `MYSQLHOST` → Backend `DB_HOST` ga
   - `MYSQLPORT` → Backend `DB_PORT` ga
   - `MYSQLDATABASE` → Backend `DB_DATABASE` ga
   - `MYSQLUSER` → Backend `DB_USERNAME` ga
   - `MYSQLPASSWORD` → Backend `DB_PASSWORD` ga

---

## ⚛️ 4. Frontend (React) Service Yaratish

1. Loyihada **+ New** → **GitHub Repo** → Yana `Book` tanlang
2. **Settings** bo'limida:
   - **Root Directory:** `Frontend`
   - Build va Deploy `railway.json` dan avtomatik olinadi:
     ```json
     {
       "build": {
         "builder": "NIXPACKS",
         "buildCommand": "npm install && npm run build"
       },
       "deploy": { "staticDir": "dist" }
     }
     ```

3. **Variables** bo'limiga qo'shing:

```env
VITE_API_URL=https://SIZNING-BACKEND.up.railway.app/api
```

> [!WARNING]
> `VITE_API_URL` oxirida `/api` bo'lishi **SHART**! Aks holda Frontend Backend ga ulana olmaydi.

---

## 🌐 5. Domain Sozlash

Har bir service uchun:
1. Service ni bosing → **Settings** → **Networking**
2. **Generate Domain** bosing
3. Berilgan URL ni yozib oling:
   - Backend: `https://book-backend-xxxx.up.railway.app`
   - Frontend: `https://book-frontend-xxxx.up.railway.app`
4. **MUHIM:** Backend `CORS_ALLOWED_ORIGINS` va Frontend `VITE_API_URL` ga shu URL larni qo'ying!

---

## ✅ 6. Tekshirish

| Test | Kutilgan natija |
|------|----------------|
| `https://backend-url/api/books` | JSON kitoblar ro'yxati |
| `https://frontend-url` | Sayt ochiladi |
| Buyurtma formasi | Backend ga yetkazadi |
| CORS xatosi yo'q | Console da xato yo'q |

### Xato bo'lsa:
- **View Logs** orqali xatoni ko'ring
- **Variables** to'g'ri ekanligini tekshiring
- `CORS_ALLOWED_ORIGINS` ni tekshiring (frontend URL to'g'ri yozilganmi)

---

## 📁 Loyiha Strukturasi

```
Book/
├── .gitignore
├── Backend/
│   ├── .gitignore
│   ├── .env.example
│   ├── railway.json        ← Deploy config
│   ├── composer.json
│   ├── config/cors.php     ← CORS
│   ├── routes/api.php      ← API endpoints
│   └── ...
└── Frontend/
    ├── .gitignore
    ├── .env.production
    ├── railway.json         ← Deploy config
    ├── package.json
    ├── src/api.js           ← Backend API client
    └── ...
```

---

Omad! 🎉 Muammo bo'lsa, Railway **View Logs** dan xatoni ko'ring.
