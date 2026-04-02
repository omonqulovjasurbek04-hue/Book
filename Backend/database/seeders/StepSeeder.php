<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StepSeeder extends Seeder
{
    public function run(): void
    {
        $steps = [
            [
                'step_number' => '01',
                'text' => "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi",
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'step_number' => '02',
                'text' => "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi",
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'step_number' => '03',
                'text' => "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi",
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'step_number' => '04',
                'text' => "Barcha yoshdagi shu tillarga qiziqadigan barchaga kurslarimiz foydali bo'ladi",
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ];

        DB::table('steps')->insert($steps);
    }
}
