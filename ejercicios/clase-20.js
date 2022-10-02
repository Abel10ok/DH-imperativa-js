
const conteo = [
    {
        nombre : 'Pedro',
        likes : 56
    },
    {
        nombre : 'Carlos',
        likes : 22
    },
    {
        nombre : 'Jorge',
        likes : 66
    },
    {
        nombre : 'Jose',
        likes : 34
    },
    {
        nombre : 'Lorena', 
        likes : 27
    },
    {
        nombre : 'Sofia',
        likes : 48
    },
    {
        nombre : 'Sara',
        likes : 68
    },
    {
        nombre : 'Adrian',
        likes : 75
    },
    {
        nombre : 'Dayana',
        likes : 55
    },
    {
        nombre : 'Cesar',
        likes : 61
    },
    {
        nombre : 'Victoria',
        likes : 37
    },
    {
        nombre : 'Camilo', 
        likes : 7
    },
    {
        nombre : 'Lizbeth',
        likes : 36
    },
    {
        nombre : 'Raul',
        likes : 69
    },
    {
        nombre : 'Miriam',
        likes : 70
    }
]

const ordenar = arr => {
    let temp;

    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++ ){
            if (arr[j].likes < arr[j+1].likes){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        
}
        console.log("El usuario con mayor cantidad de likes obtuvo " + arr[0].likes + " likes")
        console.log("El segundo usuario con mayor cantidad de likes obtuvo " + arr[1].likes + " likes")
        console.log("El tercer usuario con mayor cantidad de likes obtuvo " + arr[2].likes + " likes")
        console.log("El usuario que menos likes obtuvo con " + arr[arr.length-1].likes + " likes")
}
ordenar(conteo)
console.table(conteo) 
console.log("Fin del ejercicio 1")
console.log("=========================================================================================");

const tControl = [
    {
        dia:  1,
        mes : 1,
        tempMax : 15, 
        tempMin : 2
    },
    {
        dia:  2,
        mes : 1,
        tempMax : 27, 
        tempMin : 18
    },{
        dia:  3,
        mes : 1,
        tempMax : 25, 
        tempMin : 14
    },{
        dia:  4,
        mes : 1,
        tempMax : 17, 
        tempMin : 10
    },{
        dia:  5,
        mes : 1,
        tempMax : 19, 
        tempMin : 8
    },{
        dia:  6,
        mes : 1,
        tempMax : 21, 
        tempMin : 17
    }

]
console.log("Ordenado por temperatura mínima de menor a mayor")
const tempMenor = arr => {
    let aux;
    for (let i = 0; i < arr.length; i++) {
        for ( let j = 0; j < arr.length - 1; j++) {
            if (arr[j].tempMin > arr[j+1].tempMin) {
                aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
        }
    }
}
}
tempMenor(tControl)
console.table(tControl);



let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];


const ordenarEstatura = arr => {
    let aux;

    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++ ){
            if (arr[j].likes < arr[j+1].likes){
                aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
        
    }

}

ordenarEstatura(personas)

console.table(personas)