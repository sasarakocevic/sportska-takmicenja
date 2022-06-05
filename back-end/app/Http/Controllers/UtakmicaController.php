<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Utakmica;

class UtakmicaController extends Controller
{
    public function index() 
    {
        $data = Utakmica::with('tim1','tim2', 'takmicenje')->get(); //Model get all
        return $data;
    }

    public function store(Request $request)
    {
        $data = Utakmica::create($request->all());
        return $data;
    }

    public function show($id)
    {
    //    $data = Utakmica::findOrFail($id);
        $data1 = Utakmica::with('tim1', 'tim2', 'takmicenje')->findOrFail($id);
        return $data1;
    }

    public function update(Request $request, $id)
    {
        $utakmica = Utakmica::find($id);
        $utakmica->update($request->all());
        return $utakmica;
    }

    public function destroy($id)
    {
        $utakmica = Utakmica::findOrFail($id);
        $utakmica->delete($id);
        return'{"success":"Uspjesno ste obrisali utakmicu."}';
    }


}
