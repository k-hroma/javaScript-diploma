"use strict";
//Ejemplo:
// validar si la variable es un tipo numérico y si es positivo o negativo

let resultado = "hola";

try {
  //x = 10
  // la clausula "throw": arroja nuestros propios errores/excepción
  if (isNaN(resultado))
    throw "No es un número"; //si no es un número, se arroja la excepcion: "el mensaje no es un número"
  else if (resultado === "") throw "Es cadena vacía";
  else if (resultado >= 0) throw "Valor positivo";
  else if (resultado < 0) throw "Valor negativo";
} catch (error) {
  //atrapa el error
  console.log(error); //imprime el error
  //si es una excepcion creada entonces no hay nombre y mensaje, solo se imprime el throw.
  //pero si es un error de java entinces si.
  console.log(error.name); //tipo de error
  console.log(error.message); // mensaje del error
} finally {
  console.log("Termina revisión de errores");
}
