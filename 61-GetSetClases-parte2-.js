//Métodos get y set para los atributos de las clases
//Como el método get no puede llamarse igual que la propiedad,
//suele utilizarse un guión bajo en las propiedades.
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }
//método get
    get nombre(){
        return this._nombre;
    }
//método set
    set nombre(nombre){
        this._nombre = nombre;
    }

//método get
get apellido(){
    return this._apellido;
}
//método set
set apellido(apellido){
    this._apellido = apellido;
}
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1.nombre, persona1.apellido );//get nombre
persona1.nombre = 'Juan Carlos';//set nombre('Juan Carlos')
persona1.apellido = "Ruiz"
console.log(persona1.nombre, persona1.apellido);//get nombre