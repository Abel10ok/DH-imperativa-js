// A PARTIR DEL ARREGLO NUMEROS NECESITO CREAR UN NUEVO
// ARREGLO CON TOD0S LOS ELEMENTOS DE MI ARREGLO ORGINAL
// PERO SUS NEGATIVOS

let numeros = [ 1, 5, 2, 12, 3] 

let arrNegativosMap = numeros.map( (elemento, indice) => `El elemento :${elemento % 2  ===0}, su indice ${indice}` )

console.log(arrNegativosMap)
