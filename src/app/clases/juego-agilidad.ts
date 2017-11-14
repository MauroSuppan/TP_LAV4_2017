import { Juego } from '../clases/juego';

export class JuegoAgilidad extends Juego {

    numeroUno: number;
    operador: string;
    numeroDos: number;
    arrayOperadores : Array<string> = ["+","-","*","/"];
    numeroIngresado: number;
    resultadoBien:number
 
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Agilidad aritmética",gano,jugador);
    }
     
    public generar() {
          
          let indiceNumero;
          indiceNumero =Math.floor((Math.random() * 10) + 0);
        this.numeroUno = indiceNumero;
        indiceNumero =Math.floor((Math.random() * 10) + 0);
        this.numeroDos= indiceNumero;

        let indiceOper;
        indiceOper =Math.floor((Math.random() * 4) + 0);
        this.operador = this.arrayOperadores[indiceOper];

        switch(this.operador)
        {
            case "+":
                 this.resultadoBien = this.numeroUno + this.numeroDos;
                 break;
            case "-":
                 this.resultadoBien = this.numeroUno - this.numeroDos;
                 break;
            case "*":
                 this.resultadoBien = this.numeroUno * this.numeroDos;
                 break;
            case "/":
                  if(this.numeroDos == 0)
                  {
                    indiceNumero =Math.floor((Math.random() * 10) + 0);
                    this.numeroDos= indiceNumero;
                      this.resultadoBien = this.numeroUno / this.numeroDos;
                  }
                  else
                    {
                        this.resultadoBien = this.numeroUno / this.numeroDos;
                    }
                break;
        }
        }
  
        public verificar() {
          
        if(this.resultadoBien== this.numeroIngresado)
            {
                this.gano=true;
            }
            else{
                this.gano=false;
            }
          
          if (this.gano) {
            return true;
          } else {
            return false;
          }
       }
  
  
        public retornarAyuda() {
         /* if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
          }
          return "Te pasate";
          */
          return "algo" ;
        }
}
