import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms'

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

//Servicios
import { PeliculasService } from './services/peliculas.service';

//Pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/galeria/galeria.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,   
    BuscarComponent,
    PeliculaComponent,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
