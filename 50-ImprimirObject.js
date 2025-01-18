let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

persona.tel = '55443322';
persona.tel = '44332211';

console.log( persona );

delete persona.tel;

console.log( persona );

//ESTAS FORMAS SON APTAS PARA UN NAVEGADOR WEB
//Concatenar cada valor de cada propiedad

console.log( persona.nombre + ', ' + persona.apellido);
console.log(persona.nombreCompleto())

//for in
for( nombrePropiedad in persona){
    console.log( persona[nombrePropiedad]);
}

//Object.values(objeto) -> devuelve un array con los valores del objeto
let personaArray = Object.values( persona );
console.log( personaArray );

//método JSON.stringify: convierte el objeto en una cadena.JSON utiliza la notacion: propiedad/valor
let personaString = JSON.stringify( persona );
console.log( personaString );