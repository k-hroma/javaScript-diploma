class Persona{

    static contadorPersonas = 0;//atributo de nuestra clase

    constructor(nombre, apellido) {
        //atributos de los objetos que se crean
        this._nombre = nombre; 
        this._apellido = apellido;
        //creamos el atributo idPersona y le asignamos el valor de la variable static contadorPersona
        this.idPersona = ++Persona.contadorPersonas;
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
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica poliformismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar(){
        return 'saludos desde método static';
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
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
console.log( persona1.toString() );
console.log(persona1.nombreCompleto())

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1.toString() );
console.log(empleado1.nombreCompleto())

console.log(Persona.contadorPersonas);
console.log(Persona.nombreCompleto)

let persona2 = new Persona('Karla', 'Ramirez');
console.log( persona2.toString() );
console.log(Persona.contadorPersonas);

Persona.saludar();
console.log(Persona.saludar())
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);