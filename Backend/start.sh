#!/bin/bash

# Avtomatik bazani yangilash
php artisan migrate --force
php artisan db:seed --force

# Serverni ishga tushirish
php artisan serve --host=0.0.0.0 --port=$PORT
