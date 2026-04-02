<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Step;

class StepController extends Controller
{
    public function index()
    {
        return response()->json(
            Step::where('is_active', true)->orderBy('step_number', 'asc')->get()
        );
    }
}
