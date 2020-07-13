import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
 
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  peliculaId: number;

  constructor( private route:ActivatedRoute, public peliculaService:PeliculasService ) {

    route.params.subscribe(parametros=>{

      console.log(parametros);
      this.peliculaId = parametros['idPelicula'];
      this.getPelicula( this.peliculaId);
    })
   }  

  ngOnInit() {
  

  // const peliculaid = this.route.snapshot.paramMap.get('id');
  // console.log(peliculaid);

}

getPelicula( pelicula_Id :number ){
   this.peliculaService.getPelicula(pelicula_Id).subscribe( peliculaData=>{
     console.log(peliculaData)
     this.pelicula= peliculaData;
    });


}




}
