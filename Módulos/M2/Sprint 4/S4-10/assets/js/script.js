class Pessoa {
    constructor(nome, sobrenome, dataNascimento, email, contato, telefone, cargo) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.dataNascimento = dataNascimento
        this.email = email
        this.contato = contato
        this.telefone = telefone
        this.cargo = cargo
    }
    static arrayVazio = []
    static criarUsuario() {
        let totalCadastrados = 0
        const botao = document.querySelector('#register-button')
        const spanTotalCadastrados = document.querySelector('#total-alunos')
        spanTotalCadastrados.innerText = totalCadastrados

        botao.addEventListener('click', event => {
            let checaEmail = false
            let checaCampos = false
            let checaIdade = false

            const nome = document.getElementsByName('nome')[0].value
            const sobrenome = document.getElementsByName('sobrenome')[0].value
            const dataNascimento = document.getElementsByName('dataNascimento')[0].value
            const email = document.getElementsByName('email')[0].value
            const contato = document.getElementsByName('contato')[0].value
            const telefone = document.getElementsByName('telefone')[0].value
            const cargo = document.getElementsByName('cargo')[0].value
            let ano = dataNascimento.split('-')[0]
            let mes = dataNascimento.split('-')[1]
            let dia = dataNascimento.split('-')[2]

            if (nome == '' || sobrenome == '' || email == '' || contato == '' || telefone == '' || cargo == '') {
                exibirModal('Por favor, preencha os campos disponíveis')
                return checaCampos = true
            }
            if (calcularIdade(ano, mes, dia) < 18) {
                exibirModal('Você tem menos que 18 anos, não poderá se cadastrar.')
                return checaIdade = true
            }
            this.arrayVazio.forEach(elem => {
                if (elem.email == email) {
                    exibirModal(`Este e-mail já consta na lista, por favor, digite um novo e-mail.`)
                    return checaEmail = true
                }
            })
            if (checaEmail == false && checaCampos == false && checaIdade == false) {
                this.arrayVazio.push({
                    nome,
                    sobrenome,
                    dataNascimento,
                    email,
                    contato,
                    telefone,
                    cargo
                })
                Pessoa.filtrarCargo()
                totalCadastrados++
            }
            spanTotalCadastrados.innerText = totalCadastrados
        })
    }
    static filtrarCargo() {
        const btnPesquisar = document.querySelector('#btn')

        btnPesquisar.addEventListener('click', event => {
            const seletorCargo = document.querySelector('#cargoOption')
            if (seletorCargo.value == "Todos") {
                ulLista.innerHTML = ""
                this.arrayVazio.forEach(elem => {
                    const liLista = document.createElement('li')

                    const pNome = document.createElement('p')
                    const pEmail = document.createElement('p')
                    const pCargo = document.createElement('p')

                    pNome.innerText = elem.nome
                    pEmail.innerText = elem.email
                    pCargo.innerText = elem.cargo

                    liLista.append(pNome, pEmail, pCargo)
                    ulLista.appendChild(liLista)
                })
            } else if (seletorCargo.value == "Aluno") {
                ulLista.innerHTML = ""
                this.arrayVazio.forEach(elem => {
                    if (elem.cargo == 'Aluno') {
                        const liLista = document.createElement('li')

                        const pNome = document.createElement('p')
                        const pEmail = document.createElement('p')
                        const pCargo = document.createElement('p')

                        pNome.innerText = elem.nome
                        pEmail.innerText = elem.email
                        pCargo.innerText = elem.cargo

                        liLista.append(pNome, pEmail, pCargo)
                        ulLista.appendChild(liLista)
                    }
                })
            } else if (seletorCargo.value == "Facilitador") {
                ulLista.innerHTML = ""
                this.arrayVazio.forEach(elem => {
                    if (elem.cargo == 'Facilitador') {
                        const liLista = document.createElement('li')

                        const pNome = document.createElement('p')
                        const pEmail = document.createElement('p')
                        const pCargo = document.createElement('p')

                        pNome.innerText = elem.nome
                        pEmail.innerText = elem.email
                        pCargo.innerText = elem.cargo

                        liLista.append(pNome, pEmail, pCargo)
                        ulLista.appendChild(liLista)
                    }
                })
            } else if (seletorCargo.value == "Instrutor") {
                ulLista.innerHTML = ""
                this.arrayVazio.forEach(elem => {
                    if (elem.cargo == 'Instrutor') {
                        const liLista = document.createElement('li')

                        const pNome = document.createElement('p')
                        const pEmail = document.createElement('p')
                        const pCargo = document.createElement('p')

                        pNome.innerText = elem.nome
                        pEmail.innerText = elem.email
                        pCargo.innerText = elem.cargo

                        liLista.append(pNome, pEmail, pCargo)
                        ulLista.appendChild(liLista)
                    }
                })
            }
        })
        const ulLista = document.querySelector('#lista-de-alunos')
        ulLista.innerHTML = ""
        this.arrayVazio.forEach(elem => {
            const liLista = document.createElement('li')

            const pNome = document.createElement('p')
            const pEmail = document.createElement('p')
            const pCargo = document.createElement('p')

            pNome.innerText = elem.nome
            pEmail.innerText = elem.email
            pCargo.innerText = elem.cargo

            liLista.append(pNome, pEmail, pCargo)
            ulLista.appendChild(liLista)
        })

    }
}
Pessoa.criarUsuario()
Pessoa.filtrarCargo()

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

function exibirModal(mensagem) {
    document.querySelector('.modal').style.display = "flex"
    const p = document.querySelector('.msgEditadaModal')
    p.innerText = mensagem
}
function fecharModal() {
    document.querySelector('.modal').style.display = "none"
}