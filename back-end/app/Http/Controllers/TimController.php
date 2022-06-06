<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tim;

class TimController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    //lista sve timove iz baze
    public function index()
    {
        $data = Tim::all(); //Model get all
        return $data;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    //unos novog tima
    public function store(Request $request)
    {
        $data = Tim::create($request->all());
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //prikaz 1 tima
    public function show($id)
    {
        $data = Tim::findOrFail($id);
        return $data;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //edit 1 tima
    public function update(Request $request, $id)
    {
        $tim = Time::find($id);
        $tim->update($request->all()); //model update
        return $tim;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //brisanje tima
    public function destroy($id)
    {
        $tim = Tim::findOrFail($id);
        $tim->delete($id);
        return'{"success":"Uspjesno ste obrisali tim."}';
    }
}
