<?php

namespace App\Http\Livewire\Passport;

use Livewire\Component;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\Client;

class Index extends Component
{

    public Client $client;

    public function render()
    {
        $client = Auth::user()->clients;
        return view('livewire.passport.index', ['clients' => $client]);
    }

    public function create()
    {
        
    }
}
