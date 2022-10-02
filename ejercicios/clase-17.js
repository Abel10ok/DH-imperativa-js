// 1) Seguir las instrucciones en este sandbox, para escribir y sumar los valores dentro
// de una matriz.

let mat = 
[
    [2,10,20,5,6],
    [21,14,45,52,6],
    [25,100,23,50,61],
    [3,16,31,9,8],
    [11,80,19,25,16]
]

const sumarMatriz = mat =>{

    let resutado = 0

    for (let i = 0; i < mat.length; i++) {
        
        for (let j = 0; j < mat[i].length; j++) {
            resutado += mat[i][j]
        }
    }
    return resutado
}

// let r = sumarMatriz(mat)
// console.table(r);


// 2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:

const crearMatriz = (n,n2)=>{
    
    let matriz = []
    let acc = 1

    for (let i = 0; i <n; i++) {
        matriz.push([])
        for (let j = 0; j < n2; j++) {
            matriz[i][j]= acc
            acc++
        }
    }
    return matriz
}

// let nuevaMatriz = crearMatriz(10,10)

// console.table(nuevaMatriz)



// 3) Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.



const sumarDiagonales = mat =>{

    let diagonalPrincipal= mat[0][0]
    let diagonalSecundaria= mat[0][mat.length-1]

    for (let i = 1; i < mat.length; i++) {
        diagonalPrincipal += mat[i][i]
        diagonalSecundaria += mat[i][mat.length-1-i]
    }

    console.log(`suma diagonal principal es ${diagonalPrincipal} y la de la secundaria es ${diagonalSecundaria}`);	
}

sumarDiagonales(crearMatriz(10,10))

