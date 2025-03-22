class Persona{
    static contadorPersonas = 0

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad
    }
    static get contadorPersonas(){
        return Persona.contadorPersonas
    }
    get idPersona(){
        return this._idPersona
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
    get edad(){
        return this._edad
    }
    set edad(edad){
        this._edad = edad
    }
    toString(){
        return 'Persona No.' + this._idPersona + ': ' + this._nombre + ' ' + this._apellido + ', ' + this._edad + ' años, '
    }
}
class Empleado extends Persona{
    static contadorEmpleados = 0

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._idEmpleado = ++Empleado.contadorEmpleados
        this._sueldo = sueldo
    }

    get idEmpleado(){
        return this._idEmpleado
    }
    get sueldo(){
        return this._sueldo
    }
    set sueldo(sueldo){
        this._sueldo = sueldo
    }
    toString(){
        return super.toString() + 'Empleado No. ' + this._idEmpleado + ', sueldo $' + this._sueldo
    }
}
class Cliente extends Persona{
    static contadorClientes = 0

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad)
        this._idCliente = ++Cliente.contadorClientes
        this._fechaRegistro = fechaRegistro
    }
    get idCliente(){
        return this._idCliente
    }
    get fechaRegistro(){
        return this._fechaRegistro
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro
    }
    toString(){
        return super.toString() + 'Cliente No. ' + this._idCliente + ', Registro:' + this._fechaRegistro
    }
}

let persona1 = new Persona('Kevin', 'Perez', 20)
console.log(persona1.toString())

let empleado1 = new Empleado('Alex', 'Sánchez', 30, '20,000.00')
let empleado2 = new Empleado('Brandon', 'Gonzalez', 25, '22,002.31')
console.log(empleado1.toString())
console.log(empleado2.toString())

let cliente1 = new Cliente('Jose', 'Bennington', 23, '20 abril 2012')
console.log(cliente1.toString())