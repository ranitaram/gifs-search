import { HttpClient, HttpParams } from '@angular/common/http';
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
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'

  
  public resultados: Gif[] = [];

  get ultimoResultado(){
    return [...this.resultados];
  }

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
    this.resultados = JSON.parse(localStorage.getItem('ultimoResultado')!) ||[];
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

    //construccion de los query params
    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','12')
    .set('q', query );

    

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params})
    .subscribe((resp) => {
      
      this.resultados = resp.data;
      localStorage.setItem('ultimoResultado', JSON.stringify(this.resultados));
      }) //el subscribe se va a ejecutar cuando tengamos la resolucion de este get
  }
}
