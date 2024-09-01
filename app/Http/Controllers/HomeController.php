<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia(
            'home',
            [
                'users' => User::all(),
                'page_settings' => [
                    'title' => 'Home',
                ]
            ]
        );
    }
}
