// FIND 
//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

let productos = [
    {
        nombre: "televisor",
        precio: 10,
        cantidad: 120
    },
    {
        nombre: "celular",
        precio: 5,
        cantidad: 40
    },
    {
        nombre: "zapatilla",
        precio: 12,
        cantidad: 150
    },
]

let productoSeleccionado = productos.find( (elemento)=> elemento.nombre === "celular" )

console.log( productoSeleccionado )