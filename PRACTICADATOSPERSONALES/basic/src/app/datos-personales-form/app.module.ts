import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AppComponent } from './app.component';
import { DatosPersonalesFormComponent } from './datos-personales-form/'; // Importa el componente

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesFormComponent // Asegúrate de que el componente esté declarado
  ],
  imports: [
    BrowserModule,
    FormsModule // Agrega FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }