class Api {

    static async listarClientes(){

        const response = await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
        const data     = await response.json()

        return data

    }
    
    
    static async editarCliente(id, data){
        
        await fetch("https://atividade-api-clientes.herokuapp.com/clientes/"+id, {
                  method: "PATCH",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body:JSON.stringify(data)
        })
  
      }
    

    static async cadastrarCliente(data){

    }


    static async deletarCliente(id){

    }

}

export {Api}
