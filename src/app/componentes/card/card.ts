import { Component, Input } from '@angular/core'; 

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
 
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() imagen: string = '';
  @Input() link: string = '';
}
