<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Takmicenje extends Model
{
    public $table = 'takmicenje';

    use HasFactory;

    protected $fillable = [
        'naziv', 'datum_od', 'datum_do', 'mjesto_odrzavanja'
    ];

    public function timovi()
    {
        return $this->belongsToMany(Tim::class, 'tim_takmicenje');
    }

    public function bodovi()
    {
        return $this->belongsToMany(Tim::class)->using(TakmicenjeTim::class);
    }
}
