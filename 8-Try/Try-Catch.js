'use strict'

let y = 10

try {
    //x = 10
    mifuncion()
} catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
} finally {
    console.log('Terminamos la revisión')
}
console.log('Continuamos...')

let resultado = 'a'
try {
    if(isNaN(resultado)) throw 'No es numero'
    else if(resultado == '') throw 'Esta vacio'
} catch (error) {
    console.log(error)
}