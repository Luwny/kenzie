class Api {
    static BASE_URL = 'https://atividade-api-clientes.herokuapp.com/clientes/'

    static async listarClientes() {

        const response = await fetch(this.BASE_URL)
        const data = await response.json()

        return data

    }

    static async editarCliente(id, data) {

        await fetch(this.BASE_URL + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

    }


    static async cadastrarCliente(data) {
        await fetch(this.BASE_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(data)
        })

    }


    static async deletarCliente(id) {

        await fetch(this.BASE_URL + id, {
            method: "DELETE",
        })

    }

}

export { Api }
