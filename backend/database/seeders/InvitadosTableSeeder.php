<?php

namespace Database\Seeders;

use App\Models\Invitado;
use Illuminate\Database\Seeder;

class InvitadosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        Invitado::create(['nombre' => 'Luiso', 'apellidos' => 'Vázquez']);
        Invitado::create(['nombre' => 'Diana', 'apellidos' => 'Gonzalez']);
        Invitado::create(['nombre' => 'Inés', 'apellidos' => 'Fernandez']);
        Invitado::create(['nombre' => 'Guillermo', 'apellidos' => 'Zarko']);
        Invitado::create(['nombre' => 'Carlos', 'apellidos' => 'Martínez']);
    }
}
