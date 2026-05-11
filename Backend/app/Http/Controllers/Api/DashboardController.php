<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Testimonial;
use App\Models\Item;

class DashboardController extends Controller
{
    // GET /api/dashboard/stats
    public function stats()
    {
        return response()->json([
            'orders_count'       => Order::count(),
            'testimonials_count' => Testimonial::where('is_active', true)->count(),
            'items_count'        => \App\Models\Book::count(),
            'recent_orders'      => Order::latest()->take(5)->get(),
        ]);
    }
}
