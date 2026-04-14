import { Component, inject, OnInit, signal } from '@angular/core';
import { Http } from '../services/http';

@Component({
  selector: 'app-perfil',
  standalone: true, 
  imports: [], 
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
  
})
export class Perfil implements OnInit {
  private http = inject(Http);
  infoUsuario = signal<any>(null);
  miUser = 'LuisAtocheUTNFRA';
  ngOnInit() {
    // Usamos GitHub para traer tus datos
    this.http.traer('https://api.github.com/users/', this.miUser, this.infoUsuario);
  }
}