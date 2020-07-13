import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {map}  from 'rxjs/operators'
import { PeliculaModel } from '../models/pelicula.model';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  constructor( private http:HttpClient ) { }
  
  private apikey:string = '6cee1ce91f2e73cbad51cc7a92f2c6bb';
  private urlthemodb:string = 'https://api.themoviedb.org/3';

  peliculas:any []=[];

  //peliculaId :string;



  getPelicula( peliculaId:number){

    let url=`${this.urlthemodb}/movie/${peliculaId}?api_key=${this.apikey}`;
       return this.http.get(url).pipe(map( resp =>resp ));
  }


  //Obtengo las peliculas que estan en cartelera durante una semana
  getCartelera(){

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);  
   // "0" + (this.getMonth() + 1)).slice(-2)

    let desdeStr = `${ desde.getFullYear() }-0${ desde.getMonth()+1 }-${ desde.getDate() }` 
    let hastaStr = `${ hasta.getFullYear() }-0${ hasta.getMonth()+1 }-${ hasta.getDate() }`  
    console.log(desdeStr);
    console.log(hastaStr); 
    //console.log(`discover/movie?api_key=${this.apikey}&primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }`);
   
    let url =`${ this.urlthemodb }/discover/movie?api_key=${this.apikey}&primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }`;
 
    return  this.http.get( url).pipe(map((resp:any)=>resp.results));    
    
  }



  //Obtengo las peliculas más populares
  getPopulares( ){

    let url = `${ this.urlthemodb }/discover/movie?api_key=${this.apikey}&sort_by=popularity.desc`;     
    
    return  this.http.get( url).pipe(map((resp:any)=>resp.results));         

  }


  //obtengo las populares de los niños
  getPopularesNinos(){

    let url =`${ this.urlthemodb }/discover/movie?api_key=${ this.apikey }&certification_country=US&certification.lte=G&sort_by=popularity.desc`;

    return this.http.get(url).pipe(map ( (resp:any) =>resp.results));

  }
  


  //Busco las peliculas 
  buscarPeliculas( peliculaBuscada:string ){

    let url =`${ this.urlthemodb }/search/movie?api_key=${this.apikey}&query=${peliculaBuscada}`;

    return this.http.get( url ).pipe( map( (resp:any) => {
                                //return this.crearArregloPeliculas(resp);                                
                                //const peliculas : PeliculaModel [] = [];
                                  this.peliculas= resp.results;
                                  return resp.results ;    
                              
                                }))
  }

   private crearArregloPeliculas( peliculaObj:Object){

    const peliculas : PeliculaModel [] = [];    
    console.log(peliculaObj);
      //Se valida si el objeto tiene datos, ésto se hace cuando el ID es el nodo principal del objeto
    if( peliculaObj===null)return[];
    Object.keys(peliculaObj).forEach((key:any)=>{

      const pelicula : PeliculaModel=peliculaObj[ key];
      pelicula.id = key;
      peliculas.push(pelicula);      
    });
    return peliculas;  

  }

} 
