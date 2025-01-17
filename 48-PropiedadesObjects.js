let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//formas de acceder al valor de la propiedad de un objeto
console.log(persona.nombre);
//parecido al array
console.log( persona['apellido'] );

//for in
for(nombrePropiedad in persona){
    console.log( nombrePropiedad );
    console.log( persona[nombrePropiedad]);
}