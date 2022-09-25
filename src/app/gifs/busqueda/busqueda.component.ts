import { Component, ElementRef, ViewChild  } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  //para poder usar un servicio primero tenemos que inyectarlo
  //por medio del cosntructor, y asi ya tenemos acceso a 
  //todas su propiedades y todos sus metodos
  constructor(private gifsService: GifsService){

  }

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    //para que no nos regrese nada si no ingresan valores al 
    //dar click enter
    if (valor.trim().length === 0) {
      return;
    }
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }

}
