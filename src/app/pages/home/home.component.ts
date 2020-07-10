import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private route:Router, public peliculasService:PeliculasService ) {
      this.getPopulares();
   }

  ngOnInit() {
  }

  getPopulares(){
    this.peliculasService.getPopulares().subscribe( peliculas =>{
      console.log(peliculas);
    })
  };

}
