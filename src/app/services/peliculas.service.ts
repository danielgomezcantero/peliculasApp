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


  getPopulares( ){

    let url = `${ this.urlthemodb }/discover/movie?api_key=${this.apikey}&sort_by=popularity.desc`;     
    
    return  this.http.get( url).pipe(map(resp=>resp));         

  }
  

  buscarPeliculas( peliculaBuscada:string ){

    let url =`${ this.urlthemodb }/search/movie?api_key=${this.apikey}&query=${peliculaBuscada}`;

    return this.http.get( url ).pipe(
                              map( (resp:any) => {
                                //return this.crearArregloPeliculas(resp);
                                
                                //const peliculas : PeliculaModel [] = [];
                                  return resp.results ;    
                              
                              }))
  }

   private crearArregloPeliculas( peliculaObj:Object){

    const peliculas : PeliculaModel [] = [];    
    console.log(peliculaObj);
      //Se valida si el objeto tiene datos esto se hace cuando el ID es el nodo principal del objeto
    if( peliculaObj===null)return[];
    Object.keys(peliculaObj).forEach((key:any)=>{

      const pelicula : PeliculaModel=peliculaObj[ key];
      pelicula.id = key;
      peliculas.push(pelicula);      
    });
    return peliculas;
  

  }

} 
