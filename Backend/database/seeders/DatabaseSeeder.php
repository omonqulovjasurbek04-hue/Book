<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Testimonial;
use App\Models\Book;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Book::create([
            'title_uz' => 'Laravel va React - To\'liq Kurs',
            'title_ru' => 'Полный курс Laravel и React',
            'description_uz' => 'Zamonaviy web dasturlash bo\'yicha to\'liq qollanma.',
            'description_ru' => 'Полное руководство по современной веб-разработке.',
            'price' => 150000,
            'discount_price' => 120000,
            'is_active' => true,
        ]);

        Testimonial::create([
            'name' => 'Javohir T.',
            'course_name' => 'Backend Foundation',
            'message_uz' => 'Juda zo\'r kurs ekan, ko\'p narsa o\'rgandim!',
            'message_ru' => 'Отличный курс, многому научился!',
            'is_active' => true,
        ]);

        Testimonial::create([
            'name' => 'Malika R.',
            'course_name' => 'React Setup',
            'message_uz' => 'O\'qituvchi juda zo\'r tushuntiradi. Hammaga tavsiya qilaman.',
            'message_ru' => 'Преподаватель объясняет очень доступно. Рекомендую.',
            'is_active' => true,
        ]);

        Testimonial::create([
            'name' => 'Asadbek J.',
            'course_name' => 'Laravel va API',
            'message_uz' => 'Amaliyot bilan boyitilgan eng zo\'r kurslardan biri!',
            'message_ru' => 'Один из лучших курсов с большим количеством практики!',
            'is_active' => true,
        ]);
    }
}
