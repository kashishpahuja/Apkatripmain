<?php
use App\Http\Controllers\AirportController;
use App\Http\Controllers\TopPorts;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


use App\Http\Controllers\FlightController;



Route::apiResource('v1/airports', AirportController::class);
Route::apiResource('v1/topairports', TopPorts::class);

Route::post('v1/search-flights', [FlightController::class, 'searchFlights']);
Route::apiResource('v1/blog', BlogController::class);



// Route::get('/search-flights-one', (Request $request) {
//     return "<h1>Hello world</h1>"
// });
