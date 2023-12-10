import { Cine } from "./cine";
import { Pelicula } from "./Peliculas";
import { Sala } from "./sala";
import { Aperitivo } from "./Aperitivo";
import { Bebida } from "./Bebida";
import { Cliente } from "./cliente";

  
  // Crear cine
  const cine = Cine.obtenerInstancia("Cinext");
  
  // Crear películas
  const Aladdin = new Pelicula("Aladdin");
  const Avengers = new Pelicula("Avengers");
  
  // Agregar películas al cine
  cine.agregarPelicula(Aladdin);
  cine.agregarPelicula(Avengers);
  
  // Crear salas
  const sala1 = new Sala(1, Aladdin, 100, [new Aperitivo("Canguil", "Dulce"), new Bebida("Batido", "Grande")]);
  const sala2 = new Sala(2, Avengers, 150, [new Aperitivo("Hot-dog", "Clásico"), new Bebida("Pulp", "Mediano")]);
  
  // Crear cliente
  const cliente1 = new Cliente("Cristopher", Aladdin, sala1, 10, [new Aperitivo("Galletas", "De vainilla")]);
  const cliente2 = new Cliente("Arturo", Avengers, sala2, 5, [new Bebida("Refresco", "Pequeño"), new Bebida("Cafe", "Pequeño")]);
  
  // Mostrar detalle del cliente
  cine.mostrarDetalleCliente(cliente1);
  console.log("-----------------------");
  cine.mostrarDetalleCliente(cliente2);