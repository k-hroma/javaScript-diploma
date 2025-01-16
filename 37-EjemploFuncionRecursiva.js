// Funciones recursivas

//Reglas
//1.Debe llamarse a si misma
//2.Debe avanzar hacia un caso base, de lo contrario caemos en ciclos infinitos

//Sintaxis
/*
mi_funcion(n)
    si n == 1:
    regresa n
    si n !=1
    mi_funcion(n-1)
*/


// Imprimir 3, 2, 1
//(el valor inicial es = 3, el valor final, es decir el caso base, es número = 1)
function funcionRecursiva(numero){
    // Caso Base 
    if(numero == 1)
        console.log(numero);
    else{
        console.log(numero);
        funcionRecursiva(numero - 1);
    }
}

// Llamamos la funcion recursiva
funcionRecursiva(3);