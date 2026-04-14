import { Component } from '@angular/core';

import { CardComponent } from '../componentes/card/card';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [CardComponent], 
  templateUrl: './bienvenida.html',
  styleUrl: './bienvenida.css',
})

export class Bienvenida {
  misProyectos = [
  { t: 'Tarea 1', s: 'Rutas y Login', img: 'https://picsum.photos/200', l: 'https://google.com' },
  { t: 'Tarea 2', s: 'Servicios y API', img: 'https://picsum.photos/201', l: 'https://google.com' },
  { t: 'Tarea 3', s: 'Signals y HTTP', img: 'https://picsum.photos/202', l: 'https://google.com' },
  { t: 'Tarea 4', s: 'Directivas', img: 'https://picsum.photos/203', l: 'https://google.com' }
];
}
