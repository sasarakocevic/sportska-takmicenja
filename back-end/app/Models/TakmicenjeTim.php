<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class TakmicenjeTim extends Pivot
{
    public $table = 'bodovi_tim';

    public $timestamps = false;
    
    use HasFactory;

    protected $fillable = [
        'tim_id', 'broj_bodova', 'takmicenje_id'
    ];


    public function tim() {
            return $this->belongsTo(Tim::class, 'tim_id');
    }
    public function takmicenje() {
            return $this->belongsTo(Takmicenje::class, 'takmicenje_id');
    }
}
