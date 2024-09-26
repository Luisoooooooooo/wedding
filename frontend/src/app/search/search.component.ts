// src/app/search/search.component.ts

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [FormsModule, HttpClientModule],
})
export class SearchComponent {
  nombre: string = '';
  apellidos: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  buscarInvitado() {
    this.http.post('http://tu-api-url.com/api/invitados/buscar', {
      nombre: this.nombre,
      apellidos: this.apellidos,
    }).subscribe((response: any) => {
      if (response.encontrado) {
        this.router.navigate(['/formulario']);
      } else {
        alert('Invitado no encontrado');
      }
    });
  }
}
