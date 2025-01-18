//Método get

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    //el método get permite que la fx sea tratada como una propiedad
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

//por eso aquí no es necesario los paréntesis de la fx
console.log( persona.nombreCompleto );