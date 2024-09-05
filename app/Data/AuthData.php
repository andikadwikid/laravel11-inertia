<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class AuthData extends Data
{
    public function __construct(
        public UserData $user
    ) {}
}
