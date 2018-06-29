import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { SeleccionComponent } from './Netflix/seleccion/seleccion.component';

@NgModule({
  declarations: [   //componentes
    AppComponent,
    SeleccionComponent
  ],
  imports: [    //modulos
    BrowserModule,  //ngIf, ngFor
    FormsModule //NgModel
  ],
  providers: [],  // servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
