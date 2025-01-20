//atributos estaticos

class Persona{

    //definimos una variable estatico, es decir que solo pertenece a la clase y no a los ojetos
    static contadorObjetosPersona = 0;

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        //en este caso se utiliza Persona y no this, porque this apunta a un objeto, y justamente static apunta a la clase y no al ibjeto
        Persona.contadorObjetosPersona++;
        //cada vez que se crea un objeto la variable contador se incrementa
        console.log( 'Se incrementa contador:' + Persona.contadorObjetosPersona);
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
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
let persona2 = new Persona()
let empleado2 = new Empleado()
//el resultado es undefine porque la variable solo se encuentra en la clase padre y no en los objetos de la clase porque es un atributo statica
console.log(persona1.contadorObjetosPersona);

//inicio la variable desde el objeto y le asigno un valor
console.log(persona1.contadorObjetosPersona = 410)
console.log(persona1)

//pero esta variable no seria posible de acceder desde otros objetos porque no es el atributo definido en la clase Padre:
console.log(empleado1.contadorObjetosPersona)

//tenemos que acceder a travez de la clase y no del objeto.
console.log(Persona.contadorObjetosPersona);
//las clases hijias heredan los atributos estaticos
console.log( Empleado.contadorObjetosPersona );