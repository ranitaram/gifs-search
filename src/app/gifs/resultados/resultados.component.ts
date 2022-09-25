import { Component } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  get resultados(){
    //como es una propiedad no necesito poner el parentesis
    return this.gifsService.resultados;
  }

  //inyectamos nuestro servicio
  constructor(private gifsService: GifsService) { }

  

}
