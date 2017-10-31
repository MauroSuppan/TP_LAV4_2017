import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";

      localStorage.setItem("usuarioAdmin","admin");
      localStorage.setItem("claveAdmin","11");

      localStorage.setItem("usuarioJ1","j1");
      localStorage.setItem("claveJ1","44");

      localStorage.setItem("usuarioJ2","j2");
      localStorage.setItem("claveJ2","55");

      /*localStorage.setItem("usuarioNuevo","null");
      localStorage.setItem("claveNuevo","null");*/
  }

  ngOnInit() {
  }

  Entrar() {
    /*if (this.usuario === 'admin' && this.clave === 'admin') {
      this.router.navigate(['/Principal']);
      */

      if ( this.usuario==localStorage.getItem("usuarioAdmin") && this.clave ==localStorage.getItem("claveAdmin") || 
        this.usuario==localStorage.getItem("usuarioJ1") && this.clave ==localStorage.getItem("claveJ1") ||
      this.usuario==localStorage.getItem("usuarioJ2") && this.clave ==localStorage.getItem("claveJ2") ||
      localStorage.getItem("usuarioNuevo") != "null" && this.usuario==localStorage.getItem("usuarioNuevo") && this.clave ==localStorage.getItem("claveNuevo") 
      ) 
      {
        this.router.navigate(['/Principal']);
       }
    else
      {
        alert("Error de usuario y contraseña. Reingrese");
       this.clave='';
       this.usuario='';
       this.logeando=true;
       this.progreso=0;
       this.ProgresoDeAncho="0%";
      }
  }
  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }     
    });
    //this.logeando=true;
  }


  loguearseComoAdm()
  {this.usuario="admin";
  this.clave="11";

  }
  loguearseComoJ1()
  {
    this.usuario="j1";
    this.clave="44"; 
  }

  loguearseComoJ2()
  {
    this.usuario="j2";
    this.clave="55"; 
  }


}
