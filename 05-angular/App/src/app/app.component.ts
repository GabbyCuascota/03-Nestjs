import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Interpolacion
  titulo = 'Web';
  usuario = {
    nombre: 'Gabriela',
    apellido: 'Cuascota',
  };
  arregloNumeros = [1,2,3,4,5];
  mostrarTitulo = true;
}
