// 1) Escribir un programa que muestre en pantalla los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
// “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
// por la palabra “fizzbuzz”. Visiten este sandbox
// el ejercicio ahí. Recuerden desplegar la consola para ver sus resultados, y
// utilicen la función console.log para mostrar datos en la misma.


const fizzBuzz =() =>{

    for (let i = 1; i <100; i++) {
        if(i%3==0 && i%5==0){
            console.log("fizzbuzz");
        }
        if(i%3==0){
            console.log("fizz");
        }
        else if(i%5==0){
            console.log("buzz");
        }
        console.log(i);
    }
}

//fizzBuzz()

// 2) Escriban una función que reciba dos parámetros: un array y un índice. La
// función deberá de mostrar por consola el valor del elemento según el
// índice dado. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6'. let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;
// Visiten este sandbox para escribir su código.

let arr = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

const  valorIndice= (array, indice)=>{

    for (let i = 0; i < array.length; i++) {
        if(i===indice){
            console.log(array[i]);
        }    
    }
}

//valorIndice(arr,1)


// 3) Escribir una función que, dado un número de mes, devuelva la cantidad
// de días de ese mes —suponiendo que no es un año bisiesto—.


const diasDelMes = mes =>{
    mes = mes-1
    let meses = [31,28,31,30,31,30,31,31,30,31,30,31]

    if(mes >=0 && mes <=12){
        console.log(meses[mes]);
    }

}


//diasDelMes(12)




// 4) Escribir una función de JavaScript que invierta un número. Por ejemplo,
// si x = 32443, la salida debería ser 34423.


const invertirNum = num =>{

    let nuevo = String(num);

    let resultado = " "

    for (let i = nuevo.length-1; i >= 0; i--) {
        resultado += nuevo[i]
    }
    return resultado
}

// let re = invertirNum(32443)

// console.log(re);


// 5) Escribir una función que reciba una array y solo imprima los valores que
// se repiten. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6,23,33,100'. let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];


let  r = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]

const imprimirRepetidos = array =>{

    let arr = []

    for (let i = 0; i < array.length; i++) {
        if(!arr.includes(array[i])){
            arr.push(array[i])
        }else{
            console.log(array[i]);
        }

    }

}

// imprimirRepetidos(r)



// Dado los siguientes numeros:


// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.


const numMasGrande =(num1,num2,num3)=>{
    if(num1>num2 && num3 < num2){
        console.log(num1);
      }else if(num3>num2){
        console.log(num3);
      }else{
        console.log(num2);
      }
}


// agrega una variable mas, llamada num4
// con un valor numerico

// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.


const numMasGrande2 =(num1,num2,num3,num4)=>{

    if(num1>num2 && num2 > num3 && num3<num4){
        console.log(num1);
      }else if(num2>num3){
        console.log(num2);
      }else if (num3>num4){
        console.log(num3);
      }else{
        console.log(num4)
      }

}

// numMasGrande2(5,6,13,14)


 /* Extra: que puedes hacer para identificar
 * el numero mayor de una lista de numeros,
 * como la siguiente? Utiliza Javascript.
 *
 * Tip: es valido buscar en google :)
 *
 * Adicional: al terminar tu algoritmo,
 * cambia los valores de la lista, bien sea
 * agregando o removiendo, y asegurate
 * que tu algoritmo funcione con cualquier lista
 * de numeros
 */

 let numeros = [5, 12, 2, 40, 33, 2, 8];



 const numMayorArray = array=>{

    let mayor = array[0]

    for (let i = 1; i < array.length; i++) {
        if(mayor < array[i]){
            mayor = array[i]
        }
    }
    return mayor
 }

 
let mayor = numMayorArray(numeros)

console.log(mayor);