import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-personales-form',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class DatosPersonalesFormComponent {
  datos = {
    nombre: '',
    apellido: '',
    direccion: '',
    numeros: [] as string[]
  };
  
  numero: string = '';
  enviado: boolean = false;

  agregarNumero() {
    if(this.numero) {
      this.datos.numeros.push(this.numero);
      this.numero = ''; // Limpia el campo después de agregar
    }
  }

  onSubmit() {
    this.enviado = true;
  }
}