import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Interpolacion
  mostrarComponente = false;
  contadorDesdePapa = 0;

  arregloUsuarios = [
    {
      id: 1,
      imagen: '/assets/perfil.PNG',
      texto: 'tatis1909'
    },
    {
      id: 2,
      imagen: '/assets/perfil1.PNG',
      texto: 'pedro'
    },
    {
      id: 3,
      imagen: '/assets/perfil2.PNG',
      texto: 'Jeff'
    },
    {
      id: 4,
      imagen: '/assets/perfil3.PNG',
      texto: 'Edd'
    },
    {
      id: 5,
      imagen: '/assets/perfil4.PNG',
      texto: 'Nancy'
    }
  ];

  titulo = 'Web';
  usuario = {
    nombre: 'Adrian',
    apellido: 'Eguez'
  };
  arregloNumeros = [5, 4, 3, 2, 1];
  mostrarTitulo = true;

  imagenUrl = "https://coryrylan.com/assets/images/cory-rylan-gde.png";
  imagenWidth = 200;

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

  actualizarContador(contadorHijo) {
    console.log('Se ejecuto', contadorHijo);
    this.contadorDesdePapa = contadorHijo;
  }

}
