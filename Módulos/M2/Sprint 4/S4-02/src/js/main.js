class Pessoa {
    constructor(nome, nascimento, cidade) {
        this.nome = nome
        this.nascimento = nascimento
        this.cidade = cidade
    }
    calcularIdade(ano_aniversario, mes_aniversario, dia_aniversario) {
       let data = new Date,
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
    apresentar() {
        return `${this.nome} possui ${calcularIdade(ano_aniversario, mes_aniversario, dia_aniversario)} anos de idade e atualmente está morando em ${this.cidade}.`
    }
}

const adam = new Pessoa('Adam', '07/10/1996', 'Paulo Afonso')
console.log(adam.calcularIdade(1996, 10, 07))

console.log(adam)
class Elevador {
    constructor(totalAndar, capacidade) {
        this.andarAtual = 0
        this.totalAndar = totalAndar
        this.capacidade = capacidade
        this.totalPresentes = []

    }
    entrar(pessoa) {
        if (this.capacidade > 0) {
            this.capacidade--
            this.totalPresentes.push(pessoa)
        }
    }
    sair(pessoa) {
        const pessoaEncontrada = this.totalPresentes.find(elem => {
            return elem === pessoa
        })
        if (pessoaEncontrada) {
            const indexPessoa = this.totalPresentes.indexOf(pessoaEncontrada)
            this.totalPresentes.splice(indexPessoa, 1)
        }
    }

    subir() {
        if (this.andarAtual > this.totalAndar) {
            this.andarAtual++
        }

    }
    descer() {
        if (this.andarAtual > 0) {
            this.andarAtual--
        }
    }
}

class Televisão {
    constructor(canal, volume) {
        this.canal = canal
        this.volume = volume
    }
    aumentarVolume() {
        this.volume++
    }
    diminuirVolume() {
        this.volume--
    }
    aumentarCanal() {
        this.canal++
    }
    diminuirCanal() {
        this.canal--
    }
    trocarCanal(canal) {
        this.canal = canal
    }
    consultarCanal() {
        console.log(this.canal)
    }
    consultarVolume() {
        return this.volume
    }
}