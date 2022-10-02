// Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
// litrosConsumidos. A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones:

// ● Si el vehículo es “coche”, el precio por litro es de $86.
// ● Si es “moto”, ha de ser $70.
// ● Si es “autobús”, ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

const  totalAPagar =  (vehiculo, litrosConsumidos) =>{
    
    litrosFinales = litrosConsumidos<=25?50:25

    switch(vehiculo){
        case "coche":
            return `El precio final de litros es de: ${(litrosConsumidos*86)+litrosFinales}`
        case "moto":
            return `El precio final de litro es de: ${(litrosConsumidos*70)+litrosFinales}`
        case "autobus":
            return `El precio final de litro es de: ${(litrosConsumidos*55)+litrosFinales}`
        default:
            return "No es ningun vehiculo"
    }

}

console.log(totalAPagar("coche",100));


// Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
// eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
// el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
// vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
// que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.
// Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
// donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
// recibiremos los datos de la siguiente manera.
// Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base
// diferente por cada selección:
// ● Pollo = $150 (“pollo”)
// ● Carne = $200 (“carne”)
// ● Vegetariano (verduras asadas) = $100 (“veggie”)
// Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre
// otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
// deseado:
// ● Blanco c/orégano y parmesano = $50 (“blanco”)
// ● Negro c/avena = $60 (“negro”)
// ● Sin gluten = $75 (“s/gluten”)
// Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
// adicionales:
// ● Queso = $20
// ● Tomate = $15
// ● Lechuga = $10
// ● Cebolla = $15
// ● Mayonesa = $5
// ● Mostaza = $5
// Cada uno de estos adicionales están representados por booleanos —es decir, true o
// false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
// total de seis valores booleanos, uno por cada adicional—.
// Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
// para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
// función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
// tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
// Finalmente, deberá retornar el valor numérico del total a pagar del cliente.

// const prompt = require("prompt-sync")({sigint:true})

// tipoBase = prompt ("ingrese su base preferida entre: POLLO, CARNE, VEGGIE ")
// tipoPan = prompt ("ingrese su pan preferido entre: BLANCO, NEGRO, S/GLUTEN  ")

// let precio=0

// const queso = prompt("¿Desea agregar queso?: ") === "si"? precio+=20: precio+=0
// const tomate = prompt("¿Desea agregar tomate?: ") === "si"? precio+=15: precio+=0
// const lechuga = prompt("¿Desea agregar lechuga?: ") === "si"? precio+=10: precio+=0
// const cebolla = prompt("¿Desea agregar cebolla?: ") === "si"? precio+=15: precio+=0
// const mayonesa = prompt("¿Desea agregar mayonesa?: ") === "si"? precio+=5: precio+=0
// const mostaza = prompt("¿Desea agregar mostaza?: ") === "si"? precio+=5: precio+=0



// const localSandwich = (tipoBase, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) =>{

//     switch(tipoBase){
//         case "pollo":
//             precio+=150
//             break
//         case "carne":
//             precio+=200
//             break
//         case "beggie":
//             precio+=100
//             break
//         default:
//             precio +=0
//     }

        
//     switch(tipoPan){
//         case "blanco":
//             precio +=50
//             break
//         case "negro":
//             precio += 60
//             break
//         case "s/gluten":
//             precio += 75
//             break
//         default:
//             precio +=0
            
//     }

//     return precio

// }

// let resultado = localSandwich(tipoBase, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza)

// console.log(`Su total a pagar es: ${resultado}`);


// Creá una función que reciba un parámetro numérico y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
// retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
// mensaje de aliento junto con el número ingresado y el secreto.


const numeroSecreto = numeroX => numeroX === Math.floor (Math.random()*10+1)?"Felicidades": "La proxima"


console.log(numeroSecreto(2));


// abrirParacaidas()
// Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// ● La velocidad debe ser menor a 1000 km/h.
// ● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.

const abrirParacaidas = (velocida, altura) => velocida < 1000  &&   2000 >= altura < 3000?"abrir paracaidas":"no abrir"
    // if(velocida < 1000  &&   2000 >= altura < 3000){
//     return "abrir paracaidas"
// }
// return "no abrir"

console.log(abrirParacaidas(1000,2500));

// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.


let palabra = "perro"

const traductor = string =>{
    switch (string){
        case "perro":
            return "dog"
        case "gato":
            return "cat"
    }
}

console.log(traductor("gato"));



// Valoración de películas
// Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
// según la siguiente escala:
// ● Muy mala.
// ● Mala.
// ● Mediocre.
// ● Buena.
// ● Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
// por su valoración.
// Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".



const valoracionPeliculas =  valoracion =>{
    switch(valoracion){
        case "muy mala":
            return "Calificaste la pelicula como muy mala. Lo lamento mucho"
        case "mala":
            return "Calificaste la pelicula como mala. Lo lamento "
        case "mediocre":
            return "Calificaste la pelicula como mediocre. Espero que no suceda otra ves. "
        case "buena":
            return "Calificaste la pelicula como buena. Nos pon muy contento "
        case "muy buena":
            return "Calificaste la pelicula como muy buena. Genial nos alegramos "
        default:
            return "Ingresaste un valor invalido"
    }
}

console.log(valoracionPeliculas("mediocre"));