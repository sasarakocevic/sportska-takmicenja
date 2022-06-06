<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Takmicenje;

class TakmicenjeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    //Listanje svih takmicenja
    public function index()
    {
        $data = Takmicenje::all(); //Model get all
        return $data;
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    //dodavanje novog takmicenja
    public function store(Request $request)
    {
        $data = Takmicenje::create($request->all());
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //prikaz jednog takmicenja
    public function show($id)
    {
        $data = Takmicenje::findOrFail($id);
        return $data;
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //edit jednog takmicenja
    public function update(Request $request, $id)
    {
        $takmicenje = Takmicenje::find($id);
        $takmicenje->update($request->all()); //model update
        return $takmicenje;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //uklanjanje takmicenja
    public function destroy($id)
    {
        $takmicenje = Takmicenje::findOrFail($id);
        $takmicenje->delete($id);
        return'{"success":"Uspjesno ste obrisali takmicenje."}';
    }

    //listanje timova koji igraju takmicenje
    public function timovi($id)
    {
        $data = Takmicenje::with('timovi')->findOrFail($id); //Model get all
        return $data;
    }

    //dodavanje tima takmicenju
    public function addTimovi($takmicenje_id, $tim_id)
    {
        $takmicenje = Takmicenje::find($takmicenje_id);
        $takmicenje->timovi()->attach($tim_id);
        return Takmicenje::with('timovi')->get();
    }

    //uklanjanje tima iz takmicenja
    public function removeTimovi($takmicenje_id, $tim_id)
    {
        $takmicenje = Takmicenje::find($takmicenje_id);
        $takmicenje->timovi()->detach($tim_id);
        return Takmicenje::with('timovi')->get();
    }
}
