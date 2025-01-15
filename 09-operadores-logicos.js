//Operadores lógicos (están las tablas)
let a = true
let b = false
console.log(a)
console.log(b)

//&& and (y): regresa true si ambos valores logicos son verdaderos
//si la expresion del lado derecho es falso no se evalua el resto
console.log(`${a && b}`)

//|| or (o) : regresa true si cualquiera de los operadores es true
console.log(`${a || b}`)

// ! not (no): invierte el resultado lógico
console.log(`${!a}`)