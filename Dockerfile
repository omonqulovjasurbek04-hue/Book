FROM php:8.3-cli

# Install system dependencies
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

# Get Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /app

# Copy application files (buting loyihani ko'chirish)
COPY . .

# Backend qismiga o'tamiz
WORKDIR /app/Backend

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Railway uzatuvchi PORT ni muhit o'zgaruvchisiga o'rnatish
ENV PORT=8000
EXPOSE ${PORT}

# Ilovani va bazani Railway da ishga tushirish (Backend ichidagi start.sh)
CMD ["bash", "start.sh"]
