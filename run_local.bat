@echo off
color 0B
echo ========================================================
echo 🚀 Loyihani Lokal kompyuterda bitta qilib ishga tushirish
echo (npm run dev ishlatilmaydi, faqat Backend Server yashaydi)
echo ========================================================
echo.

echo [1/3] Frontend (React) fayllari production uchun qurilyapti (Build)...
cd Frontend
call npm install
call npm run build

echo.
echo [2/3] Qurilgan kompyuter-fayllar Backend ga olib o'tilmoqda...
xcopy /E /Y /I dist\* ..\Backend\public\
cd ..

echo.
echo [3/3] Barcha tizim asosi (Laravel) ishga tushirilmoqda!
echo.
echo DASTUR TAYYOR! Brauzeringizdan quyidagi manzilga kiring:
echo 👉 http://127.0.0.1:8000 
echo ========================================================
cd Backend
php artisan serve
