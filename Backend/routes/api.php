<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\TestimonialController;

Route::post('/orders', [OrderController::class, 'store']);
Route::get('/testimonials', [TestimonialController::class, 'index']);