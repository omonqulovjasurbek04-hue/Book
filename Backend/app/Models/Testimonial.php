<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = [
        'name',
        'course_name',
        'message_uz',
        'message_ru',
        'image',
        'is_active',
    ];
}