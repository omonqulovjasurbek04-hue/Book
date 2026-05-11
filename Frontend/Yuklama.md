# 🚀 Frontend Yuklash va Ishga Tushirish Qo'llanmasi

## 📦 1-qadam: Frontend papkasiga kirish

```bash
cd Frontend
```

---

## 📥 2-qadam: Barcha modullarni yuklash

NPM paketlarini o'rnatish:

```bash
npm install
```

Tailwind CSS v4.2 va PostCSS ni o'rnatish:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

---

## ▶️ 3-qadam: Ishga tushirish

### Variant 1: Development Server

```bash
npm run dev
```

**Foyda:** Vite bilan fast refresh, Tailwind CSS real-time compile

### Variant 2: Static Server bilan test

```bash
npx serve .
```

---

## 🎨 VS Code Kengaytmalarini O'rnatish (Ixtiyoriy)

Quyidagi kengaytmalarni VS Code -> Extensions bo'limidan o'rnating:

1. **Live Server** - Sahifani avtomatik yangilash uchun
2. **Tailwind CSS IntelliSense** - CSS class avtokompliti uchun

---

## ✅ Tekshiruv

- `npm run dev` boshlaganda: http://localhost:5173 (yoki ko'rsatilgan port)
- `npx serve .` boshlaganda: http://localhost:3000

Agar index.html sahifasi yuklanib chiqsa — hammasi to'g'ri! 🎉