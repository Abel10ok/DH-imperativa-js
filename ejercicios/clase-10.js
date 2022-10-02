// 1. Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de
// las películas una vez creada la estructura correspondiente.

let peliculas = ["star wars", "tototo", "rocky", "pulp fiction", "la vida es bella"]

// console.log(peliculas[0].toUpperCase());


// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
// en mayúsculas. Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.
// Pista: revisá qué hace el método de strings .toUpperCase().


const convertirMayuscula = array => {

    let n =[]
    for(let i=0; i< array.length;i++){
        n.push(array[i].toUpperCase());
    }
    return n
}

peliculas = convertirMayuscula(peliculas)
console.log(peliculas);


// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
// crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
// para poder agregar los elementos contenidos en el segundo array dentro del
// primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas.

let peliculas2 = ["toy story", "finding", "kung-fu", "wally", "fortnite"]



const intercalado = (array , array2) => {

    for(let i=0; i< array2.length;i++){
        array.push(array2[i]);
    }
}

intercalado(peliculas,peliculas2)

// console.log(peliculas);



// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
// array de películas animadas es un videojuego. Ahora tenés que editar el código y
// modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
// contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.



let eliminado = peliculas.pop()

console.log(eliminado);
// console.log(peliculas);

// EXTRA 

// 1. Creá la función imprimirInverso que tome un array como argumento y que
// imprima en la consola cada elemento en orden inverso (no tenés que invertir el
// array).


let n1= [1,2,3,4,5,6]
const imprimirInverso = array =>{

    for(let i = array.length-1; i>=0;i--){
        console.log(array[i]);
    }
}

// imprimirInverso(n1)

// 2. Creá la función inversor que tome un array como argumento y devuelva uno
// nuevo invertido.

const nuevoInverso = array =>{
    let n = []
    for(let i = array.length-1; i>=0;i--){
        n.push(array[i]);
    }
    return n
}

// m = nuevoInverso(n1)

// console.log(m);



// En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
// strings de 4 elementos y simule el comportamiento del método Array.join().
// Importante: no podés usar el método Array.join() original.
// Ejemplo:
// ● join(["h","o","l","a"]) debe retornar el string "hola".
// ● join(["c","h","a,"u"]) debe retornar el string "chau".


let arr = [ "h","o","l","a"]

const join = array =>{
    let s = " "
    for (let i = 0; i < array.length; i++) {
        s+=array[i]
    }
    return s
}

let m = join(arr)

console.log(m);


