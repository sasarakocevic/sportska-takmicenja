<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Takmicenje extends Model
{
    use HasFactory;

    protected $fillable = [
        'naziv', 'datum_od', 'datum_do', 'mjesto_odrzavanja'
    ];
}
