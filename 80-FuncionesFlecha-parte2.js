//Ejemplo anterior:

const miFuncionFlecha1 = () => {
  console.log("saludos desde mi función flecha1");
};
miFuncionFlecha1();

//1. Ejemplo:
//no hay necesidad de abrir el cuerpo si entra en una sola línea de código

const miFuncionFlecha = () => console.log("saludos desde mi función flecha2");
miFuncionFlecha();

//2. Ejemplo:
//función que devuelve una cadena
const saludar1 = () => {
  return "Saludos desde función flecha3";
};
console.log(saludar1());

//3. Ejemplo:
// función que devuelve una cadena, en una sola linea de codigo, sin necesidad de abrir el cuerpo
const saludar2 = () => "Saludos desde función flecha4";
console.log(saludar2());

//4. Ejemplo:
//la función flecha tiene una forma especial para devolver un objeto de manera concisa:
//definimos variable  /fxflecha/ sin los parentesis js podría confundir el objeto con el inicio del cuerpo de la funcion.
const regresaObjeto = () => ({ nombre: "Juan", apellido: "Lara" });
console.log(regresaObjeto());

//5. Ejemplo:
//funcion con parámetros clasico
const funcionConParametrosClasico = function (mensaje) {
  console.log(mensaje);
};
funcionConParametrosClasico("saludos con parametros clasico");
//6. Ejemplo:
//funcion con parámetros
const funcionConParametros1 = (mensaje) => {
  console.log(mensaje);
};
funcionConParametros1("saludos con parametros");

//7. Ejemplo
//funcion con parámetros
const funcionConParametros2 = (mensaje) => console.log(mensaje);
funcionConParametros2("saludos con parametros con un parámetro");

//8.
const funcionConVariosParametrosSimple = (op1, op2) => op1 + op2;

console.log(funcionConVariosParametrosSimple(3, 5));

//9.
const funcionConVariosParametros = (op1, op2) => {
  let resultado = op1 + op2;
  return `Resultado: ${resultado}`;
};
console.log(funcionConVariosParametros(3, 5));
