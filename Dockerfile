# ==========================================
# 1-Bosqich: Frontend (React) ni qurish
# ==========================================
FROM node:20 AS frontend
WORKDIR /app/Frontend

# Faqat package fayllarini olinadi (keshlash strategiyasi)
COPY Frontend/package*.json ./
RUN npm install

# Frontend barcha fayllarini ko'chirib, uni "bitta server" muhiti uchunkompilyatsiya qilish
COPY Frontend/ ./
# Ilova bitta domenda ishlashi sababli, API manzili shu serverning ichidagi /api yo'li bo'ladi
ENV VITE_API_URL=/api
RUN npm run build

# ==========================================
# 2-Bosqich: Backend (Laravel) + Nginx server bittada
# ==========================================
FROM php:8.3-fpm

# Server ishlashi uchun barcha kerakli paketlarni yozish
RUN apt-get update && apt-get install -y \
    nginx \
    gettext-base \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    default-mysql-client \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Backend (Laravel) fayllarini asosiy Server papkasiga nusxalash
COPY Backend/ ./
RUN composer install --no-interaction --optimize-autoloader --no-dev

# **MUHIM:** 1-bosqichdagi React build fayllarini to'g'ridan to'g'ri Laravel ichidagi public/ ga nusxalash
# Endi Laravel va React bitta Nginx domenda yashaydi!
COPY --from=frontend /app/Frontend/dist/ /var/www/public/

# Nginx konfiguratsiya andozasini o'tkazish
COPY Backend/nginx.conf /etc/nginx/conf.d/default.conf.template

# Fayllarni to'g'irlash
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 /var/www/storage /var/www/bootstrap/cache \
    && chmod +x start.sh

# Oldingi yozgan muvaffaqiyatli ishga tushirish skriptidan foydalanish
CMD ["./start.sh"]
