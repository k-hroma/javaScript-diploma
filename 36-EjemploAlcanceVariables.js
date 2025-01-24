// Alcance de Variables en JS

// variables locales y globales

// let variableGlobal = 5; //variable global, definida fuera de la funcion: programa principal
// var variableGlobal = 5;
// Modificar el valor
variableGlobal = 10;

// Definicion funcion
function miFuncion(variableLocal) {
  console.log(variableLocal);
  // Modificamos la variable global
  variableGlobal = 20;
  console.log(variableGlobal);

  // No podemos redefinir una variable global (let) con (var) si
  // let variableGlobal = 30;
  // variableGlobal = 30;
  // console.log(variableGlobal);
}

// Llamamos la funcion
miFuncion(variableGlobal);
