// Ciclo for: especificamos cuantas veces queremos repetir su bloque de código

//Sintaxis:

//for(1.declaracion de variables -contador-; 2.condicion a evaluar; 4.incremento de contadores-para no caer en ciclos infinitos) {3.se ejecuta el bloque de código}
//1. se ejecuta una sola vez al inicio de la ejecucion del ciclo for
//2. se repite el ciclo mientras la condicion sea verdadera.
//3. se ejecuta el código
//4.se incrementan los contadores, es el último paso y se vuelve a iterar 2, 3, 4
//cuando la condición es falsa se detiene el ciclo.


// Imprimir los valor es del 0 al 5
let repeticiones = 5;
for(let contador = 0; contador <= repeticiones; contador++){
    console.log(contador);
}
