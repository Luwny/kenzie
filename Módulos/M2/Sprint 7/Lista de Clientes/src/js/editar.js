import { Api } from "./Api.js";

const clientes = await Api.listarClientes()
const select = document.querySelector('#buscarCliente')
const search = document.querySelector('#btnBuscarCliente')

const nome = document.querySelector('.nomeInput')
const data = document.querySelector('.dataNasc')
const sexo = document.querySelector('.selectGenero')
const email = document.querySelector('.email')

const btnEdit = document.querySelector('#btnEdit')

const listaDeClientes = (clientes) => {
    clientes.forEach(({ nome }) => {
        select.appendChild(new Option(nome))
    })

    search.addEventListener('click', event => {
        event.preventDefault()

        let achei = clientes.find(element => {
            if (element.nome == select.value) {
                return element
            }
        })

        let newCep = document.querySelector('.newCep')
        let newRua = document.querySelector('.newRua')
        let newNumero = document.querySelector('.newNumero')
        let newBairro = document.querySelector('.newBairro')
        let newCidade = document.querySelector('.newCidade')
        let newEstado = document.querySelector('.newEstado')
        let newTel = document.querySelector('.newTel')

        nome.value = achei.nome
        data.value = achei.data_nasc.split('/').join('-')
        sexo.value = achei.sexo
        email.value = achei.email
        newCep.value = achei.endereco.cep
        newRua.value = achei.endereco.rua
        newNumero.value = achei.endereco.numero
        newBairro.value = achei.endereco.bairro
        newCidade.value = achei.endereco.cidade
        newEstado.value = achei.endereco.estado
        newTel.value = achei.telefone_fixo
        let id = achei.id



        btnEdit.addEventListener('click', event => {
            event.preventDefault()

            document.querySelector('.nomeInput').value = nome.value
            document.querySelector('.dataNasc').value = data.value
            document.querySelector('.selectGenero').value = sexo.value
            document.querySelector('.email').value = email.value
            document.querySelector('.newCep').value = newCep.value
            document.querySelector('.newRua').value = newRua.value
            document.querySelector('.newNumero').value = newNumero.value
            document.querySelector('.newBairro').value = newBairro.value
            document.querySelector('.newCidade').value = newCidade.value
            document.querySelector('.newEstado').value = newEstado.value
            document.querySelector('.newTel').value = newTel.value

            Api.editarCliente(id, {
                'nome': nome.value,
                'data_nasc': data.value,
                'sexo': sexo.value,
                'email': email.value,
                'endereco': {
                    "cep": newCep.value,
                    "rua": newRua.value,
                    "numero": newNumero.value,
                    "bairro": newBairro.value,
                    "cidade": newCidade.value,
                    "estado": newEstado.value,
                },
                'telefone_fixo': newTel.value
            })
        })
    })
}
listaDeClientes(clientes)
