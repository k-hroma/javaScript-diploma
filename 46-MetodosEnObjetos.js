let x = 10;
console.log(x.length);

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    //agregamos un método
    nombreCompleto: function () {
        //this apunta al objeto que se está ejecutando(es como el self en python)
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());
console.log(persona);