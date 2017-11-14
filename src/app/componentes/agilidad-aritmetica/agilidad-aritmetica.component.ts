import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
   @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  Mensajes:string;

  resultados  : Array<JuegoAgilidad> = new Array<JuegoAgilidad>();
  
  private subscription: Subscription;
  ngOnInit() {
  }
   constructor() {
     this.ocultarVerificar=true;
     this.Tiempo=8; 
    this.nuevoJuego = new JuegoAgilidad();
    console.info("Inicio agilidad");  
    if(localStorage.getItem("resultados")!=null)
      {
    this.resultados = JSON.parse(localStorage.getItem("resultados"));
      }
  }
  NuevoJuego() {
    this.Tiempo=8;
    this.ocultarVerificar=false;
    this.nuevoJuego.generar();
   this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=8;
      }
      }, 900);

  }
  verificar()
  {
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);

    if (this.nuevoJuego.verificar()){
      
      
      this.MostarMensaje("Sos un Genio!!!",true);


      this.resultados.push(new JuegoAgilidad(this.nuevoJuego.nombre,this.nuevoJuego.gano,this.nuevoJuego.jugador));
      console.log(this.resultados);
      localStorage.setItem("resultados",JSON.stringify(this.resultados));

    }else{

      this.resultados.push(new JuegoAgilidad(this.nuevoJuego.nombre,this.nuevoJuego.gano,this.nuevoJuego.jugador));
      console.log(this.resultados);
      localStorage.setItem("resultados",JSON.stringify(this.resultados));
      
      this.MostarMensaje("Perdiste!!! El resultado era: "+this.nuevoJuego.resultadoBien,false);

    }
    
    //this.Tiempo = 8;
    this.nuevoJuego.numeroDos=0;
    this.nuevoJuego.numeroUno=0;
    this.nuevoJuego.numeroIngresado=0;
    this.nuevoJuego.operador="";
  }  

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar= true;
     }, 3000);
    console.info("objeto",x);
  
   }


}
