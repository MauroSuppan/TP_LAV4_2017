import { Juego } from '../clases/juego'
export class JuegoAnagrama extends Juego {

    
    palabraOrdenada="";
    palabraDesordenada="";
    palabraIngresada="";
    esperando=0;
    
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Anagrama",gano,jugador);
    }
     

//aca hacer el array con palabras

palabras : Array<any>=[
    {
        desordenada:"racngi",
        ordenada:"racing"
    },
    {
        desordenada:"rierv",
        ordenada:"river"
    },
    {
        desordenada:"cabo",
        ordenada:"boca"
    },
    {
        desordenada:"inpendediente",
        ordenada:"independiente"
    },
    {
        desordenada:"lorenzosan",
        ordenada:"san lorenzo"
    }
];

    public generarPalabra() {
      /*  this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
       console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
        */
        
        let indice;
        indice =Math.floor((Math.random() * 5) + 0);
        console.log(this.palabras[indice]["ordenada"]);
        this.palabraDesordenada=this.palabras[indice]["desordenada"];
        this.palabraOrdenada=this.palabras[indice]["ordenada"];

        this.esperando=1;
      }

      public verificar() {
        if (this.palabraIngresada == this.palabraOrdenada ) 
        {
          this.gano = true;
          this.palabraOrdenada="";
          this.palabraDesordenada="";
          this.palabraIngresada="";
          this.esperando=0;

          
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
