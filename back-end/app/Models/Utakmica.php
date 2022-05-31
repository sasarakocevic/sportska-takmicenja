<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utakmica extends Model
{
    use HasFactory;

    protected $fillable = [
        'tim1_id', 'tim1_rezultat', 'tim2_id', 'tim2_rezultat', 'takmicenje_id', 'datum'
    ];
}
