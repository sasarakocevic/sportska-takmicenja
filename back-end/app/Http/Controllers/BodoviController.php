<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TakmicenjeTim;
use App\Http\Controllers\DB;

class BodoviController extends Controller
{
    public function index() 
    {
        $data = TakmicenjeTim::with('tim', 'takmicenje')->get(); //Model get all
        return $data;
    }

    public function show($timId, $takmicenjeId)
    {
        $data = TakmicenjeTim::where('tim_id', '=', $timId)
                            ->where('takmicenje_id', '=', $takmicenjeId)
                            ->sum('broj_bodova');
        return $data;
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
