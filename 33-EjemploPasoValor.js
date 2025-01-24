// Paso Valor en JS
// Pasando informacion de tipo primitivo (number, bool, string)

function cambiarValor(parametro) {
  parametro = 20;
}

let argumento = 10;
cambiarValor(argumento);
console.log(argumento);

//la variable "parametro" no modifica la variable "argumento" porque la primera es local y la segunda global.

//no se pasa una referencia, solo se pasa un copia de la variable argumento.
