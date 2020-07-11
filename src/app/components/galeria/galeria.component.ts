import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  @Input('peliculas') peliculashome;
  @Input('titulo') titulohome;

  constructor() { }

  ngOnInit() {
  }

}
