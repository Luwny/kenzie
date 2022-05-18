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
calculateSalary()

let counter200 = 0
let counter100 = 0
let counter50 = 0
let counter20 = 0
let counter10 = 0
let counter5 = 0
let counter2 = 0

function cashMachine(saque, salario) {
    let current = saque
    let dinheiroAt = salario - saque
    //verificação se o caboco tem dinheiro na conta
    if (saque <= salario) {
        console.log(`Seu dinheiro em conta era de R$ ${salario}`)
        console.log(`O valor do saque foi de R$ ${saque}`)
        while (current >= 200) {
            current = current - 200
            counter200++
        }
        while (current >= 100) {
            current = current - 10
            counter200++
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

        console.log(`Após o saque, o valor em conta atual é de: R$ ${dinheiroAt}`)

        console.log(`Foram usadas notas de:
${counter200} de R$ 200,00 
${counter100} de R$ 100,00
${counter50} de R$ 50,00
${counter20} de R$ 20,00
${counter10} de R$ 10,00
${counter5} de R$ 5,00
${counter2} de R$ 2,00`)
    } else {
        console.log(`Você não tem dinheiro suficiente para esta operação.`)
    }
}
cashMachine(547, calculateSalary(1400, 10000))