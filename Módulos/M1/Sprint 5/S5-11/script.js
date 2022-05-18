console.log('FUNÇÃO CALCULATE SALARY')

function calculateSalary(salario, vendas) {
    let comissao = 0
    let dinheiro = 0
    if (vendas < 1200) {
        comissao = vendas * 0.03
    } else if (vendas > 1200) {
        comissao = (1200 * 0.03) + (vendas - 1200) * 0.05
    }
    return dinheiro = salario + comissao
}
console.log(`R$ ${calculateSalary(1400, 10000)}`)

let counter200 = 0
let counter100 = 0
let counter50 = 0
let counter20 = 0
let counter10 = 0
let counter5 = 0
let counter2 = 0

console.log('FUNÇÃO CASH MACHINE')

function cashMachine(saque, salario, vendas) {
    let current = saque
    let saldoTotal = (calculateSalary(salario, vendas))
    //verificação se o caboco tem dinheiro na conta
    if (saque <= salario) {
        console.log(`Seu dinheiro em conta era de R$ ${saldoTotal}`)
        console.log(`O valor do saque foi de R$ ${saque}`)
        //contadores e redução do valor em conta
        while (current >= 200) {
            current = current - 200
            counter200++
        }
        while (current >= 100) {
            current = current - 100
            counter100++
        }
        while (current >= 50) {
            current = current - 50
            counter50++
        }
        while (current >= 20) {
            current = current - 20
            counter20++
        }
        while (current >= 10) {
            current = current - 10
            counter10++
        }
        while (current >= 5) {
            current = current - 5
            counter5++
        }
        while (current >= 2) {
            current = current - 2
            counter2++
        }
        // Qtd notas
        console.log(`Foram usadas notas de:
${counter200} de R$ 200,00 
${counter100} de R$ 100,00
${counter50} de R$ 50,00
${counter20} de R$ 20,00
${counter10} de R$ 10,00
${counter5} de R$ 5,00
${counter2} de R$ 2,00`)
        let dinheiroAt = saldoTotal - saque
        //Valor do saque
        console.log(`Após o saque, o valor em conta atual é de: R$ ${dinheiroAt}`)
    } else {
        console.log(`Você não tem dinheiro suficiente para esta operação.`)
    }
}
cashMachine(547, 1400, 10000)

console.log('FUNÇÃO CALCULATE STOCK:')

function calculateStock(currentQTD, currentMAX, currentMIN) {
    let currentMED = (currentMAX + currentMIN) / 2
    if (currentQTD >= currentMED) {
        return 'Não efetuar compra.'
    } else {
        return 'Efetuar compra.'
    }
}
console.log(calculateStock(500, 1000, 100))

console.log('FUNÇÃO CALCULATE AGE')

function calculateAge(birthAge, currentYear) {
    let yearDay = 365.25
    let yearWeek = 52.1786
    let ageYears = currentYear - birthAge
    let ageMonth = ageYears * 12
    let ageDays = ageYears * yearDay
    let ageWeek = ageYears * yearWeek
    console.log(`Idade em anos: ${ageYears}`)
    console.log(`Idade em meses: ${ageMonth}`)
    console.log(`Idade em dias: ${ageDays}`)
    console.log(`Idade em semanas: ${ageWeek}`)
}
calculateAge(1996, 2022)

const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let result = []

console.log('FUNÇÃO GET DIAGONAL:')

function getDiagonal(param) {
    for (let i = 0; i < param.length; i++) {
        for (let j = 0; j < param[i].length; j++) {
            if (j == i) {
                result.push(param[i][j])
            }
        }
    }
    console.log(result)
}
getDiagonal(array)