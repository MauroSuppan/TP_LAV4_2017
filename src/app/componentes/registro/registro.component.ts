import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:string;
  clave: string;
  
  constructor(private router: Router) { }
  Registrar()
  {
   
    localStorage.setItem("usuarioNuevo",this.usuario) ;
    localStorage.setItem("claveNuevo",this.clave) ;
    alert("se registro bien!!!");
    this.router.navigate(['/Login']);
  }
  ngOnInit() {
  }

}
