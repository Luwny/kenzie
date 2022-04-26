
let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}


function testWinner (winnerData1, winnerData2) {
    if (winnerData1 === '123.321.789-98' && winnerData2 === '16/09/1986') {
        return "É ganhador."
    } else {
        return "É alarme falso."
    }
}
console.log(testWinner(ganhador.cpf, ganhador.nascimento))
console.log("---")

function newFunction(...array) {
    for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1}º pessoa a tentar retirar o prêmio: ${array[i]}`)
    }
}
newFunction('Adam', 'Natalia', 'Gabriel','Theales','Walter')
