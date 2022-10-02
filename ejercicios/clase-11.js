
//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!

// Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.
// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);
 

  let banco = {
    clientes : arrayCuentas,

    consultarCliente : function (nombre) {

        for(let i =0;i<this.clientes.length;i++){
            if(this.clientes[i].titularCuenta===nombre){
                return this.clientes[i]
            }
        }
        return "no existe"

    },

    deposito : function (nombre, cantidad) {

        let cliente = banco.consultarCliente(nombre)

        cliente.saldoEnPesos+=cantidad

        // for(let i =0;i<this.clientes.length;i++){
        //     if(this.clientes[i].titularCuenta===nombre){
        //         this.clientes[i].saldoEnPesos+=cantidad
        //     }
        // }
    },

    extraccion : function (nombre, cantidad) {
        for(let i =0;i<this.clientes.length;i++){
            if(this.clientes[i].titularCuenta===nombre){
                this.clientes[i].saldoEnPesos-=cantidad
            }
        }
    },

  }

  let resultado = banco.consultarCliente("Jacki Shurer");

  banco.deposito("Jacki Shurmer",10000)


//   console.log(banco.clientes);



let n = Object.keys(banco)

console.log(n);