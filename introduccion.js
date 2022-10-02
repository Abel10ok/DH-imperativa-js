//LINK  VARIABLES = (let/const) .


// LINK IMPORTAR LIBRERIA.
const prompt = require('prompt-sync')( {sigint: true} )

let nombreDeUsuario = prompt('Ingresar nombre de usuario: ')

console.log("Hola " + nombreDeUsuario + " bienvenido")