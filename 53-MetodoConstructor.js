//si queremos reutilizar un objeto y sus atributos debemos crear un contructor.

//es una funcion y para llamarla se utiliza la palabra reservada New

//Funcion constructor de objetos de tipo Persona
//1. se define la funcion
//2. se agregan los parámetros, los atributos de la clase
//3.en el cuerpo se utiliza el operador this para indicar que se está trabajando con las propiedades del objeto que se está ejecutando.
function Persona(nombre, apellido, email) {
//definimos tres atributos para el objeto Persona
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

//Reutilizamos el código para crear distintos objetos
//1.Creamos el objeto padre del tipo persona
//-variable = new + objeto (parámetros)
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log( padre );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre );

padre.nombre = 'Carlos';

console.log( padre );
console.log(madre);
