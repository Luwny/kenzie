class BancoOrgaos {
    constructor(cnpj, endereco, razaoSocial) {
        this.cnpj = cnpj
        this.endereco = endereco
        this.razaoSocial = razaoSocial

        this.orgaosDoados = []
        this.historicoDoacao = []
        this.historicoRecepcao = []
    }
    adicionarOrgaoaoBanco(orgao, pessoa) {
        this.orgaosDoados.push(orgao)
        this.adicionarHistoricoDoador(orgao, pessoa)

    }
    removerOrgaoDoBanco(orgao) {
        //Procurar primeiro órgão com o nome especificado
        const orgaoEncontrado = this.orgaosDoados.find(elem => {
            return elem === orgao
        })
        if (orgaoEncontrado) {
            //Encontrar index do órgão
            const indexOfOrgao = this.orgaosDoados.indexOf(orgaoEncontrado)
            //Remover órgão
            this.orgaosDoados.splice(indexOfOrgao, 1)
            return this.adicionarHistoricoDoador(orgao)
        }
    }
    receberOrgao() {

    }
    adicionarHistoricoDoador(orgao, pessoa) {
        //Criando objeto de histórico
        const novoHistorico = {
            doador: pessoa,
            orgao: orgao,
            dataDoacao: new Date()
        }
        this.historicoDoacao.push(novoHistorico)
        return novoHistorico
    }
    
    adicionarHistoricoRecepcao(orgao, pessoa) {
        const novoHistorico = {
            donatario: pessoa,
            orgao: orgao,
        }
    }
}
