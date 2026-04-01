# ==========================================
# 1-Bosqich: Frontend (React) ni qurish
# ==========================================
FROM node:20 AS frontend

WORKDIR /app/Frontend
# Faqat package.json larni nusxalash (keshlash uchun)
COPY Frontend/package*.json ./
RUN npm install

# Qolgan barcha kodlarni nusxalash va tasdiqlash
COPY Frontend/ ./
RUN npm run build

# ==========================================
# 2-Bosqich: Backend (Laravel) ni ishga tushirish
# ==========================================
FROM php:8.3-cli

# Tizim kutubxonalarini o'rnatish
RUN apt-get update && apt-get install -y \
    git \
    curl \
    unzip \
    zip \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    libsodium-dev \
    libpq-dev \
    default-mysql-client \
    default-libmysqlclient-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo_pgsql pdo_mysql mbstring exif pcntl bcmath gd zip sodium

# Composer ni yuklash
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Butun loyihani nusxalash
COPY . .

# Frontend build qilingan fayllarini avtomat Laravel public papkasiga o'tkazish
COPY --from=frontend /app/Frontend/dist /app/Backend/public

# Backend sozlamalari
WORKDIR /app/Backend
RUN composer install --no-dev --optimize-autoloader

ENV PORT=8000
EXPOSE ${PORT}

# Ilovani ishga tushirish
CMD ["bash", "start.sh"]
