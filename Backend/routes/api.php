<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\FeatureController;
use App\Http\Controllers\Api\SettingController;

Route::get('/books', [BookController::class, 'index']);
Route::get('/books/{book}', [BookController::class, 'show']);

Route::post('/orders', [OrderController::class, 'store']);