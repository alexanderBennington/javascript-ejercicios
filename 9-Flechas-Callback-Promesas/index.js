function miFuncion(){
    console.log("Saludos desde mi función") 
}
miFuncion()

let miFuncionFlecha = () => {
    console.log("Saludos desde mi función flecha") 
}
miFuncionFlecha()

const miFuncionFlechaConst = () => {
    console.log("Saludos desde mi función flecha constante") 
}
miFuncionFlechaConst()

const funcionConParametros = (n1,n2, n3) => {
    return n1 + n2 + n3
}
console.log(funcionConParametros(2,3,4))

function imprimir(mensaje){
    console.log(mensaje)
}
function suma(n1, n2, funcionCallback){
    let resultado = n1 + n2
    funcionCallback(`Resultado: ${resultado}`)
}
suma(5, 6, imprimir)

function miFuncionCallback(){
    console.log("Saludo asincrono despues de 3s")
}
//setTimeout(miFuncionCallback, 3000)
/*
let timeout = 4000
setTimeout(() => {
    console.log("Despues de 4s")
}, timeout);
setTimeout(() => console.log("Despues de 5s"), 5000)*/

let reloj = () => {
    let fecha = new Date()
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}
//console.log(reloj())
//setInterval(reloj, 1000)

let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = false
    if(expresion)
        resolver('Resolvio correcto')
    else
        rechazar('Se produjo un error')
})
//miPromesa.then(valor => console.log(valor), error => console.log(error))
miPromesa.then(valor => console.log(valor)).catch(error => console.log(error))

let promesa = new Promise((resolver1) => {
    console.log('Inicio Promesa')
    //setTimeout(() => resolver1('Promesa con timeout'), 3000)
    console.log('Fin Promesa')
})
promesa.then(valor => console.log(valor))

async function miFuncionAsync(){
    return `Saludos con promesa y async`
}
miFuncionAsync().then(valor => console.log(valor))

const esperar = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Esperé 2 segundos"), 2000);
    });
};
const ejecutar = async () => {
    console.log("Antes de esperar...");
    let resultado = await esperar();
    console.log(resultado); // "Esperé 2 segundos"
    console.log("Después de esperar...");
};
ejecutar();
const ejecutarSeguro = async () => {
    try {
        let resultado = await esperar();
        console.log(resultado);
    } catch (error) {
        console.log("Error:", error);
    }
};
ejecutarSeguro()
