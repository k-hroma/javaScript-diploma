//explicacion
// let miPromesaClasica = new Promise(function (resolver, rechazar) {
//   let expresion = true;
//   if (expresion) {
//     resolver("Resolvió correcto");
//   } else {
//     rechazar("Se produjo un error");
//   }
// });

let miPromesa = new Promise((resolver, rechazar) => {
  let expresion = true;
  if (expresion) resolver("Resolvió correcto");
  else rechazar("Se produjo un error");
});

//Primera forma: .then con dos argumentos (dos funciones flecha)
miPromesa.then(
  (valor) => console.log(valor), // función que se ejecutará si la promesa se resuelve correctamente. Imprime el valor resuelto.
  (error) => console.log(error) // función que se ejecutará si la promesa se rechaza. Imprime el error.
);

//Segunda forma: .then seguido de .catch
miPromesa
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));

//El manejo del éxito y el error se separan en dos métodos diferentes: .then para éxito y .catch para errores.
//Esta forma es más común y preferida en muchos casos, ya que permite un manejo más limpio y separado de errores.

// ¿Qué es una Promesa?
// Una promesa en JavaScript es un objeto que representa la eventual terminación (o fallo) de una operación asincrónica. Tiene tres estados posibles:

// Pendiente (pending): Inicialmente, la promesa está en este estado.
// Resuelta (fulfilled): Cuando la operación se completa con éxito y se llama a resolver.
// Rechazada (rejected): Cuando la operación falla y se llama a rechazar.

// Análisis del Código:

// let miPromesa = new Promise((resolver, rechazar) => {
//   let expresion = true; // Esta es la condición.
//   if (expresion) resolver("Resolvió correcto"); // Si es true, llama a resolver.
//   else rechazar("Se produjo un error"); // Si es false, llama a rechazar.
// });
// Lo que sucede aquí:
// Definición de la promesa:

// new Promise((resolver, rechazar) => { ... }): Este es el constructor de la promesa, que toma una función como argumento. Esta función recibe dos parámetros: resolver y rechazar.
// Evaluación de expresion:

// expresion es true, así que el flujo entra en el bloque if.
// Se llama a resolver("Resolvió correcto"), lo que marca la promesa como resuelta y pasa el valor "Resolvió correcto" como el valor resuelto de la promesa.
// Si expresion fuera false:

// Entraría en el bloque else y se llamaría a rechazar("Se produjo un error"), marcando la promesa como rechazada con el mensaje "Se produjo un error".
// Manejo con .then:
// javascript
// Copiar
// Editar
// miPromesa.then(
//    (valor) => console.log(valor), // Maneja el éxito.
//    (error) => console.log(error) // Maneja el error.
// );
// Primer argumento de then: (valor) => console.log(valor)

// Si la promesa se resuelve (es decir, se llamó a resolver), esta función se ejecutará.
// El valor pasado a resolver ("Resolvió correcto") se pasa como argumento valor.
// Por lo tanto, console.log(valor) imprimirá "Resolvió correcto".
// Segundo argumento de then: (error) => console.log(error)

// Si la promesa se rechaza (es decir, se llamó a rechazar), esta función se ejecutará.
// El valor pasado a rechazar ("Se produjo un error") se pasa como argumento error.
// Por lo tanto, console.log(error) imprimiría "Se produjo un error" si la promesa hubiera sido rechazada.
// Resumen:
// resolver("Resolvió correcto") pasa "Resolvió correcto" al primer argumento de .then, que es manejado por la función (valor) => console.log(valor).
// rechazar("Se produjo un error") pasa "Se produjo un error" al segundo argumento de .then, que es manejado por la función (error) => console.log(error).
// Esto es lo que determina si se imprime "Resolvió correcto" o "Se produjo un error" dependiendo de si resolver o rechazar es llamado.

// Promesas y el Método .then
// Cuando creas una promesa con new Promise, el constructor de la promesa automáticamente maneja y almacena las funciones resolver y rechazar. Estas funciones están diseñadas para cambiar el estado de la promesa y manejar los valores que se pasan al resolver o rechazar.

// 1. Cuando llamas a resolver(valor):
// Internamente, esto cambia el estado de la promesa de pendiente a resuelta (fulfilled).
// El valor pasado a resolver (valor) es almacenado por la promesa.
// Cuando luego llamas a .then, el primer argumento de .then es una función que recibe ese valor resuelto.
// 2. Cuando llamas a rechazar(error):
// Esto cambia el estado de la promesa de pendiente a rechazada (rejected).
// El valor pasado a rechazar (error) es almacenado como la razón del rechazo.
// Cuando llamas a .then, el segundo argumento de .then (si se proporciona) o un .catch manejará ese error.
// Internamente:
// El constructor de Promise:

// javascript
// Copiar
// Editar
// function Promise(executor) {
//     let onFulfilled;  // Función para manejar la resolución
//     let onRejected;   // Función para manejar el rechazo

//     function resolver(value) {
//         onFulfilled(value); // Llama a la función de éxito con el valor resuelto
//     }

//     function rechazar(reason) {
//         onRejected(reason); // Llama a la función de error con el motivo del rechazo
//     }

//     executor(resolver, rechazar); // Ejecuta la función ejecutora con resolver y rechazar
// }
// El método .then:

// javascript
// Copiar
// Editar
// Promise.prototype.then = function(onFulfilled, onRejected) {
//     // Guarda las funciones proporcionadas para manejarlas después
//     this.onFulfilled = onFulfilled;
//     this.onRejected = onRejected;
// };
// Cuando se resuelve o rechaza la promesa, el valor o error se pasa automáticamente a las funciones onFulfilled o onRejected proporcionadas a través de .then.

// Resumen de la relación:
// resolver(valor): Cambia el estado de la promesa a resuelta y pasa valor a la primera función proporcionada en .then.
// rechazar(error): Cambia el estado de la promesa a rechazada y pasa error a la segunda función proporcionada en .then (o a .catch si está encadenado).
// Este mecanismo interno asegura que el valor resuelto o el error rechazado se manejen correctamente mediante las funciones proporcionadas en .then o .catch.
