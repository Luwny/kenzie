// class Veiculo {
//     constructor(proprietario, placa, tipoCombustivel) {
//         this.proprietario = proprietario
//         this.placa = placa
//         this.tipoCombustivel = tipoCombustivel
//     }
// }

// class Automovel extends Veiculo {
//     constructor(proprietario, placa, tipoCombustivel, qtdLugares, qtdPortas, anoFabricacao) {
//         super(proprietario, placa, tipoCombustivel)
//         this.qtdLugares = qtdLugares
//         this.qtdPortas = qtdPortas
//         this.anoFabricacao = anoFabricacao
//     }
//     retornarInformacoes() {
//         return `Placa: ${this.placa}; ano: ${this.anoFabricacao}; tipo de combustível: ${this.tipoCombustivel}; quantidade de lugares: ${this.qtdLugares}; quantidade de portas: ${this.qtdPortas}; proprietário: ${this.proprietario}`
//     }
// }

class Agenda {
    constructor(nome) {
        this.nome = nome
        this.contatos = []
    }
    adicionarContato(pessoa) {
        const verificacao = this.contatos.find(elem => {
         if (pessoa.telefone == elem.telefone) {                
                return true
        } 
        })
        if (!verificacao) {
            this.contatos.push({
                nome: pessoa.nome,
                telefone: pessoa.telefone,
            }) 
        }  else {
            return `Número de telefone já existente na lista`
        }
               
    }
    removerContato(telefone = '1') {
        if (isNaN(telefone) == false) {
            this.contatos.forEach(elem => {
                if (elem.telefone == telefone) {                
                    const indexTelefone = telefone.indexOf(elem.telefone)
                    this.contatos.splice(indexTelefone, 1)
                } else {
                    console.log(`Telefone não encontrado`)
                }
            })
        } else {
            return 'Digite um número pra remover o contato.'
        }
    }
    listarContatos() {
        this.contatos.forEach((elem, index) => {
            console.log(`${index+1} - Nome: ${elem.nome} Telefone: ${elem.telefone}`)
        })
        if (!this.contatos) {
            return `Nenhum contato encontrado`
        }
    }
    pesquisarContato(nome) { 
        this.contatos.find(elem => {            
            if (elem.nome == nome) {
                console.log(`O nome do contato é: ${elem.nome} e seu telefone é ${elem.telefone}`)
            } else {
                return `Nenhum contato encontrado`
            }
        }) 
    }
    editarContato(posicao, nome, telefone) {
        posicao = this.contatos.forEach((elem, index) => {
            if (posicao == index+1) {
              elem.nome = nome
              elem.telefone = telefone
            }          
        })   
    }
}

const agenda = new Agenda("Agenda da Nicole")

const pessoinhaUm = {nome: "Sidny", telefone: "992929393"}
const pessoinhaDois = {nome: "Heric", telefone: "36361515"}
const pessoinhaTres = {nome: "Gabriel", telefone: "98126546"}

agenda.adicionarContato(pessoinhaUm)
agenda.adicionarContato(pessoinhaDois)
agenda.adicionarContato(pessoinhaDois)
agenda.listarContatos()
console.log(agenda.contatos) // deve ser: [{nome: "Sidny", telefone: "992929393"},{nome: "Heric", telefone: "36361515"}] 
console.log(`${agenda.adicionarContato(pessoinhaUm) === "Número de telefone já existente na lista"} should be true`) 

console.log(`${agenda.removerContato("churros") === "Digite um número para remover um contato."} should be true`) 
console.log(`${agenda.removerContato("123456") === "Contato não encontrado."} should be true`) 
agenda.removerContato("36361515")
console.log(agenda.contatos) // deve ser somente [{nome: "Sidny", telefone: "992929393"}] 

agenda.adicionarContato(pessoinhaDois)

agenda.listarContatos() // deve aparecer no console:
/*
1 - Nome:Sidny Telefone:992929393
1 - Nome:Heric Telefone:36361515
*/

agenda.removerContato("36361515")
agenda.removerContato("992929393")
console.log(`${agenda.listarContatos() === "Nenhum contato encontrado"} should be true`)

agenda.adicionarContato(pessoinhaUm)
agenda.adicionarContato(pessoinhaDois)

console.log(agenda.pesquisarContato("Sidny")) // deve ser {nome: 'Sidny', telefone: '992929393'}
console.log(`${agenda.pesquisarContato("Rogérin do Grau") === "Nenhum contato encontrado"} should be true`)

console.log(agenda.editarContato(1, "Heric Passarinho", "996963838")) // deve ser {nome: 'Heric Passarinho', telefone: '996963838'}
console.log(`${agenda.editarContato(2, "Victor Churros", "985851717") === "Nenhum contato encontrado"} should be true`)