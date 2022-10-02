
// Extras:
// Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico

const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: true,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo"
    },  
    {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente"
    }
]


const generarID = array=>{

    for (let i = 0; i < array.length; i++) {
        array[i].generarID = i + 1   
    }
}


generarID(arrayCuentas)

// console.log(arrayCuentas);

// Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null

const buscarPorId = (array , id ) =>{

    for (let i = 0; i < array.length; i++) {
        if(array[i].generarID === id){
            return array[i]
        }
    }
    return null
}

// let resultado = buscarPorId(arrayCuentas,10)

// console.log( resultado);


// Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro


const filtrarPorSaldos = (array, num)=>{

  let arrayNuevo = []

  for (let i = 0; i < array.length; i++) {
    if(array[i].saldo < num){
      arrayNuevo.push(array[i])
    }
    
  }

  return arrayNuevo

}


// let resultado5 = filtrarPorSaldos(arrayCuentas,2000)

// console.log(resultado5);


// Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined 
// Reutilizando la función  buscarPorId 


const incrementarSaldo = (array, id, saldo)=>{
  
  if(buscarPorId(array,id)){

    let usuario = buscarPorId(array,id)
    usuario.saldo+=saldo

    return usuario

  }

  return undefined
}


let resultado6 = incrementarSaldo(arrayCuentas,1,5000)

console.log(arrayCuentas);

console.log(resultado6);