import { Juego } from '../clases/juego'
export class JuegoPiedraPapelTijera extends Juego{

    opcionMaquina : string;
    opcionUsuario: string;

    esperando=0;
    
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Piedra, papel o tijera",gano,jugador);
    }
     

    Generar()
    {
        let indice = Math.floor((Math.random() * 3) + 0);
    

        switch (indice)
        {
            case 0:
            this.opcionMaquina="piedra";
            break;
            case 1:
            this.opcionMaquina="papel";
            break;
            case 2:
            this.opcionMaquina="tijera";
            break;
        }

        this.esperando=1;
        console.log(this.opcionMaquina);

    }

    verificar()
    {
        
     switch(this.opcionMaquina)
        {
        case "piedra":
    if(this.opcionUsuario == "papel")
         {
             this.gano = true;
         }
         else
         {
             this.gano = false;
         }
         break;
        case "papel":
     if(this.opcionUsuario == "tijera")
         {
            this.gano = true;
        }
        else
         {
            this.gano = false;
        }
         break;
        case "tijera":
    if(this.opcionUsuario == "piedra")
         {
         this.gano = true;
         }
        else
        {
            this.gano = false;
        }
        break;
        }
     
            if (this.gano) {
              return true;
            } else {
              return false;
            }
    }
}
