<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
       Schema::create('books', function (Blueprint $table) {
    $table->id();
    $table->string('title_uz');
    $table->string('title_ru');
    $table->text('description_uz')->nullable();
    $table->text('description_ru')->nullable();
    $table->integer('price');
    $table->integer('discount_price')->nullable();
    $table->string('image')->nullable();
    $table->string('language')->nullable();
    $table->boolean('is_active')->default(true);
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
