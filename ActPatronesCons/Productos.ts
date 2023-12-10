//Esta sera nuestra clase base para los productos comestibles de la cual se va heredar en las clases
//Aperitivo y Bebida.
export abstract class ProductoComestible{

    constructor(public nombre:String){

    }
//Aqui vamos aplicar el polimorfismo ya que la clase ProductoComestible se va a heredar tanto 
//en la clase Aperitivo como en la clase Bebida y vamos asi poder usar metodo en formas diferentes
    abstract mostrarDetalle():void;
}