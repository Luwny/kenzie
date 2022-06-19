const empregos = [{
    nomeDoEmprego: 'Facilitador',
    tipo: 'CLT',
    salario: 4000,
}, {
    nomeDoEmprego: 'Coach',
    tipo:'PJ',
    salario: 12
}]

class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.saldo = 0
        this.historico = []
    }
    mostrarNomeCompleto(){
        return this.nome + ' ' +  this.sobrenome
    }
}

class Funcionario extends Pessoa {
    constructor(nome, sobrenome, idade, cargo, tipo, salario) {
        super(nome, sobrenome, idade)
        this.cargo = cargo
        this.tipo = tipo
        this.salario = salario
    }
    relatarSalario() {
        if (this.cargo == 'Facilitador') {
            empregos.forEach(elem => {
                if (this.cargo == 'Facilitador' && this.tipo == 'PJ') {
                    return elem.salario
                }
            })
        }
    }
}

