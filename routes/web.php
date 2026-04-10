<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});
Route::get('/about', function () {
    return inertia('AboutUs');
});
Route::get('/contact', function () {
    return inertia('ContactUs');
});
Route::get('/services', function () {
    return inertia('Services');
});
Route::get('/projects', function () {
    return inertia('Projects');
});
Route::get('/contact', function () {
    return inertia('ContactUs');
});
