<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utakmica extends Model
{
    public $table = 'utakmica';

    use HasFactory;

    protected $fillable = [
        'tim1_id', 'tim1_rezultat', 'tim2_id', 'tim2_rezultat', 'takmicenje_id', 'datum'
    ];

    public function tim1() {
        return $this->hasMany(Tim::class, 'id', 'tim1_id');
    }

    public function tim2() {
        return $this->hasMany(Tim::class, 'id', 'tim2_id');
    }

    public function takmicenje() {
        return $this->hasMany(Takmicenje::class, 'id', 'takmicenje_id');
    }
}
