let Persona = {
    nombre: 'Kevin',
    apellido: 'Sánchez',
    correo: 'kev@gmail.com',
    edad: 24,
    idioma: 'es',
    nombreCompleto: function (){
        return this.nombre + ' ' + this.apellido
    },
    get getNombreCompleto(){
        return this.nombre + ' ' + this.apellido
    },
    get lang(){
        return this.idioma.toUpperCase()
    },
    set lang(idioma){
        this.idioma = idioma.toUpperCase()
    }
}
console.log(Persona.nombre)
console.log(Persona['nombre'])
console.log(Persona.edad)
console.log(Persona)
console.log(Persona.nombreCompleto())

console.log(Persona.getNombreCompleto)
console.log(Persona.lang)
Persona.lang = 'en'
console.log(Persona.lang)

let persona2 = new Object()
persona2.nombre = "Carlos"
persona2.edad = 20
persona2.telefono = 5512345678
console.log(persona2)

for(nombrePropiedad in Persona){
    console.log(nombrePropiedad)
    console.log(Persona[nombrePropiedad])
}

let personaArray = Object.values(Persona)
console.log(personaArray)
personaArray = JSON.stringify(Persona)
console.log(personaArray)

Persona.telefono = '5512345678'
console.log(Persona)
delete Persona.telefono
console.log(Persona)

function Persona2 (nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.nombreCompleto = function (){
        return this.nombre + ' ' + this.apellido
    }
}
Persona2.prototype.telefono = '5512345678' //default para todos los objetos

let padre = new Persona2('Juan', 'Perez', 30)
padre.telefono = '5698765432'
console.log(padre)
console.log(padre.nombreCompleto())

let madre = new Persona2('Itzel', 'Torres', 21)
console.log(madre)
console.log(madre.nombreCompleto())

//Formas de crear objetos
let objeto1 = new Object()
let objeto2 = {}

let cadena = new String("Hola")
let cadena1= "Hola"

let numero = new Number(1)
let numero1 = 1

let booleano =  new Boolean(false)
let booleano1 = false

let arreglo = new Array()
let arreglo1 = []

let funcion = new Function()
let funcion1 = function(){}

let Estudiante1 = {
    nombre: 'Erick',
    apellido: 'Marquez',
    nombreCompleto: function(titulo, telefono){
        return titulo + ": " + this.nombre + ' ' + this.apellido + ' ' + telefono
    }
}
let Estudiante2 = {
    nombre: 'Jose',
    apellido: 'Perez',
}
console.log(Estudiante1.nombreCompleto())
console.log(Estudiante1.nombreCompleto('Lic', '21345678'))
console.log(Estudiante1.nombreCompleto.call(Estudiante2, 'Ing', '551234786'))

let arregloEstudiante = ['Doctor', '551234']
console.log(Estudiante1.nombreCompleto.apply(Estudiante2, arregloEstudiante))

