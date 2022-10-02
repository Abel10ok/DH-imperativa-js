// ESTRUCTURAS DE CONTROL

// ELSE IF / TERNARIO / SWITCH


const probandoIf = (numero) =>{

    if(numero >= 50){

        return "el numero es mayor a 50"
    } else if (numero > 30){

        return "el numero es mayor que 30 pero menor que 50"
    }
    else{

        return " el numero no es maayor que 50 ni mayor que 30"
    }
}

let resultadoIf = probandoIf(18)

console.log(resultadoIf);


// TERNARIO SE UTILIZA MUCHO UTILIZAR SOLO SI ES UNA SOLA CONDICION
    // CONDICION / LO VERDADERO / LO FALSO

let clima = "lluvioso"

let mamaSalgaConParagua = clima === "lluvioso" ? " Si, llevalo " : "No, no hace falta "  

console.log(mamaSalgaConParagua);


const probarTernario = str =>{
    return str === "hola"? "se cumplio ternario" : "no se cumplio ternario"
}

console.log(probarTernario("hola"));


// SWITCH (CUANDO TENGO MAS DE 4 o 5 CAMINOS APROX)

const obtenerSonido = (animal)=>{

    switch(animal){

        case "perro":
            return "guau guau"
        case "loro":
            return "repiten todo"
        case "jurafa":
            return "jirafa"
        case "gato":
            return "miau"
        
        default:
            return "Lo siento no conosco el sonido de ese animal"
    }

}

// SI TENEMOS UN RETURN NO HACE FALTA UN BREAK YA QUE EL RETURN CORTA LA EJECUCION

let sonido = obtenerSonido("gato")

console.log(sonido);


// BREAK UTILIZANDO PARA MODIFICAR VALORES

const probandoSwitch = (auto)=>{

    let precio = 100

    switch(auto){

        case "ford":
            precio += 500
            break
        case "fiat":
            precio += 400
            break
        case "vw":
            precio += 1000
            break
    
        default:
            precio += 100
    }

    return precio

}


console.log(probandoSwitch("fiat"));