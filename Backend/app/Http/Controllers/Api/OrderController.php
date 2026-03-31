<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:30'],
            'book_id' => ['required', 'exists:books,id'],
            'lang' => ['required', 'in:uz,ru'],
            'comment' => ['nullable', 'string'],
        ]);

        $order = Order::create($data);

        return response()->json([
            'message' => 'Buyurtma qabul qilindi',
            'order' => $order,
        ], 201);
    }
}