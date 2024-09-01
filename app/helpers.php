<?php
if (!function_exists('flashMessage')) {
    function flashMessage($title, $message, $icon = null): void
    {
        session()->flash('title', $title);
        session()->flash('message', $message);
        session()->flash('icon', $icon);
    }
}
