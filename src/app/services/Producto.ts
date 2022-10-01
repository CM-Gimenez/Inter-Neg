export class Productos {
  id!: number;
  nombre!: string;
  descripcion!: string;
  precio!: number;
  stock!: number;

  /**
   *
   */
  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    stock: number
  ) {
    id = this.id;
    nombre = this.nombre;
    descripcion = this.descripcion;
    precio = this.precio;
    stock = this.stock;
  }
}
