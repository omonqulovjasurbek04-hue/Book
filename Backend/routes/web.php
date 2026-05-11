<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Frontend SPA uchun catch-all route.
| Agar build qilingan app.blade.php mavjud bo'lsa, uni ko'rsatadi.
| Aks holda welcome view ni ko'rsatadi.
|
*/

Route::get('/{any}', function () {
    // Built frontend mavjud bo'lsa - uni ko'rsat
    if (view()->exists('app')) {
        return view('app');
    }
    // Aks holda default welcome
    return view('welcome');
})->where('any', '.*');
