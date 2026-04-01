@echo off
color 0A
echo ========================================================
echo 🚀 Book Loyihasini GitHub va Railway ga yuklash skripti
echo ========================================================
echo.

echo [1/3] Fayllar Git'ga qo'shilmoqda...
git add .

echo.
echo [2/3] O'zgarishlar saqlanmoqda (Commit)...
set /p commit_msg="O'zgarishlar haqida qisqacha ma'lumot (Masalan: 'fix: navbar'): "
if "%commit_msg%"=="" set commit_msg="auto: fayllar yangilandi"

git commit -m "%commit_msg%"

echo.
echo [3/3] GitHub ga yuklanmoqda...
git push origin Jasurbek

echo.
echo ========================================================
echo ✅ Muvaffaqiyatli! Loyiha GitHub ga ketdi!
echo.
echo 🚂 Railway.com saytida loyiha avtomatik yangilanishi kerak.
echo (Tekshirish uchun: https://railway.com)
echo ========================================================
pause
