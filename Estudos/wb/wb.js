class Digivice {
    static allDigimons = {
        nome: '',
        habilidade: '',
        digievolucao: {},
    }
}

class Digimon {
    constructor(nome, habilidade, digievolucao) {
        this.nome = nome
        this.habilidade = habilidade
        this.digievolucao = digievolucao
    }
    entrarEmBatalha() {
        //entrar o digimon na batalha e retornar ${digimon} entrou em batalha
        //caso digimon já esteja na batalha retornar digimon já está em batalha
    }
}

class Teste extends Digimon {
    constructor(nome, habilidade, digievolucao) {
        super(nome, habilidade, digievolucao)
        this.habilidadeSuprema = ''
    }
    digiEvoluir() {
        delete Digivice.allDigimons.digievolucao
        //pegar o digimon desejado
        //trocar as propriedades do objeto do digimon chamado por propriedades novas
        //deletar propriedade digievolucao e retornar habilidadeSuprema no local
        /* {
            nome: '',
            habilidade: '',
            habilidadeSuprema: {},
        } */
        //retornar mensagem falando qual foi a nova habilidade suprema adicionada
        //caso não houvesse digievolucao no digimon, retornar que o digimon não estava pronto pra ser digievoluido
    }
}