# 🚀 Railway.com saytiga loyihani yuklash: To'liq Qo'llanma

Ushbu qo'llanma orqali siz **Laravel (Backend)** va **React + Tailwind (Frontend)** loyihangizni [Railway.app](https://railway.app/) serveriga muammosiz, professionallar kabi yuklay olasiz.

---

## 🔧 1. Local da tekshirish (Ishonch hosil qilish)

Railway-ga chiqishdan oldin hamma narsa ishlashini tekshirib oling:

### Laravel Backend:
```bash
cd Backend
composer install
php artisan key:generate
php artisan serve
```
*Brauzerda `http://127.0.0.1:8000` ni tekshiring.*

### React Frontend:
```bash
cd Frontend
npm install
npm run dev
```
*Brauzerda `http://localhost:5173` ni tekshiring.*

---

## 📁 2. GitHub Repo Tayyorlash

Loyihangiz (Backend va Frontend) bitta Git repozitoriyasida bo'lishi mumkin (Monorepo). 

1. Asosiy papkada (`Book` folder) terminal oching:
   ```bash
   git init
   git add .
   git commit -m "Deploy: Tayyorgarlik"
   ```
2. GitHub-da yangi repozitoriya yarating va ulaying:
   ```bash
   git remote add origin https://github.com/SIZNING_ISMINGIZ/repo-nomi.git
   git push -u origin main
   ```

---

## ⚙️ 3. Railway-da Backend (Laravel) sozlash

1. **New Project** -> **Deploy from GitHub repo** -> Repozitoriyangizni tanlang.
2. **Settings** ga o'ting:
   - **Root Directory:** `/Backend` deb yozing.
3. **Variables** bo'limiga `.env` dagi qiymatlarni kiriting:
   ```env
   APP_ENV=production
   APP_KEY=[Sizning APP_KEYingiz]
   APP_DEBUG=false
   APP_URL=https://SIZNING-APP.up.railway.app
   
   DB_CONNECTION=pgsql (yoki mysql)
   DB_HOST=[Railway Database Host]
   DB_PORT=[Railway Database Port]
   DB_DATABASE=[Database Nomi]
   DB_USERNAME=[Username]
   DB_PASSWORD=[Parol]
   
   CORS_ALLOWED_ORIGINS=https://SIZNING-FRONTEND.up.railway.app
   ```
   > [!TIP]
   > Railway-da **Add Plugin** orqali Database (PostgreSQL yoki MySQL) qo'shganingizda, barcha host/pass ma'lumotlarini o'sha yerdan olasiz.

4. **Migratsiya:** Deploy tugagach, Terminalda `php artisan migrate --force` komandasini bering.

---

## ⚛️ 4. Railway-da Frontend (React) sozlash

1. **New Service** -> **GitHub Repo** -> Yana o'sha reponi tanlang.
2. **Settings**:
   - **Root Directory:** `/Frontend`
3. **Variables**:
   ```env
   VITE_API_URL=https://SIZNING-BACKEND.up.railway.app/api
   ```
4. **Build & Start**:
   - **Build Command:** `npm run build`
   - **Start Command:** `npx serve dist -p $PORT`

---

## ✅ Tekshirish Ro'yxati

| Qadam | Holat |
|-------|-------|
| Backend URL ishlayapti | ✅ |
| Frontend URL ishlayapti | ✅ |
| VITE_API_URL to'g'ri sozlangan | ✅ |
| Database bog'langan | ✅ |

Biror muammo bo'lsa, `View Logs` orqali xatolikni ko'rishingiz va sozlamalarni o'zgartirishingiz mumkin. Omad! 🚀
