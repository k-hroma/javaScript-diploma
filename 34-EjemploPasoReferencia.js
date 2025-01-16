// Paso por referencia JS
// Objetos (array) se pasan por referencia

function cambiarValor(parametro){
    parametro[0] = 20; // intentamos modificar el valor del array
}

// Llamamos a la funcion
let arreglo = [10]; //asignamos un valor
console.log(`Antes funcion: ${arreglo[0]}`);
cambiarValor(arreglo);
console.log(`Despues funcion: ${arreglo[0]}`);

//en este caso se almacena una referencia y no un valor, es por eso que se puede modificar el valor. porque apunta a una referencia y no a un valor.