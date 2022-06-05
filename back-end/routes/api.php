<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TimController;
use App\Http\Controllers\TakmicenjeController;
use App\Http\Controllers\UtakmicaController;
use App\Http\Controllers\BodoviController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('tim', TimController::class);

Route::get('takmicenje/{id}/timovi', [TakmicenjeController::class, 'timovi']);
Route::post('takmicenje/{takmicenje_id}/timovi/{tim_id}', [TakmicenjeController::class, 'addTimovi']);
Route::delete('takmicenje/{takmicenje_id}/timovi/{tim_id}', [TakmicenjeController::class, 'removeTimovi']);

Route::resource('takmicenje', TakmicenjeController::class);


Route::get('utakmica', [UtakmicaController::class, 'index']);
Route::get('utakmica/{id}', [UtakmicaController::class, 'show']);
Route::post('utakmica', [UtakmicaController::class, 'store']);
Route::put('utakmica/{id}', [UtakmicaController::class, 'update']);
Route::delete('utakmica/{id}', [UtakmicaController::class, 'destroy']);

Route::get('bodovi', [BodoviController::class, 'index']);
Route::get('bodovi/{timId}/{takmicenjeId}', [BodoviController::class, 'show']);
//Route::resource('tim.bodovi', BodoviController::class);
