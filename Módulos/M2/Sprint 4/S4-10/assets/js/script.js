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
        const botao = document.querySelector('#register-button')
        botao.addEventListener('click', event => {
            const nome = document.getElementsByName('nome')[0].value
            const sobrenome = document.getElementsByName('sobrenome')[0].value
            const dataNascimento = document.getElementsByName('dataNascimento')[0].value
            const email = document.getElementsByName('email')[0].value
            const contato = document.getElementsByName('contato')[0].value
            const telefone = document.getElementsByName('telefone')[0].value
            const cargo = document.getElementsByName('cargo')[0].value

            this.arrayVazio.push({
                nome,
                sobrenome,
                dataNascimento,
                email,
                contato,
                telefone,
                cargo
            })
            console.log(this.arrayVazio)
        })
    }
    filtrarCargo() {
        const ulListaAlunos = document.querySelector('#lista-de-alunos')
    }
}
Pessoa.criarUsuario()