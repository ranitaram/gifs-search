import { Component,  } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';
import { animate, state, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state('*', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.2s', style({ opacity: 0 }))
      ])
    ]),
    trigger('itemAnimation', [
      state('*', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-50px)', opacity: 0 }),
        animate('0.3s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('0.3s ease-out', style({ transform: 'translateX(50px)', opacity: 0 }))
      ])
    ])
  ]
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
      console.log(termino)
   }

  

}
