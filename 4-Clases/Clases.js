class Persona{
    static contadorPersonas = 0

    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
        this._idPersona = ++Persona.contadorPersonas
    }

    static get contadorPersonas(){
        return Persona.contadorPersonas
    }
    get nombre(){
        return this._nombre
    } 
    set nombre(nombre){
        this._nombre = nombre
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido = apellido
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido
    }
    toString(){
        return this.nombreCompleto()
    }
    static saludar(){
        return 'Hola'
    }
    static saludar2(persona){
        console.log(persona._nombre + ' ' + persona._apellido)
    }
}

let persona1 = new Persona('Kevin', 'Sánchez')
console.log(persona1)
console.log(persona1.nombre)
persona1.nombre = 'Kevin Alexander'
console.log(persona1.nombre)


let persona2 = new Persona('Jose', 'Perez')
console.log(persona2)
console.log(persona2.nombre)

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this._departamento = departamento
    }
    
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento = departamento
    }
    nombreCompleto(){
        //return this._nombre + ' ' + this._apellido + ': ' + this._departamento
        return super.nombreCompleto() + ': ' + this._departamento
    }
}

let empleado1 = new Empleado('Jesus', 'Casillas', 'RRHH')
console.log(empleado1)

console.log(persona1.nombreCompleto())
console.log(persona1.toString())
console.log(empleado1.nombreCompleto())

console.log(empleado1.toString())
//console.log(empleado1.saludar())
console.log(Persona.saludar())
Persona.saludar2(empleado1)

console.log(Empleado.saludar())
Empleado.saludar2(persona1)

console.log(Persona.contadorPersonas)

console.log(persona1._idPersona)
console.log(persona2._idPersona)
console.log(empleado1._idPersona)



