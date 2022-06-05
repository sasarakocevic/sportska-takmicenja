<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TakmicenjeTim;
use App\Http\Controllers\DB;

class BodoviController extends Controller
{
    public function index() 
    {
        $bodovi = \DB::select(\DB::raw(
            "SELECT t.naziv as tim, tak.naziv as takmicenje, SUM(broj_bodova) as bodovi 
            FROM bodovi_tim bd JOIN tim t ON bd.tim_id=t.id JOIN takmicenje tak on bd.takmicenje_id=tak.id 
            GROUP BY tim"
        ));
        $data = TakmicenjeTim::with('tim', 'takmicenje')->get(); //Model get all
        return $bodovi;
    }

    public function show($timId, $takmicenjeId)
    {
        $bodovi = \DB::select(\DB::raw(
            "SELECT t.naziv as tim, tak.naziv as takmicenje, SUM(broj_bodova) as bodovi 
            FROM bodovi_tim bd JOIN tim t ON bd.tim_id=t.id JOIN takmicenje tak on bd.takmicenje_id=tak.id 
            WHERE t.id=".$timId." AND tak.id=".$takmicenjeId.' GROUP BY tim'
        ));
        $data = TakmicenjeTim::with('tim', 'takmicenje')
                            ->where('tim_id', '=', $timId)
                            ->where('takmicenje_id', '=', $takmicenjeId)
                            ->sum('broj_bodova');
        return $bodovi;
    }

    public function store(Request $request)
    {
        $data = TakmicenjeTim::create($request->all());
        return $data;
    }

    public function update(Request $request, $id)
    {
        $bodovi = TakmicenjeTim::find($id);
        $bodovi->update($request->all());
        return $bodovi;
    }

    public function destroy($id)
    {
        $bodovi = TakmicenjeTim::findOrFail($id);
        $bodovi->delete($id);
        return'{"success":"Uspjesno ste uklonili bodove."}';
    }
}
