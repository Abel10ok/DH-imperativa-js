// ARREGLOS , LISTAS, COLECCIONES ETC
  let nombre = "abel"
  let edad = 25
  let mayotDeEdad = false

//   ARRAY

let numerosDeLaSuerte = [10, 15, 20, 6]

let nombresMascotas = ["jack", "lola", "rojo"]

console.log(nombresMascotas);

console.log(nombresMascotas[0]);

console.log(nombre[0]);

console.log(nombre.toUpperCase());

let nombreMayuscula = nombre.toUpperCase()

nombresMascotas.push("coco")

nombresMascotas.pop()
// elimina ultimo elemento de aray

console.log(nombresMascotas);

nombresMascotas.push("lolo", "rulo")

let eliminado = nombresMascotas.pop()

let numero2 = [1, 2, 3]

let inverso = []

inverso.push(numero2.pop())
inverso.push(numero2.pop())
inverso.push(numero2.pop())

// FOR Y ARRAYS

let numerosAleatorios = [5, 12, 3, 6, 11]

for(let i = 0; i<numerosAleatorios.length;i++){
  console.log(numerosAleatorios[i]);
}


let aleatorios = ["abel"]

const mayus = array => {

  let nombresMayus = []

  for(let i =0;i<array.length;i++){
    nombresMayus[i]=array[i].toUpperCase()
  }
return nombresMayus
}

let nombres = mayus(aleatorios)

console.log(nombres);

