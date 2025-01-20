//como agregar una variable estatica de solo lectura, es decir que no pueda modificarse
//podemos hacerlo a través de un método get
//static contadorPersonas = 0; puede modificarse

class Persona {
  static contadorPersonas = 0; //atributo de nuestra clase

  //creamos un métdo estatico que solo permite leer el valor que devuelve el método:
  // en este caso MAX_OBJ devuelve el número de la cantidad máxima de objetos que pueden crearse = 5 (de la clase hija o padre)
  //es un método que simula una constante
  static get MAX_OBJ() {
    return 5;
  }
  //funciona como un atributo estático de clase, funciona como una constante pa la clase persona

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    //aquí definimos el máximo de los objetos permitidos
    if (Persona.contadorPersonas < Persona.MAX_OBJ) {
      this.idPersona = ++Persona.contadorPersonas;
    } else {
      console.log("Se han superado el máximo de objetos permitidos");
    }
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto() {
    return this.idPersona + " " + this._nombre + " " + this._apellido;
  }
  //Sobreescribiendo el metodo de la clase Padre (Object)
  toString() {
    //Se aplica poliformismo (multiples formas en tiempo de ejecucion)
    //el metodo que se ejecuta depende si es una referencia de tipo padre
    //o de tipo hijo
    return this.nombreCompleto();
  }
  static saludar() {
    console.log("saludos desde método static");
  }
  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); //llamar al constructor de la clase padre
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  //Sobreescritura
  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
  }
}

let persona1 = new Persona("Juan", "Perez");
console.log(persona1.toString());

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona("Karla", "Ramirez");
console.log(persona2.toString());
console.log(Persona.contadorPersonas);

//en este caso no escribimos los paréntesis porque eso tanto en el método get como set, para js sería redundante
console.log(Persona.MAX_OBJ);

//en este caso, como no se dinió un método set, el valor de 5 no va a verse modificado.
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

let persona3 = new Persona("Mariano", "Lara");
let persona4 = new Persona("Armando", "Toledo");
let persona5 = new Persona("Laura", "Quintero");
console.log(persona5.toString());
