import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
 
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  constructor( private route:ActivatedRoute, private pelicula:PeliculasService ) { }

  ngOnInit() {
  

  const peliculaid = this.route.snapshot.paramMap.get('id');
  console.log(peliculaid);

}

}
