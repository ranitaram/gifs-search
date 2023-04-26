import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FootherComponent } from '../shared/foother/foother.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadosComponent,
  
  ],
  exports:[
    GifsPageComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule
    
  ]
})
export class GifsModule { }
