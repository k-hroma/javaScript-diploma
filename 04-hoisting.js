// Hoisting

// una buena práctica
var x; //1. declaramos la variable
x = 10; // 2. inicializamos la variable
console.log(x);

//pero El hoisting en JavaScript es un comportamiento en el que las declaraciones de variables, funciones y clases se mueven ("elevan") al principio de su contexto de ejecución antes de que se ejecute el código. Esto significa que puedes usar variables y funciones antes de declararlas en tu código, aunque la forma en que se manejan las declaraciones varía según el tipo de declaración.

//entonces se puede declarar luego de inicializar

x = 30; 
console.log(x);
var x;

// HOISTING SOLO APLICA CON VAR Y NO CON LET

//CON "use strict" al comienzo del script el hoisting tampoco aplicaría con var