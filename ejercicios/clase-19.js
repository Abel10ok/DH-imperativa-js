// Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.

// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. 
// a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. 
// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
// c) Por último, es necesario tener el total de gastos realizados en el mes.
// Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?


let mes = 
[
    [200,500,2000,550,600,1000,1800],
    [1000,1400,4500,520,610,2000,1500],
    [2500,100,2300,500,650,100,2000],
    [3000,1000,3000,9000,8000,2000,5000],
]


const gastosDeSemana = (mes,semana)=>{

    let gastos= mes[semana][0]

    for (let i = 1; i < mes[semana].length; i++) {

        if( mes[semana][i] !== undefined ){
            gastos+= mes[semana][i]
        }
    }
    return gastos
}


// let gastosSemana = gastosDeSemana(mes,0)

// console.log(gastosSemana);



// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.



const gastosDeDia = (mes,semana,dia)=>{

    let gastos

    for (let i = 1; i < mes[semana].length; i++) {

            gastos = mes[semana][dia]
    }
    return gastos
}


// let resultado2 = gastosDeDia(mes,1,1)

// console.log(resultado2);


// c) Por último, es necesario tener el total de gastos realizados en el mes.

const gastoMes = mes =>{

    let gastos = 0

    for (let i = 0; i < mes.length; i++) {

        gastos += gastosDeSemana(mes,i)

    }
    return gastos
}

// let resultado3 = gastoMes(mes)

// console.log(resultado3);


// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.


const semanaMasGasto = mes =>{

    let semana = gastosDeSemana(mes,0)


    for (let i = 1; i < mes.length; i++) {
        if(semana < gastosDeSemana(mes,i)){
            semana = gastosDeSemana(mes,i)
        }
    }
    return semana
}

let resultado4 = semanaMasGasto (mes)

console.log(resultado4);