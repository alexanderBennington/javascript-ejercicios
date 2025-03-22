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
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`
    }
}

let producto1 = new Producto('Esponja', 23.45)
console.log(producto1)
console.log(producto1.toString())
