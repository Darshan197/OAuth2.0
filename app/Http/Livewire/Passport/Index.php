<?php

namespace App\Http\Livewire\Passport;

use Livewire\Component;

class Index extends Component
{

    public Client $client;

    public function render()
    {
        return view('livewire.passport.index');
    }

    public function create()
    {
        
    }
}
