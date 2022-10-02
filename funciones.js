// FUNCIONES 

    // DECLARADAS VS EXPRESADAS


    //DECLARADAS (TIENEN NOMBRE)

function sumar (num1, num2 ){
    
    return num1 + num2;

}

    // INVOCAR A LA FUNCION
let num1 = 10
let num2 = 20

let resultado = sumar(num1, num2)

console.log(resultado);
    // EXPRESADAS (COMUNES O ARRON FUNCTION) (ANONIMAS)


    // EXPRESADA COMUN
const restar = function(){
    
    console.log("Restando");

}

restar()


    // EXPRESADA  ARROUND FUNCTION


const multiplicar =  () => {
    
    console.log("Multiplicando");
    
}
    
multiplicar()

// SCOPE O ALCANSE
    // LET Y CONST TIENE UN SCOPE LOCAL

let nombre = "pepito"

console.log(nombre);

const restar2 = function(){
    let nombre = "abel"
    console.log(nombre);
    
    const sumar2 = ()=>{
        console.log(nombre);
    }
}


let numeroX = 12 
// PUEDO USAR UNA VARIABLE DE AFUERA ADENTRO DE UNA FUNCION
const sumar3 = (numero)=>{

    console.log(numero + numeroX);
}

sumar3(5)


const sumar4 = (a, b ) =>{

    return a+b

}

let resultadoSuma = sumar4(2, 5)

console.log(resultadoSuma);

// ARROW  SI TENGO UN SOLO PARAMETRO LE PUEDO QUITAR LOS PARENTESIS.
// SI TENOG UNA SOLA LINEA DE CODIGO LE PUEDO QUITAR LA LLAVE Y EL RETURN
