import { ProductoComestible } from "./Productos";
//Esta es la clase Aperitivo que esta heredando de la clase ProductoComestible 
export class Aperitivo extends ProductoComestible{

//en este constructor tenemos una propiedad que es Tipo 
//tambien utilizaremos super para poder llamar los atributos de la clase padre que en este caso solo tiene un atributo
    constructor(nombre:String, public tipo:String){
        super(nombre);
    }

//En este metodo vamos a mostrar por pantalla tanto tipo como el aperitivo que va a escoger el cliente
//Y lo mostrara por pantalla porque es un metodo de tipo void.
    mostrarDetalle(): void {
        console.log("Aperitivo", this.nombre);
        console.log("Tipo", this.tipo);
    }
}