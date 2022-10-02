
// FUNCION QUE CONVIERTA PULGADDAS EN CM

const convercion = (pulgadas) =>  pulgadas * 2.54

console.log(convercion(3.5))

// CONVERTIR STRING EN URL

const url = string => `https://www.${string}.com`

console.log(url("abel"));

// MISMA FRASE CON ADMIRACION

const admiracion = string => `asombroso ${string}!`

console.log(admiracion("abel"));

// CALCULAR EDAD DE LOS PERROS

const edadPerruna = numero => `La edad de tu perro es ${numero * 7}`

console.log(edadPerruna(2));


// VALOR DE TU HORA DE TRABAJO (MES DE TRABAJO 40HS)

const valorHoraTrabajo = sueldo => `El valor de tu hora de trabajo es ${sueldo / 40}`

console.log(valorHoraTrabajo(100000));

// IMC DE UNA PERSONA

const imc = (peso , altura) => `Tu imc es de: ${peso/(Math.pow(altura,2))}`

console.log(imc(83,198));


// TRANSFORMAR DE MINUSCULA A MAYUSCULA


const transformarMayuscula = (texto = " ") =>{
    return texto.toUpperCase();
}


console.log(transformarMayuscula("abel"));

// DEVUELVE EL TIPO DE VALOR DEL PARAMETRO

const tipoDeDato = dato => typeof(dato)


console.log(tipoDeDato("2"));


// CIRCUNFERENCIA DE UN CIRCULO PASANDOLE EL RADIO

const circunferenciaCirculo = radio => (2 * Math.PI) *radio

console.log(circunferenciaCirculo(9));