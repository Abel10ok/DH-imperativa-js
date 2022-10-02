// 1) Escribí un programa que le pida al usuario ingresar una frase y
// la imprima en la consola.

const prompt = require('prompt-sync')( {sigint: true} )

// let frase = prompt('Ingresar una frase: ')

const imprimirFrase = string => console.log(string);;

// imprimirFrase(frase)


// 2) Escribí un programa que le pregunte al usuario su nombre e
// imprima "Hola " seguido del nombre y un signo de exclamación.

// let nombreUsuario = prompt ("ingrese su nombre: ")

const imprimirFrase2 = string => console.log( `Hola ${string} !`)

// imprimirFrase2(nombreUsuario)

// 3) Escribí un programa que le pida al usuario ingresar un número,
// luego le pida un segundo número, e imprima en la consola la
// suma de los dos números que ingresó el usuario.



const sumaNumeros = (num1, num2) => num1+num2

let resultado = sumaNumeros(5, 5)

// console.log(resultado);



// 4) Escribí un programa que le pida al usuario su año de
// nacimiento e imprima su edad actual en la consola con la frase
// "Tienes X años" (siendo X la cantidad de años).
// Por ejemplo, asumiendo que el año actual es 2019 y el usuario


const edadActual = fecha =>{
    añoActual = 2020
    console.log(`Tiene ${añoActual-fecha} años`)
}


// edadActual(1997)



// 5) Escribí un programa que piense un número de forma aleatoria
// del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
// número es correcto debe imprimir en la consola "Felicitaciones,
// ese era!", de lo contrario, debe imprimir "Lo siento, intenta
// nuevamente!"


const adivinar = numero => numero === Math.floor (Math.random()*2+1)?console.log("Felicidades"): console.log("Lo siento");
// adivinar(2)

// 6) Escribí un programa que imprima los números pares del 0 al
// 100.

const numerosPares= () =>{
    for (let i = 0; i < 100 ; i++){
        if(i%2===0){
            console.log(i);
        }
    }
}

// numerosPares();



// 7) Escribí un programa que itere sobre el arreglo nombres e
// imprima cada uno en la consola: const nombres = ["Pedro",
// "Pablo", "Maria", "Juan", "Diana"];


let nombre = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];

const imprimir= (array) =>{
    for (let i = 0; i < array.length ; i++){
        console.log(array[i]);
    }
}

// imprimir(nombre)


// 8) Construí un pseudocódigo que permita ingresar un número, si
// el número es mayor de 500, se debe calcular y mostrar en
// pantalla el 18% de este.


const porcentaje = num => console.log(num - num * 1.18);
// console.log(500 - 500*1.20);


porcentaje(500)

// 9) Escribí una función llamada elemento que recibe un arreglo
// como parámetro. La función debe devolver el valor que se
// encuentra en la tercera posición. Si el arreglo no tiene al menos
// 3 elementos deberá retornar -1.

let num = [1,2,3];


const elemento = array => array.length<3?-1:array[2];

let n = elemento(num)

console.log(n);

// 10) Se ingresa por teclado un número natural de hasta 2 cifras, si
// tiene una cifra que muestre lo mínimo que le falta para ser un
// número de 2 cifras; de lo contrario, que muestre lo mínimo que
// le falta para ser un número de 3 cifras. Considerar que el
// usuario ingresa números de hasta dos cifras.


const cantidadCifras = num =>{
    for(let i=0;i<=100;i++){
        if(num+i===10){
            return console.log(`Te faltan ${i} numeros para tener dos cifras`);
        }else if (num+i===100){
            return console.log(`Te faltan ${i} numeros para tener tres cifras`);
        }
    }
}


// cantidadCifras(1)

// 11) Hacer un algoritmo que muestre el promedio de varias
// notas o de N notas ingresadas, se debe definir el valor de N
// para conocer la cantidad de notas a ingresar.

const promedioNotas = num =>{

    let sumaNotas =0

    for(let i =0; i< num;i++){
        sumaNotas+= parseInt(prompt("ingrese notas"))
    }

    return sumaNotas/num
}

// let resultado3 = promedioNotas(3)

// console.log(resultado3);

// 12) Hacer un programa que calcule la suma de los N primeros
// números naturales, dónde N es el número límite ingresado por
// teclado.


const sumaNumerosN = num =>{

    let acc = 0

    for(let i =0; i<=num;i++){
        acc+=i
    }
    return acc
}

let r = sumaNumerosN(10)

console.log(r);