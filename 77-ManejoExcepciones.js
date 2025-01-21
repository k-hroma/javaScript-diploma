//Manejo de errores | excepciones
"use strict";

// x = 10;
// console.log("continuamos")--> no se ejecuta porque ya hay un error en la linea anterior.

//Solución que permite continuar a pesar del error

try {
  //probamos iniciar la variable sin definirla
  x = 10;
} catch (error) {
  //catch, permite encerrar el error en un parámetro
  console.log(error); // mostramos el error
} finally {
  console.log("termina la revisión de errores");
}
console.log("continuamos...");

//
try {
  //probamos llamar una función sin declararla
  miFuncion();
} catch (error) {
  //catch, permite encerrar el error en un parámetro
  console.log(error); // mostramos el error
} finally {
  console.log("termina la revisión de errores");
}
console.log("continuamos...");

//
try {
  let x = 10;
} catch (error) {
  //catch, no se ejecuta porque no hay error
  console.log(error);
} finally {
  // pero finally siempre se ejecuta y es opcional agrgarlo al bloque try/catch
  console.log("termina la revisión de errores");
}
console.log("continuamos...");
