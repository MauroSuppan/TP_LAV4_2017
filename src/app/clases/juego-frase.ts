import { Juego } from '../clases/juego'
export class JuegoFrase extends Juego{

    fraseUno=false;
    fraseDos= false;
    fraseTres= false;
    fraseCuatro= false;
    fraseCinco= false;
    indiceFase: number;
    palabraIngresada:string="";
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Complete la frase",gano,jugador);
    }
     

    public generarr() {
        
        
        this.indiceFase =Math.floor((Math.random() * 5) + 0);
        console.log(this.indiceFase);

      switch(this.indiceFase)
      {
          case 0:
               this.fraseUno=true;
               break;
               case 1:
               this.fraseDos=true;
               break;
               case 2:
               this.fraseTres=true;
               break;
               case 3:
               this.fraseCuatro=true;
               break;
               case 4:
               this.fraseCinco=true;
               break;
      }
      }

      public verificar() {

        switch (this.indiceFase)
        {
            case 0:
            if(this.palabraIngresada.toLowerCase() == "deseo")
                {
                this.gano =true;
                }
                else
                {
                    this.gano =false;
                }
                break;
                case 1:
                if(this.palabraIngresada.toLowerCase() == "nivel")
                    {
                    this.gano =true;
                    }
                    else
                    {
                        this.gano =false;
                    }
                    break;
                    case 2:
                    if(this.palabraIngresada.toLowerCase() == "amigos")
                        {
                        this.gano =true;
                        }
                        else
                        {
                            this.gano =false;
                        }
                        break;
                        case 3:
                        if(this.palabraIngresada.toLowerCase() == "diego")
                            {
                            this.gano =true;
                            }
                            else
                            {
                                this.gano =false;
                            }
                            break;
                            case 4:
                    if(this.palabraIngresada.toLowerCase() == "viviendo")
                        {
                        this.gano =true;
                        }
                        else
                        {
                            this.gano =false;
                        }
                        break;
                
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
