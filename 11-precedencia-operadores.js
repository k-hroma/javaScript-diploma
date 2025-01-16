/*
La precedencia de operadores en JavaScript se refiere al orden en el que se evalúan los operadores en una expresión. Cuando una expresión contiene múltiples operadores, la precedencia determina qué operación se realiza primero.

Tabla de precedencia de operadores (de mayor a menor):
Acceso a propiedades: . y []
Llamadas de función: ()
Operador de incremento/decremento: ++ y -- (postfijos)
Operadores unarios: +, -, !, ~, typeof, void, delete, ++ y -- (prefijos)
Exponentiación: **
Multiplicación, División, Resto: *, /, %
Suma, Resta: +, -
Desplazamientos: <<, >>, >>>
Relacionales: <, <=, >, >=, instanceof, in
Igualdad: ==, !=, ===, !==
Bit a bit AND: &
Bit a bit XOR: ^
Bit a bit OR: |
Lógicos AND: &&
Lógicos OR: ||
Nullish Coalescing: ??
Operador condicional (ternario): ? :
Asignación: =, +=, -=, *=, etc.
Coma: ,
*/

let result = 2 + 3 * 4; // Multiplicación tiene mayor precedencia que la suma
console.log(result); // Salida: 14
