//Método Set

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    //creamos una funcion para recuperar el valor de la propiedad idioma y usamos el método toUpperCase para convertir a mayus
    get lang(){
        return this.idioma.toUpperCase();
    },
    //set modifica los valores de los atributos
    //le pasamos un parámetro y ese parámttro lo convertimos
    set lang( parametro ){
        this.idioma = parametro.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

//imprimimos 
console.log( persona.lang );

persona.lang = 'en';//se llama metodo set lang

console.log( persona.lang );//se llama metodo get lang
console.log( persona.idioma );//acá vemos que realmente se almaceno en mayúsculas el nuevo valor a la propiedad idioma.