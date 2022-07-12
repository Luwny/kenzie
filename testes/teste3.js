 function teste() {
    let duzentos = 0
    let cem = 0
    let salario = 2754

    while (salario >= 200) {
        duzentos++
        salario -= 200
    }
    while (salario >= 100) {
        cem++
        salario -= 100
    }
    console.log(`Usamos ${duzentos} notas de R$ 200,00`)
    console.log(`Usamos ${cem} notas de R$ 100,00`)
    console.log(`Valor atual: R$ ${salario}`)
 }
 teste()