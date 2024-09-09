import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { VisualizadorDatosComponentComponent } from './visualizador-datos-component/visualizador-datos-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectornumericoComponent, VisualizadorDatosComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoAngular05';
misDatos = [
  {nombre: 'Juan', edad: 30, dob: '1994-05-15', ciudad: 'Madrid'},
  {nombre: 'Maria', edad: 25, dob: '1999-12-03', ciudad: 'Barcelona'},
  {nombre: 'Pedro', edad: 40, dob: '1984-08-20', ciudad: 'Valencia'}
];

}
