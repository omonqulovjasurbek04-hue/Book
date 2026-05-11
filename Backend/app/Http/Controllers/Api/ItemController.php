<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    // GET /api/items
    public function index()
    {
        return response()->json(\App\Models\Book::latest()->paginate(20));
    }

    // POST /api/items
    public function store(Request $request)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $book = \App\Models\Book::create($data);

        return response()->json($book, 201);
    }

    // GET /api/items/{id}
    public function show($id)
    {
        return response()->json(\App\Models\Book::findOrFail($id));
    }

    // PUT /api/items/{id}
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'title'       => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $book = \App\Models\Book::findOrFail($id);
        $book->update($data);

        return response()->json($book);
    }

    // DELETE /api/items/{id}
    public function destroy($id)
    {
        $book = \App\Models\Book::findOrFail($id);
        $book->delete();

        return response()->json(['message' => 'O\'chirildi']);
    }
}
