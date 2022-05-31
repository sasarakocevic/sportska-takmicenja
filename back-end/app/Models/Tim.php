<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tim extends Model
{
    public $table = 'tim';

    use HasFactory;

    protected $fillable = [
        'naziv', 'adresa', 'slika'
    ];

    public function bodovi()
    {
        return $this->belongsToMany(Takmicenje::class)->using(TakmicenjeTim::class);
    }

    public function takmicenja()
    {
        return $this->belongsToMany(Takmicenje::class);
    }
}
