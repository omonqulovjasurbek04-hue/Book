<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    // Frontend URL env() dan olamiz yoki CORS ruxsatlaridagi birinchi URL ga yo'naltiramiz
    $allowedOrigins = explode(',', env('CORS_ALLOWED_ORIGINS', 'http://localhost:5173'));
    $frontendUrl = env('FRONTEND_URL', $allowedOrigins[0]);
    
    return redirect($frontendUrl);
});
