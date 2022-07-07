

import { Api } from "./Api.js";

const clientes = await Api.listarClientes()
const listaClientes = document.querySelector("ul")

//EXEMPLO DE CONSTRUÇÃO DO MÉTODO
const templateClientes = (clientes) => {

    clientes.forEach(({ nome, idade, cpf, data_nasc, sexo, email, endereco, telefone_fixo }) => {
        const { cep, rua, numero, bairro, cidade, estado } = endereco
        const li = document.createElement("li")

        li.innerHTML = `
          <p><strong>Nome</strong>: ${nome}</p>
                <p><strong>Idade</strong>: ${idade}</p>
                <p><strong>CPF</strong>: ${cpf}</p>
                <p><strong>Data de nascimento</strong>: ${data_nasc}</p>
                <p><strong>Sexo</strong>: ${sexo}</p>
                <p><strong>E-mail</strong>: ${email} </p>
                <p><strong>Telefone</strong>: ${telefone_fixo}</p>
               
                <h3>Endereço:</h3>
                <p><strong>CEP</strong>: ${cep}</p>
                <p><strong>Rua</strong>: ${rua}</p>
                <p><strong>Numero</strong>: ${numero}</p>
                <p><strong>Bairro</strong>: ${bairro}</p>
                <p><strong>Cidade</strong>: ${cidade}</p>
                <p><strong>Estado</strong>: ${estado}</p>
              
          `
        listaClientes.appendChild(li)
    })
}

templateClientes(clientes)