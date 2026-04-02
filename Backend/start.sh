#!/bin/sh

# Default port o'rnatish
export PORT=${PORT:-8000}

# Nginx portini dinamik to'g'irlash
envsubst '${PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Laravel keshlash (Sezilarli tezlik beradi)
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Yangi jadvallarni ma'lumotlar bazasiga o'tkazish
php artisan migrate --force

# Serverlarni ishga tushirish (FPM orqa fonda, Nginx oldinda)
php-fpm -D
nginx -g "daemon off;"
