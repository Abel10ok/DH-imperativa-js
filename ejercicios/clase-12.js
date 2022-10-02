
let alicia = [ 10, 80, 75 ];
let bob = [ 90, 80, 100];
let nombreGanador = "";
let participanteUno = "Alicia";
let participanteDos = "Bob";

let concurso = {
    etapas: [],
    ganador: nombreGanador,
    encontrarGanador: function (primerParticipante,segundoParticipante, nombre1, nombre2){
        let puntosPrimerParticipante = 0;
        let puntosSegundoParticipante = 0;
        let ganadorEtapa = "";
        let concursoGanador;

        for (let i = 0; i < primerParticipante.length; i++) {
         
            if(primerParticipante[i] < segundoParticipante[i]){

                puntosSegundoParticipante++;

            }else if(primerParticipante[i] > segundoParticipante[i]){

                puntosPrimerParticipante++;

            }else{
                console.log("Ninguna persona recibe puntos")
            }

            if(puntosPrimerParticipante < puntosSegundoParticipante){
                ganadorEtapa = nombre2;
            }else{
                ganadorEtapa = nombre1;
            }

            concursoGanador = {
                nombre : ganadorEtapa, 
                numeroEtapa : i
            };
            this.etapas.push(concursoGanador)

        }

        if(puntosPrimerParticipante>puntosSegundoParticipante){
            this.ganador = nombre1
        }else if(puntosPrimerParticipante<puntosSegundoParticipante){
            this.ganador = nombre2
        }else{
            this.ganador = "empate" 
        }

        return this.etapas;

    }
}

// console.log(concurso.encontrarGanador(alicia,bob,participanteUno,participanteDos));

// console.log(concurso.ganador);

// const Json = JSON.stringify(concurso.encontrarGanador(alicia,bob,participanteUno,participanteDos));
// console.log(Json)


// EXTRA 

// Creá la función digitalHouse() que recibirá 2 números como parámetros. La función
// deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los
// siguientes criterios:
// ● Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá
// mostrar el string “Digital” en lugar del número.
// ● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá
// mostrar el string “House” en su lugar del número.
// ● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string
// “Digital House” en lugar del número.


const digitalHouse = (a,b ) => {

    for (let i = 0; i <= 10; i++) {

        if(i%a==0 && i%b==0){
            console.log("Digital House");

        }else if(i%a==0){
            console.log("Digital");

        }else if(i%b==0){
            console.log("House");
        }
    }
}

// digitalHouse(2,5)





// Vamos a retomar el ejercicio sumArray() que hicimos en la clase de arrays, pero esta vez
// lo modificaremos para que pueda recibir un array de números de cualquier cantidad de
// elementos.
// Si no recordás el enunciado original: deberás crear una función sumaArray que acepte
// un arreglo de números y devuelva la suma de todos ellos.
// Ejemplo:


// ● sumArray([1,2,3]) // 6
// ● sumArray([10, 3, 10, 4]) // 27
// ● sumArray([-5,100]) // 95

const sumArray = array =>{

    acc = array[0]

    for (let i = 1; i < array.length; i++) {
        acc+=array[i]
    }

    return acc
}


// let resultado = sumArray([1,2,3]);

// console.log(resultado);



// Ya que estamos retocando funciones, hagamos lo propio con la función del ejercicio
// simulación join(). Deberás modificar la función join() de manera que pueda recibir un
// array de strings de cualquier cantidad de elementos.
// Importante: no podés usar el método Array.join() original.
// Por ejemplo:
// join(["h","o","l","a"]) debe retornar el string "hola".
// join(["c","h","a,"u"]) debe retornar el string "chau".



const join = array =>{

    let string = " "

    for (let i = 0; i < array.length; i++) {
        string+=array[i]
    }

    return string
}


let resultado2 = join(["h","o","l","a"])

console.log(resultado2);