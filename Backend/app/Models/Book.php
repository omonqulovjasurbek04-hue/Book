<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
    'title_uz','title_ru','description_uz','description_ru',
    'price','discount_price','image','language','is_active'
];
}
