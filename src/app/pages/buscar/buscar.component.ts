import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { PeliculaModel } from '../../models/pelicula.model';
import{ Router } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public imageurl: string ='http://image.tmdb.org/t/p/w500';

  public peliculas: any[] = [];

  constructor( public peliculasService:PeliculasService, router:Router ) { }

  ngOnInit() {
  }

  buscarPeliculas( buscar:string ){
      this.peliculasService.buscarPeliculas(buscar).subscribe( peliculaData=>{
      console.log(peliculaData); 
      this.peliculas= peliculaData;

      // peliculaData.forEach(data => {
      //     const pelicula:PeliculaModel=peliculaData[0];

      //     pelicula.id=       peliculaData[],
      //     pelicula.titulo=   peliculaData.title,
      //     pelicula.sinopsis=  peliculaData.overview,
      //     //pelicula.backdrop_image= peliculaData.

      //   this.peliculas.push(pelicula);
      // });
      
      // return  this.peliculas;     
      
    })
  }

}
