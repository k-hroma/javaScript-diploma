//Una clase es una plantilla.
//Posee atributos y métodos
//Posee un nombre
//Un objeto es una instancia de una clase

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre; 
        this.apellido = apellido;
    }
}



let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);

let persona2 = new Persona('Carlos', 'Lara');
console.log( persona2 );


//pruebas mias
console.log(Persona)
Persona.prototype.cargo = 'ingeniero';

persona1.tele = "1234234"
console.log(persona1)
//

