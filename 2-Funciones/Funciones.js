function saludo(mensaje){
    console.log(mensaje)
}
let mensaje = "Hola mundo"
saludo("Hola a todos")
saludo(mensaje)

function sumar(a, b){
    return a + b
}
console.log(sumar(5, 6))

let cadena = "Hola Mundo"
console.log(cadena.substring(1))
console.log(cadena.substring(1,6))

let a = '10', b = '20'
console.log(a + b)
let suma = parseInt(a) + parseInt(b)
console.log(suma)
console.log(suma.toString())

let negativo = -20
console.log(Math.abs(negativo))
let numero = 8.5
console.log(Math.round(numero))
console.log(Math.trunc(numero))
