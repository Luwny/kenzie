function convertToArray(...str) {
    let list = [...str]
    for (let i = 0; i < list.length; i++) {
        list[i] = `${i + 1}º - ${list[i]}`
    }
    return list
}
console.log(convertToArray("Verificar se está conectado na energia",
    "Verificar se o monitor está conectado na energia",
    "Verificar se todos os cabos estão conectados",
    "Apertar o botão de power", "Esperar tela acender", "usar"))