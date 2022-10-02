// FOREACH 

//El método forEach()ejecuta la función indicada una vez por cada elemento del arreglo.

let numeritos = [11, 12, 23, 44]

let productosModificados = []

productos2.forEach((elemento, idx) => {
    productosModificados.push({ ...elemento, algo: numeritos[idx] })
})

console.log(productosModificados)
console.log(productos2)