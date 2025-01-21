class Empleado {
  constructor(nombre, sueldo) {
    this.nombre = nombre;
    this.sueldo = sueldo;
  }

  obtenerDetalles() {
    return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }

  obtenerDetalles() {
    return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
  }
}

function imprimir(tipo) {
  console.log(tipo.obtenerDetalles());
  //prueba de instance of (en el proximo vemos con else if, solo permite un caso verdadero.)
  if (tipo instanceof Gerente) {
    console.log("es un obj. de tipo gerente");
  }
  if (tipo instanceof Empleado) {
    console.log("es un obj. de tipo empleado");
  }
  if (tipo instanceof Object) {
    console.log("es un obj. de tipo objeto");
  }
}

let empleado1 = new Empleado("Juan", 3000);
let gerente1 = new Gerente("Carlos", 5000, "Sistemas");

imprimir(empleado1);
imprimir(gerente1);
