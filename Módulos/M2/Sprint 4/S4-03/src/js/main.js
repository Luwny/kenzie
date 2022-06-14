class Veiculo {
    constructor(proprietario, placa, tipoCombustivel) {
        this.proprietario = proprietario
        this.placa = placa
        this.tipoCombustivel = tipoCombustivel
    }
}

class Automovel extends Veiculo {
    constructor(proprietario, placa, tipoCombustivel, qtdLugares, qtdPortas, anoFabricacao) {
        super(proprietario, placa, tipoCombustivel) 
            this.qtdLugares = qtdLugares 
            this.qtdPortas  = qtdPortas
            this.anoFabricacao = anoFabricacao        
    }    
    retornarInformacoes() {
        return `Placa: ${this.placa}; ano: ${this.anoFabricacao}; tipo de combustível: ${this.tipoCombustivel}; quantidade de lugares: ${this.qtdLugares}; quantidade de portas: ${this.qtdPortas}; proprietário: ${this.proprietario}`
    }
}