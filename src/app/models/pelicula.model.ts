

export class PeliculaModel{

    id:string;
    titulo:string;
    sinopsis:string;
    poster_image:string;
    backdrop_image:string;
    popularidad:number;
    paraAdulto:boolean;

    constructor(){
        this.paraAdulto=false;

    }
}