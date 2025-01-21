//Función clásica // Casos de uso:

//1. Hoisiting: Las funciones clásicas son "elevadas" (hoisted) al inicio del contexto de ejecución, por lo que puedes llamarlas antes de declararlas.

//2. Funciones de propósito general: Si necesitas una función que pueda ser utilizada en cualquier parte del archivo sin preocuparte por el orden de declaración, esta es una buena opción.

//3. Contexto (this) dinámico: El valor de this en una función clásica se refiere al objeto que la invoca, lo que puede ser útil si necesitas cambiar dinámicamente el contexto de ejecución.

function miFuncionClasica() {
  console.log("saludos desde mi funcion clásica");
}
miFuncionClasica();

//Función asignada a una variable // Casos de uso:

// 1.Funciones anónimas o de expresión: Útil para asignar una función a una variable o pasarla como argumento a otras funciones.

// 2.Scope más controlado: Estas funciones no se elevan (hoisted) de la misma manera que las funciones clásicas, por lo que se utilizan cuando deseas un control más explícito sobre el alcance de la función.

// 3.Para funciones de callback: Son comunes en funciones de orden superior como setTimeout, map, filter, etc.

let miFuncionVariable = function () {
  console.log("saludos desde mi variable-funcion");
};
miFuncionVariable();

//Funcion flecha // Casos de uso:

//1. Sintaxis más concisa: Ideal para funciones de una sola línea o donde se busca claridad y brevedad.

//2. this léxico: La función flecha no tiene su propio this, sino que hereda el this del contexto en el que se define, lo que es útil para evitar errores en callbacks o métodos en clases.

//3. Callbacks y funciones de orden superior: Es frecuente en métodos como map, reduce, forEach, donde la función suele ser corta y sencilla.

//4. Evitar bind: En algunos casos donde this es necesario sin redefinirlo, las funciones flecha simplifican el código.

const miFuncionFlecha = () => {
  console.log("saludos desde mi función flecha");
};
miFuncionFlecha();

// Resumen:

//1. Función clásica: Para contexto más dinámico y uso general.
//2. Función asignada a una variable: Cuando necesitas funciones con mayor control de su alcance.
//3. Función flecha: Para un código más conciso y cuando deseas heredar el contexto de this
