//Operadores de comparacion o relacionales

// == igual (solo compara valores y hace una conversion si es necesario)
// === igual(tipo y dato)
// != distinto
// !=== distinto (tipo y dato)
// > mayor
// >= mayor o igual
// <  menor
// <= menor o igual

// Ejemplos
let a = 5;
let b = "5"
console.log(a);
console.log(b);

// == igual (solo compara valores y hace una conversion si es necesario)
console.log("a == b ->", a == b)

// === igual(tipo y dato: extricto)
console.log("a === b ->", a === b)

//String interp olation
console.log(`${a} === ${b} -> ${ a === b}`)

// != distinto
console.log(`${a} != ${b} -> ${a != b}`)
// !=== distinto (tipo y dato)
console.log(`${a} !== ${b} -> ${a !== b}`)