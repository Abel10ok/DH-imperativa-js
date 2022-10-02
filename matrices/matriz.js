let matrzi = [
    [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
]

let matriz1 = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]

const sumarMatriz = mat =>{

    let suma=0;

    for(let i =0; i<mat.length;i++){

        for (let j = 0; j < mat[i].length; j++) {
            suma +=mat[i][j]
            
        }
    }
    return suma
}

const generarMatriz10por10 = (x, y) => {
    let matriz = [];
    let contador = 1;
    for (let i = 0; i < x; i++) {
      matriz.push([]);
  
      for (let j = 0; j < y; j++) {
        matriz[i].push(contador);
        contador++;
  const sumarMatriz = (mat) => {
    let suma = 0;
  
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
        suma += mat[i][j];
      }
    }
    return suma;
  };
  
  let resultado1 = sumarMatriz(matriz1);
  
  console.log("resultado 1 => ", resultado1);
  

let resultado = sumarMatriz(matriz1)

console.log(resultado);