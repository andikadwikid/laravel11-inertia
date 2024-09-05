<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class PageData extends Data
{
    public function __construct(
        public string $location,
        public FlashMessageData $flashMessage,
        public AuthData $auth
    ) {}
}
