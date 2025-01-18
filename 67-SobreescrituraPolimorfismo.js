//Clase Object es la clase desde donde hereda la clase padre
//class Persona extends Object{}

//la clase Object contiene varios métodos, vamos a ver toString: permite mandar a imprimir el estado del objecto, es decir los valores actuales de los atributos del objeto.
//

//es buena práctica agregar el método toString en la definicion de las clases.

//como la clase Object es la clase padre de todas las clases, cualquier clase hereda los métodos y atributos de la clase Object.

//Prototype es uno de los atributos de la clase Object, y es un objeto que se utiliza para definir propiedades y métodos que serán compartidos por todas las instancias creadas por un constructor.
//Ademas prototype tiene varios métodos definidos que tmb podrán ser utilizados por las clases creadas. Uno de ellos es: Object.prototype.toString

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
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }
}

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
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );
console.log( persona1.nombreCompleto() )
console.log( persona1.toString() );
//POLIMORFISMO
let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.nombreCompleto() );
console.log( empleado1.toString());