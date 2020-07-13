import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { PeliculaModel } from '../../models/pelicula.model';
import{ Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public imageurl: string ='http://image.tmdb.org/t/p/w500';

  public peliculas: any[] = [];

  buscar:string ="";

  constructor( public peliculasService:PeliculasService, private router:Router, route:ActivatedRoute ) {

    route.params.subscribe(parametros=> {
      
      console.log(parametros)
      if( parametros['textoenBuscar']){
        this.buscar = parametros['textoenBuscar'];
        this.buscarPeliculas();
      }
    } );
   }

  ngOnInit() {
  }

  buscarPeliculas( ){

    if (this.buscar.length===0 ){
      return
    }
    
      this.peliculasService.buscarPeliculas(this.buscar).subscribe( peliculaData=>{
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

  verPelicula( id:number){
    console.log('id');
    console.log(id);
    this.router.navigate(['pelicula', id,'buscar']);

  }

}
