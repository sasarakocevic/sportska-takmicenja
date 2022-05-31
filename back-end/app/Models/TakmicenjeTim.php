<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class TakmicenjeTim extends Pivot
{
    public $table = 'bodovi_tim';
    
    use HasFactory;

    protected $fillable = [
        'tim_id', 'broj_bodova', 'takmicenje_id'
    ];
}
