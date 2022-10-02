// REDUCE 
//El método reduce()ejecuta una función reductora sobre cada elemento de una matriz, devolviendo como resultado un único valor.

let nums = [ 11, 15, 2, 65, 12 ]

let numsReducidos = nums.reduce( ( acc , elemento )=>{
    return acc * elemento
} , 1)

console.log(numsReducidos)