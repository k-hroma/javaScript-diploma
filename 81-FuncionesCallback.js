//Funciòn callback: es una función que se pasa como argumento a otra función y se ejecuta después de que la función a la que se pasa ha completado su tarea. Las callbacks son esenciales para manejar tareas asincrónicas, como llamadas a APIs, temporizadores, o eventos del DOM.

function miFuncion1() {
  console.log("función 1");
}

function miFuncion2() {
  console.log("función 2");
}
//llamada secuencial en funciones
//Proceso sincro: una fx no empieza hasta que la anterior termine
miFuncion2();
miFuncion1();

//Función de tipo callback permite el proceso asíncrono, es decir que dos funciones trabajen al mismp tiempo
function imprimir(mensaje) {
  console.log(mensaje);
}

function prueba(mensaje1, mensaje2) {
  console.log(mensaje1, mensaje2);
}

function sumar(funcionCallback, op1, op2) {
  let res = op1 + op2;
  let res2 = op1 * op2;
  funcionCallback(
    `Resultado suma: ${res}`,
    `Resultado multiplicacion: ${res2}`
  );
}

sumar(imprimir, 5, 3);
sumar(prueba, 3, 4);

// //Funcion de tipo callback como variable
// let imp = function imprimir(mensaje) {
//   console.log(mensaje);
// };

// function sumar(op1, op2, funcionCallbackImprimir) {
//   let res = op1 + op2;
//   funcionCallbackImprimir(`Resultado: ${res}`);
// }

// sumar(5, 3, imp);
