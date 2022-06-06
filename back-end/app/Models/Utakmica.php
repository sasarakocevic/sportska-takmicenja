<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utakmica extends Model
{
    public $table = 'utakmica';

    public $timestamps = false;

    use HasFactory;

    protected $fillable = [
        'tim1_id', 'tim1_rezultat', 'tim2_id', 'tim2_rezultat', 'takmicenje_id', 'datum'
    ];

    public function tim1() {
        return $this->belongsTo(Tim::class, 'tim1_id');
    }

    public function tim2() {
        return $this->belongsTo(Tim::class, 'tim2_id');
    }

    public function takmicenje() {
        return $this->belongsTo(Takmicenje::class, 'takmicenje_id');
    }
}
