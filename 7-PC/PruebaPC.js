class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }
    get tipoEntrada(){
        return this._tipoEntrada
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }
}
class Raton extends DispositivoEntrada{
    static contadorRatones = 0

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones
    }
    static get contadorRatones(){
        return Raton.contadorRatones
    }
    toString(){
        return `{Ratón: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]}`
    }
}
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados
    }
    static get contadorTeclados(){
        return Teclado.contadorTeclados
    }
    toString(){
        return `{Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]}`
    }
}
class Monitor{
    static contadorMonitores = 0

    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores
        this._marca = marca
        this._tamano = tamano
    }
    static get contadorMonitores(){
        return Monitor.contadorMonitores
    }
    get idMonitor(){
        return this._idMonitor
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca
    }
    get tamano(){
        return this._tamano
    }
    set tamano(tamano){
        this._tamano = tamano
    }
    toString(){
        return `{Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamano: ${this._tamano}]}`
    }
}
class Computadora{
    static contadorComputadoras = 0

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras
        this._nombre = nombre
        this._monitor = monitor
        this._teclado = teclado
        this._raton = raton
    }
    static get contadorComputadoras(){
        return Computadora.contadorComputadoras
    }
    get idComputadora(){
        return this._idComputadora
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get monitor(){
        return this._monitor
    }
    set monitor(monitor){
        this._monitor = monitor
    }
    get teclado(){
        return this._teclado
    }
    set teclado(teclado){
        this._teclado = teclado
    }
    get raton(){
        return this._raton
    }
    set raton(raton){
        this._raton = raton
    }
    toString(){
        return `{Computadora: [idComputadora: ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}]}`
    }
}
class Orden{
    static contadorOrdenes = 0

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._computadoras = []
    }
    static get contadorOrdenes(){
        return Orden.contadorOrdenes
    }
    get idOrden(){
        return this._idOrden
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }
    mostrarOrden(){
        let computadoraOrden = ''
        for(let computadora of this._computadoras){
            computadoraOrden += `\n${computadora}`
        }
        return `{Orden: [idOrden: ${this._idOrden}, Computadoras:${computadoraOrden}]}`
    }
}

let raton1 = new Raton('USB', 'Dell')
let raton2 = new Raton('BT', 'HP')
console.log(raton1.toString())
console.log(raton2.toString())

let teclado1 = new Teclado('USB', 'Lenovo')
let teclado2 = new Teclado('BT', 'Sony')
console.log(teclado1.toString())
console.log(teclado2.toString())

let monitor1 = new Monitor('HP', '12"')
let monitor2 = new Monitor('Compaq', '16"')
console.log(monitor1.toString())
console.log(monitor2.toString())

let computadora1 = new Computadora('PC1', monitor1, teclado2, raton1)
let computadora2 = new Computadora('PC2', monitor2, teclado1, raton2)
let computadora3 = new Computadora('PC3', monitor2, teclado2, raton1)
console.log(computadora1.toString())
console.log(computadora2.toString())
console.log(computadora3.toString())

let orden1 = new Orden()
let orden2 = new Orden()
orden1.agregarComputadora(computadora2)
orden1.agregarComputadora(computadora1)
orden2.agregarComputadora(computadora1)
orden2.agregarComputadora(computadora3)

console.log(orden1.mostrarOrden())
console.log(orden2.mostrarOrden())
