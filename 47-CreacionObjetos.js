let x = 10;
console.log(x.length);

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());

console.log(persona);

//otra forma para crear objetos
let persona2 = new Object();
//agregamos atributos al objeto que estaba vacío
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '55443322';

console.log(persona2.tel);
console.log(persona2)

//Pruebas mias
for (nombrePropiedad in persona) { 
    console.log(persona[nombrePropiedad])
}

for (nombrePropiedad in persona2) { 
    console.log(persona2[nombrePropiedad])
}

let persona2Array = Object.values(persona2);
console.log(persona2Array)

let personaString = JSON.stringify( persona );
console.log(personaString);

let persona2String = JSON.stringify( persona2 );
console.log( persona2String );