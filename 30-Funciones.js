//Funcion: es un bloque de còdigo reutilizable, que realiza una tarea particular.
//Puede tener paràmetros de entrada y puede devolver un valor de salida (ambos son opcionales)

//Sintaxis:

//function<nombre_funcion>(parámetros=variables locales) {
//cuerpo de la funcion
//return es para devolver un valor(opcional)
//}

//Diferencia /E/ parámetros y argumentos

//1.Declaración: 
function imprimir(parametro){
console.log(parametro)
}

//2.Llamado funcion
imprimir(100)
imprimir("argumento")

//Diferencia /E/ procedimiento (no regresa ningun valor) y funcion (regresa un valor)

//1. Procedimiento
function imprimir(parametro){
console.log(parametro)
}
imprimir(100)
imprimir("argumento")

//2. Funcion
function sumar(a, b) {
let resultado = a + b
return resultado
}

let a = 2, b = 3, c;
c = sumar(a, b)
console.log(c)

//Tipos de funciones

//1. Funciones definidas por el usuario.

//2. Funciones Incorporadas (Built-in): utilizan clases, objetos y métodos.

