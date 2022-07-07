import { Api } from "./Api.js";

const btnCadastrar = document.querySelector('.btnCadastrar')

function calcularIdade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var data = new Date,
        ano_atual = data.getFullYear(),
        mes_atual = data.getMonth() + 1,
        dia_atual = data.getDate(),

        dia_aniversario = +dia_aniversario,
        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }
    return quantos_anos < 0 ? 0 : quantos_anos;
}

btnCadastrar.addEventListener('click', event => {
    event.preventDefault()

    const nome = document.querySelector('.nome').value
    const data = document.querySelector('.data').value.split('-')
    const dataTratado = data.join('-').replaceAll('-', '/')
    const cpf = document.querySelector('.cpf').value
    const sexo = document.querySelector('.sexo').value
    const email = document.querySelector('.email').value

    
    const cep = document.querySelector('.cep').value
    const rua = document.querySelector('.rua').value
    const numero = document.querySelector('.numero').value
    const bairro = document.querySelector('.bairro').value
    const cidade = document.querySelector('.cidade').value
    const estado = document.querySelector('.estado').value

    const tel = document.querySelector('.tel').value

    const newUser = {
        "nome": nome,
        "idade": calcularIdade(data[0],data[1],data[2]),
        "cpf": cpf,
        "data_nasc": dataTratado,
        "sexo": sexo,
        "email": email,
        "endereco": {
            "cep": cep,
            "rua": rua,
            "numero": numero,
            "bairro": bairro,
            "cidade": cidade,
            "estado": estado
        },
        "telefone_fixo": tel
    }

    Api.cadastrarCliente(newUser)
    console.log(newUser)

  
})