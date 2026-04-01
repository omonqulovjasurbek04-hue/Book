#!/bin/bash
# =========================================================================
# 🚀 Server (VPS / Railway / Ubuntu) uchun loyiha yuklovchi SETUP skripti
# Bu fayl serverga tushganda barcha kerakli kutubxonalarni yuklab oladi.
# =========================================================================

echo "📦 O'rnatish jarayoni boshlanmoqda..."

# 1. Backend (Laravel) kutubxonalarini yuklash
echo "▶️ Backend (Laravel) kutubxonalari yuklanmoqda (vendor)..."
cd Backend
composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

# 2. .env fayli yo'q bo'lsa, yaratish
if [ ! -f .env ]; then
    echo "▶️ .env fayli yaratilmoqda..."
    cp .env.example .env
    php artisan key:generate --force
fi

# 3. Database migratsiya va seed (test malumotlar)
echo "▶️ Ma'lumotlar bazasi jadvallari yaratilmoqda..."
php artisan migrate --force
php artisan db:seed --force

# 4. Keshlarni tozalash (Server tez ishlashi uchun)
echo "▶️ Laravel keshlari tozalanmoqda..."
php artisan config:cache
php artisan event:cache
php artisan route:cache
php artisan view:cache
cd ..

# 5. Frontend (React) kutubxonalarini yuklash
echo "▶️ Frontend (React) kutubxonalari yuklanmoqda (node_modules)..."
cd Frontend
npm install
echo "▶️ Frontend (React) production build qilinmoqda..."
npm run build
cd ..

echo "✅ BARChA KERAKLI FAYLLAR YUKLAB OLINDI VA SERVER ISHLASHGA TAYYOR!"
