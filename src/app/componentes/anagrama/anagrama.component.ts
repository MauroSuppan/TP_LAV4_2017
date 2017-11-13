import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama'

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  nuevoJuego: JuegoAnagrama;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
 
  resultados  : Array<JuegoAnagrama> = new Array<JuegoAnagrama>();

  constructor() {
    this.nuevoJuego = new JuegoAnagrama();
    this.ocultarVerificar=true;

    if(localStorage.getItem("resultados")!=null)
      {
    this.resultados = JSON.parse(localStorage.getItem("resultados"));
      }

   }

   generarPalabra() {
    this.nuevoJuego.generarPalabra();
    this.contador=0;
    this.ocultarVerificar=false;
    this.nuevoJuego.gano=false;
  }

  verificar()
  {

    this.contador++;
    this.ocultarVerificar=true;
    
    //console.info("numero Secreto:",this.nuevoJuego.gano);  
    if (this.nuevoJuego.verificar()){
      
     // this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Sos un Genio!!!",true);
    
      this.resultados.push(new JuegoAnagrama(this.nuevoJuego.nombre,this.nuevoJuego.gano,this.nuevoJuego.jugador));
      console.log(this.resultados);
      localStorage.setItem("resultados",JSON.stringify(this.resultados));

    }else{
      this.resultados.push(new JuegoAnagrama(this.nuevoJuego.nombre,this.nuevoJuego.gano,this.nuevoJuego.jugador));  
      console.log(this.resultados);
      localStorage.setItem("resultados",JSON.stringify(this.resultados));
 

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, intento fallido, animo";
          break;
          case 2:
          mensaje="No,Te estaras Acercando???";
          break;
          case 3:
          mensaje="No es, Yo crei que la tercera era la vencida.";
          break;
          case 4:
          //mensaje="No era el  "+this.nuevoJuego.numeroIngresado;
          break;
          case 5:
          mensaje=" intentos y nada.";
          break;
          case 6:
          mensaje="Afortunado en el amor";
          break;
      
        default:
            mensaje="Ya le erraste "+ this.contador+" veces";
          break;
          
      }
      this.MostarMensaje("#"+this.contador+" "+mensaje+" ayuda :"+this.nuevoJuego.retornarAyuda());

   

    }
    console.info("numero Secreto:",this.nuevoJuego.gano);  

    
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
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }  



  ngOnInit() {
  }

}
