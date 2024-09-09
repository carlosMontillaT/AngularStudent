import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
   
    Mi nombre es: {{nombre}}
    <br>

    Mi apellido es: {{apellido}}
    <br>

    Mi edad es: {{edad}}
    <br>

    Mi dinero es: {{dinero}}
    <br>

    @if(apellido == 'Montilla'){
    
    Eres familia lejana del profesor.

    }

    @else{
    
    No eres familia lejana del profesor

    }


    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {

  nombre : string = 'Carlos';
  apellido : string = 'Ramirez';
  dinero : number = 200;
  edad : number = 25;
  action : boolean = true;
}
