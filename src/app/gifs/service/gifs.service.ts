import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //listado para almacenar el historial de busqueda
  //arreglo aoriginal
  private _historial: string[] = [];
  private apiKey : string = '2fbppjnXrvCmZ8DmsImbFJ75dwzOUc3s';

  
  public resultados: Gif[] = [];

  get historial(){
    
  //con los 3 puntos rompemos la relación ya que que si no
  //le ponemos los 3 puntos que es una desestructuración,
  //que es llamada operador spread.
  //y hacemos una modificación a esta propiedad en este caso historial,
  //posiblemente pueda modificar el arreglo original

    return [...this._historial];
    //por eso rompemos la referencia con el operador spread
    // y regresamos un nuevo arreglo
  }
  //con este http ya podre trabajar para hacer mis peticiones
  //pero este solo trabajara en base a observables
  //y estos son mas poderosos que las promesas ya que tienen mas control
  constructor(private http: HttpClient){

    //json.parse es lo contario del stringfy, asi que toma el
    //string y lo convierte  en un objeto
    this._historial = JSON.parse(localStorage.getItem('historial')!)||[];
  }

  //funcion
  //query o termino de busqueda
  buscarGifs(query: string){
    //para que todo pase a minusculas
    query = query.trim().toLocaleLowerCase();

    //si lo que viene en el query aun no esta en el historial
    //de busquedas, entonces, que lo inserte en el arreglo
    if (!this._historial.includes(query)) {
      //unshift para insertar en el inicio
      this._historial.unshift(query);
      //de esta forma coratamos y solo recibiremos 
      // del 0 hasta 10 busquedas.
      this._historial = this._historial.splice(0,10);

      //para almacenar el historial de busquedas y grabarlo en el localstorage
      //usamos el json.strinfy que toma cualquier objeto y lo pude
      //convertir en un string
      localStorage.setItem('historial', JSON.stringify(this._historial));
      
    }
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=2fbppjnXrvCmZ8DmsImbFJ75dwzOUc3s&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
      }) //el subscribe se va a ejecutar cuando tengamos la resolucion de este get
  }
}
