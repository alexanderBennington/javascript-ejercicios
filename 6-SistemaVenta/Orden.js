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