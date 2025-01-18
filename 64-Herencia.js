//la clase hija hereda de la clase padre
//en este caso la clase empleado hereda los atributos de la clase Persona

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}

//La palabra reservada super, permite a la clase hija acceder a los métodos y atributos de la clase padre
class Empleado extends Persona{ 
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );//get nombre

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
console.log(empleado1.nombre);

//Pruebas mias
empleado1.nombre = "Candela"
console.log(empleado1)

Persona.prototype.edad = 48
console.log(persona1, empleado1)
Empleado.prototype.signo = "acuario"
console.log(persona1, empleado1)

let empleado2 = new Empleado("Jimena", "Gonzales", "Ingeniera")
console.log(empleado2)
empleado2.signo = "sagitario"
empleado2.edad = 67
console.log(empleado1)
console.log(empleado2)