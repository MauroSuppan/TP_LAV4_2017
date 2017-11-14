import { Component, OnInit } from '@angular/core';
import { JuegoFrase } from '../../clases/juego-frase'

@Component({
  selector: 'app-complete-la-frase',
  templateUrl: './complete-la-frase.component.html',
  styleUrls: ['./complete-la-frase.component.css']
})
export class CompleteLaFraseComponent implements OnInit {

  nuevoJuego : JuegoFrase;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  Mensajes:string;

  resultados  : Array<JuegoFrase> = new Array<JuegoFrase>();
  

  constructor() {
    this.ocultarVerificar=true;
    this.Tiempo=10; 
   this.nuevoJuego = new JuegoFrase();
 
   if(localStorage.getItem("resultados")!=null)
     {
   this.resultados = JSON.parse(localStorage.getItem("resultados"));
     }
 }

  ngOnInit() {
  }


  NuevoJuego() {
    this.Tiempo=10;
    this.ocultarVerificar=false;
    this.nuevoJuego.generarr();
   this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=10;
      }
      }, 900);

  }

  verificar()
  {
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);

    if (this.nuevoJuego.verificar()){
      
      
      this.MostarMensaje("Sos un Genio!!!",true);


      this.resultados.push(new JuegoFrase(this.nuevoJuego.nombre,this.nuevoJuego.gano,this.nuevoJuego.jugador));
      console.log(this.resultados);
      localStorage.setItem("resultados",JSON.stringify(this.resultados));

     this.nuevoJuego.fraseUno=false;
     this.nuevoJuego.fraseDos= false;
     this.nuevoJuego.fraseTres= false;
     this.nuevoJuego.fraseCuatro=false;
     this.nuevoJuego.fraseCinco=false;
     this.nuevoJuego.palabraIngresada="";

    }else{

      this.resultados.push(new JuegoFrase(this.nuevoJuego.nombre,this.nuevoJuego.gano,this.nuevoJuego.jugador));
      console.log(this.resultados);
      localStorage.setItem("resultados",JSON.stringify(this.resultados));
      
      this.MostarMensaje("Perdiste!! inténtalo de nuevo ",false);
      this.nuevoJuego.fraseUno=false;
      this.nuevoJuego.fraseDos= false;
      this.nuevoJuego.fraseTres= false;
      this.nuevoJuego.fraseCuatro=false;
      this.nuevoJuego.fraseCinco=false;
      this.nuevoJuego.palabraIngresada="";
    }
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
