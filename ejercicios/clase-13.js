// Loop de pares
// Deberás crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de que el número de la iteración sumado con el número pasado por parámetro sea par, mostrará en la consola: “El número X es par”.


const loopDePares = n =>{


    for (let i = 0; i < 100; i++) {
        if((i+n)%2==0){
            console.log(`El numero es par ${i+n}`);
        }else{
            console.log(i);
        }
    }
}


// loopDePares(4)


// Loop de impares con palabra
// Deberás crear una función llamada loopDeImpares que reciba como parámetros un número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.



const loopDeImpares = (num,str) =>{


    for (let i = 0; i < 100; i++) {
        if((i+num)%2!==0){
            console.log(`El numero es impar ${str}`);
        }else{
            console.log(i);
        }

    }
}


// loopDeImpares(4,"messi")



// Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)

const sumatoria = num =>{

    let acc = 0

    for (let i = 1; i <= num; i++) {
        acc+=i
    }
    return acc
}

// let resultado3 = sumatoria(3)
// console.log(resultado3);



// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]



const nuevoArreglo = n =>{
    let arr = []

    for (let i = 1; i <= n; i++){
        arr.push(i)
    }

    return arr
}


// let resultado4 = nuevoArreglo(5)

// console.log(resultado4);



// Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]




const split = str =>{

    let n = []
    for (let i = 0; i < str.length; i++) {
        n.push(str.charAt(i))
    }
    return n
}

// let m = split("hola")
// let a = "hola"
// console.log(m)
// console.log(a.split(''));




// Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros 
//y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. 
//Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a


const arrayHandler = (array1, array2)=>{

    i=0;
    while(i<array1.length){
        console.log(`\n Yo soy ${i} y yo soy ${array2[i]}`);
        i++
    }

}

// arrayHandler([1,2,3,4], ["h","o","l","a"]) 




// Palíndromo
// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:


const palindromo = str =>{
    str = str.toLowerCase()
    nueva= ""
    for (let i = 0; i < str.length; i++) {  
        nueva += str[str.length -1 -i]
    }

    if(nueva === str){
        return true
    }else{
        return false
    }
}

console.log(palindromo("anilina")) //debe retornar true
console.log(palindromo("Ana")) //debe retornar true
console.log(palindromo("Enrique")) //debe retornar false



