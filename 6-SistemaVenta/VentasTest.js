class Producto{
    static contadorProductos = 0

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos
        this._nombre = nombre
        this._precio = precio
    }
    static get contadorProductos(){
        return Producto.contadorProductos
    }
    get idProducto(){
        return this._idProducto
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        this._precio = precio
    }
    toString(){
        return `{idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}}`
    }
}
class Orden{
    static contadorOrdenes = 0

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._productos = []
        this._contadorProductosAgregados = 0
    }
    static get contadorOrdenes(){
        return Orden.contadorOrdenes
    }
    static get MAX_PRODUCTOS(){
        return 5
    }
    get idOrden(){
        return this._idOrden
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto)
            //this._productos[this._contadorProductosAgregados++] = producto
        } else {
            console.error('No se pueden agregar mas productos')
        }
    }
    calcularTotal(){
        let totalVenta = 0
        for(let producto of this._productos){
            totalVenta += producto._precio
        }
        return totalVenta
    }
    mostrarOrden(){
        let productosOrden = ''
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' '
        }
        return `Orden: ${this._idOrden}, Total: ${this.calcularTotal()}, Productos: ${productosOrden}`
    }
}
let producto1 = new Producto('Esponja', 23.45)
let producto2 = new Producto('Cepillo', 36.76)
let producto3 = new Producto('Jabón', 15.34)
console.log(producto1)
console.log(producto1.toString())
let orden1 = new Orden()
orden1.agregarProducto(producto1)
orden1.agregarProducto(producto2)
console.log(orden1.mostrarOrden())
let orden2 = new Orden()
orden2.agregarProducto(producto3)
orden2.agregarProducto(producto2)
console.log(orden2.mostrarOrden())
