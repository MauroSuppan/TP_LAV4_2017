import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
   miServicioJuego:JuegoServiceService

   juego:string;
  constructor(servicioJuego:JuegoServiceService) { 
    this.miServicioJuego = servicioJuego;

    
  
//listado apra compartir tomado del local storage
    this.listadoParaCompartir=JSON.parse(localStorage.getItem("resultados"));
  }
  
  ngOnInit() {
    
  }

  llamaService(){
    console.log("llamaService");
    this.listadoParaCompartir= this.miServicioJuego.listar();
  }

  llamaServicePromesa(){
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
        this.listadoParaCompartir = listado;
    });
  }

  VerTodos()
  {
    this.listadoParaCompartir=JSON.parse(localStorage.getItem("resultados"));
  }

  Ganadores()
  {
    this.listadoParaCompartir=JSON.parse(localStorage.getItem("resultados"));
    this.listadoParaCompartir=this.listadoParaCompartir.filter(function(data)
    {
      //data tiene las propiedades de  listadoParaCompartir
      return data.gano ==true;
    });
  }

  Perdedores()
  {
    this.listadoParaCompartir=JSON.parse(localStorage.getItem("resultados"));
    this.listadoParaCompartir=this.listadoParaCompartir.filter(function(data)
    {
      return data.gano ==false;
    });
  }

  MostrarPorJuego(juego : string)
  {
    this.listadoParaCompartir=JSON.parse(localStorage.getItem("resultados"));
    this.listadoParaCompartir = this.listadoParaCompartir.filter(function(data)
          {
            return data.nombre == juego; 
          });
          this.juego="";
  }


}
