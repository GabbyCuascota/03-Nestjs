import {Component} from '@angular/core';

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
  arregloNumeros = [1, 2, 3, 4, 5];
  mostrarTitulo = true;
  imagenUrl = "https://minutodedios.fm/wp-content/uploads/2017/05/perro-gato.jpg";
  imagenWidth = '300';
  html = `
  <h1>HOLA</h1>
  <p>Hola mundo</p>
  <img src="${this.imagenUrl}" alt="">
`;

  aumentarWidth(evento) {
    console.log('evento', evento);
    this.imagenWidth += 10;
  }

  restarWidth() {
    this.imagenWidth -= 10;
  }
}
