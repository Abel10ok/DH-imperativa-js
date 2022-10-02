let productos2 = [
    {
        nombre: "televisor",
        precio: 10,
        cantidad: 60
    },
    {
        nombre: "celular",
        precio: 5,
        cantidad: 40
    },
    {
        nombre: "zapatilla",
        precio: 12,
        cantidad: 50
    },
    {
        nombre: "televisor",
        precio: 14,
        cantidad: 4
    },
]

let arr = [ 1, 12, 2, 5, 3]
// arr.sort( (elemento, elementoSiguiente)=> elementoSiguiente - elemento )
arr.sort( (a, b)=> a - b )

productos2.sort( (a, b)=>{
    if( a.cantidad > b.cantidad){
        return -1
    }

    if(a.cantidad < b.cantidad){
       return  1
    }

    return 0

    // if( a.precio === b.precio){
    //     return 0
    // }    
    // return a.nombre >= b.nombre ? 1 : -1
} )

console.log(productos2)