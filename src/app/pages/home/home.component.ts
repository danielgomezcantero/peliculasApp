import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  popularesNinos:any;

  constructor( private route:Router, public peliculasService:PeliculasService ) {
      this.getPopulares();
      this.getCartelera();
      this.getPopularesNinos();
  }
 
  ngOnInit() {
  }

  getPopulares(){
    this.peliculasService.getPopulares().subscribe( peliculas =>{
      console.log('Populares');
      console.log(peliculas);
      this.populares=peliculas;
    })
  };

  getCartelera(){
    this.peliculasService.getCartelera().subscribe( peliculasC =>{
      console.log('Cartelera');
      console.log(peliculasC);
      this.cartelera=peliculasC;
    })
  };

  getPopularesNinos(){
    this.peliculasService.getPopularesNinos().subscribe( peliculasN =>{
        console.log('Populares Niños');
        console.log(peliculasN);
        this.popularesNinos= peliculasN;

    } )
  }

}

