import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';


@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  nuevoJuego: JuegoPiedraPapelTijera; 
  Mensajes:string;
  nuevo: number;
  ocultarVerificar:boolean;
  verificarr: number;
  

  resultados  : Array<JuegoPiedraPapelTijera> = new Array<JuegoPiedraPapelTijera>();

  constructor() { 
    this.nuevoJuego = new JuegoPiedraPapelTijera();
   this.verificarr=0;

    this.nuevo=0;

    if(localStorage.getItem("resultados")!=null)
      {
    this.resultados = JSON.parse(localStorage.getItem("resultados"));
      }
  }

  GenerarNuevo()
  {
    
    this.nuevoJuego.Generar();
   
    this.ocultarVerificar=false;
    this.nuevoJuego.gano=false;

    this.nuevo=1;
    this.verificarr=0;
  }

  ngOnInit() {
  }

  Verificar(opcionUsuario: string)
  {
    this.nuevoJuego.opcionUsuario=opcionUsuario;
    //this.contador++;
    this.verificarr=1;
    
    
    var aux=this;
    setTimeout(function(){
      aux.verificarr=0;
      
    if (aux.nuevoJuego.verificar()){
      
     // this.enviarJuego.emit(this.nuevoJuego);
     aux.MostarMensaje("Ganaste!!!",true);
    
     aux.resultados.push(new JuegoPiedraPapelTijera(aux.nuevoJuego.nombre,aux.nuevoJuego.gano,aux.nuevoJuego.jugador));
     // console.log(this.resultados);
      localStorage.setItem("resultados",JSON.stringify(aux.resultados));

    }else{
      aux.resultados.push(new JuegoPiedraPapelTijera(aux.nuevoJuego.nombre,aux.nuevoJuego.gano,aux.nuevoJuego.jugador));  
      //console.log(this.resultados);
      localStorage.setItem("resultados",JSON.stringify(aux.resultados));
 
      aux.MostarMensaje("Perdiste! La maquina eligio: "+aux.nuevoJuego.opcionMaquina,false);
      
  
    }
    aux.nuevo=0;
  },1500);
    
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





}
