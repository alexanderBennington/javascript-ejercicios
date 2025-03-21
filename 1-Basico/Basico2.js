let numero = 5

if(numero > 0){
    console.log(`El número ${numero} es mayor que 0`)
} else if (numero < 0){
    console.log(`El número ${numero} es menor que 0`)
} else{
    console.log(`El número ${numero} es igual 0`)
}
(numero > 0) ? console.log(`El número ${numero} es mayor que 0`) : console.log(null)

let dia = 2
switch(dia){
    case 1:
        console.log("Hoy es lunes")
        break;
    case 2:
        console.log("Hoy es martes")
        break;
    default:
        console.log("No existe por ahora ese dia")
        break;
}

let contador = 0
while(contador != 5){
    console.log(`Numero: ${contador++}`)
}

contador = 0
do{
    console.log(`Numero: ${contador++}`)
} while(contador != 5)

for(contador = 0; contador < 5; contador++){
    console.log(`Numero: ${contador}`)
}

let numerosArreglo = []
numerosArreglo[0] = 1
numerosArreglo[1] = 2
numerosArreglo[2] = "Hola"
numerosArreglo[5] = "Mundo"
for(let  i = 0; i < numerosArreglo.length; i++){
    console.log(`Numero[${i}]: ${numerosArreglo[i]}`)
}

let matriz = []
//let matriz = [[], []]
for(let i = 0; i < 2; i++){
    matriz[i] = []
    for(let j = 0; j < 3; j++){
        matriz[i][j] = i + j
    }
}
for(let i = 0; i < 2; i++){
    for(let j = 0; j < 3; j++){
        console.log(`Matriz[${i}][${j}]: ${matriz[i][j]}`)
    }
}
