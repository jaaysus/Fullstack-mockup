<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
use App\Http\Controllers\EntryController;

Route::get('/entries', [EntryController::class, 'index']);
Route::post('/entries', [EntryController::class, 'store']);
//http://127.0.0.1:8000/api/entries  gets you all the entries from the database, interesting