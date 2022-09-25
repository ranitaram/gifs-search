import { Component,  } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  //este historial es de la propiedad del sidebarComponent
  //la cual yo necesito para poder modificar el html
  get historial(){
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) {

   }

   buscar(termino: string){
     //regresar el resulatdo de la eleccion en el historial de busquedas
      this.gifsService.buscarGifs(termino);
   }

  

}
