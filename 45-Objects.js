//tipo primitivo no contiene propiedades o métodos 
//ejemplo:
let x = 10;
console.log(x.length);

//un objeto puede contener propiedades(atributos) o métodos
//ejemplo:
//el objeto perona tiene las propiedades:nombre, apellido, etc. cada propiedad tiene valores.
//la variable persona almacena la referencia en memoria con todas esas propiedades.

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
}

//podemos acceder a los atributos y a sus valores a través del "."

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);

console.log(persona);