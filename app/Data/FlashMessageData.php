<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class FlashMessageData extends Data
{
    public function __construct(
        public string $title,
        public string $message,
        public string $icon
    ) {}
}
