//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//de esta manera agregamos un atributo a todos los objetos de la clase Persona.
Persona.prototype.tel = '44332211';


let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
//esta nueva propiedad solo estará disponible para el objeto padre, no para el objeto madre
console.log(padre.tel)
console.log(padre)
padre.tel = '11223344';
console.log( padre.tel );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log(madre)
console.log(madre.tel)
madre.tel = '66889900';
console.log( madre.tel );

