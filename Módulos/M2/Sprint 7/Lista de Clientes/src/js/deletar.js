import { Api } from "./Api.js";


const clientes = await Api.listarClientes()

const buscarCliente = document.querySelector('#buscarCliente')
const btnDelete = document.querySelector('.btnDelete')


const listarClientesPossiveis = (clientes) => {
    clientes.forEach(({ nome }) => {
        buscarCliente.appendChild(new Option(nome))

        
        })

        btnDelete.addEventListener('click', event => {
            let achei = clientes.find(elem => {
                if (elem.nome == buscarCliente.value) {
                    return elem.id
                }
            })
            Api.deletarCliente(achei.id)

    })

}

listarClientesPossiveis(clientes)