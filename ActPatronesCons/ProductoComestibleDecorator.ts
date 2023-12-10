// Clase base para los productos comestibles
class ProductoComestible {
    private nombre: string;
    private precio: number;
  
    constructor(nombre: string, precio: number) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    getNombre(): string {
      return this.nombre;
    }
  
    getPrecio(): number {
      return this.precio;
    }
  }
  
  // Clase abstracta para el Decorator
  abstract class ProductoComestibleDecorator extends ProductoComestible {
    protected producto: ProductoComestible;
  
    constructor(producto: ProductoComestible) {
      super("", 0);
      this.producto = producto;
    }
  
    abstract getNombre(): string;
    abstract getPrecio(): number;
  }
  
  // Decorador concreto que agrega funcionalidad al producto comestible
  class ConExtraQueso extends ProductoComestibleDecorator {
    constructor(producto: ProductoComestible) {
      super(producto);
    }
  
    getNombre(): string {
      return this.producto.getNombre() + " con extra queso";
    }
  
    getPrecio(): number {
      return this.producto.getPrecio() + 2; // Agrega $2 al precio por extra de queso
    }
  }
  
  // Uso del Decorator
  const productoBase = new ProductoComestible("Hot-dog", 5);
  console.log("Producto base:", productoBase.getNombre(), "Precio:", productoBase.getPrecio());
  
  const productoConExtraQueso = new ConExtraQueso(productoBase);
  console.log("Producto con extra queso:", productoConExtraQueso.getNombre(), "Precio:", productoConExtraQueso.getPrecio());
  