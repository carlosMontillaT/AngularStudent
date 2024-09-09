import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-personales-form',
  templateUrl: './datos-personales-form.component.html',

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
    if (this.numero) {
      this.datos.numeros.push(this.numero);
      this.numero = '';
    }
  }

  onSubmit() {
    this.enviado = true;
  }
}