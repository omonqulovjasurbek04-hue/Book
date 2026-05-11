<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\ItemController;

// Public Endpoints
Route::get('/ping', function () { return response()->json(['message' => 'pong', 'timestamp' => now()]); });
Route::post('/orders', [OrderController::class, 'store']);
Route::get('/testimonials', [TestimonialController::class, 'index']);

// Admin Auth
Route::post('/login', [AuthController::class, 'login']);

// Protected Admin Endpoints
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/dashboard', [DashboardController::class, 'stats']);
    Route::apiResource('items', ItemController::class);
});