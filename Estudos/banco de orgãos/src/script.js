function testarDados() {
    const dadosKenzie = {
        cnpj: "42.863.002/0001-54",
        endereco: "Travessa Samaúma",
        razaoSocial: "Doação de Órgãos Kenzie"
    }
    const bancoKenzie = new BancoOrgaos(...Object.values(dadosKenzie))
    bancoKenzie.adicionarOrgaoaoBanco('Coração', "Kenzinho")
    bancoKenzie.adicionarOrgaoaoBanco('Rim', "Kenzinho")    
    bancoKenzie.removerOrgaoDoBanco('Rim')
    console.log(bancoKenzie)
}
testarDados()