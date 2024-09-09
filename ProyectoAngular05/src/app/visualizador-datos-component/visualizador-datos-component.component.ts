import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visualizador-datos-component',
  standalone: true,
  imports: [],
  templateUrl: './visualizador-datos-component.component.html',
  styleUrl: './visualizador-datos-component.component.css'
})
export class VisualizadorDatosComponentComponent {

  @Input() datos: any[] = [];
  
 
}
