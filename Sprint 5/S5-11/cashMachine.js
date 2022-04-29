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
calculateSalary(900, 2000)

let counter200 = 0
let counter100 = 0
let counter50 = 0
let counter20 = 0
let counter10 = 0
let counter5 = 0
let counter2 = 0

function cashMachine(dinheiro, saque) {
    console.log(`Dinheiro em conta: R$ ${dinheiro},00`)
    let valorAt = saque
    console.log(`Você deseja sacar R$ ${saque},00`)
    while (valorAt >= 200) {
        valorAt = valorAt - 200
        counter200++
    }
    while (valorAt >= 100) {
        valorAt = valorAt - 100
        counter100++
    }
    while (valorAt >= 50) {
        valorAt = valorAt - 50
        counter50++
    }
    while (valorAt >= 20) {
        valorAt = valorAt - 20
        counter20++
    }
    while (valorAt >= 10) {
        valorAt = valorAt - 10
        counter10++
    }
    while (valorAt >= 5) {
        valorAt = valorAt - 5
        counter5++
    }
    while (valorAt >= 2) {
        valorAt = valorAt - 2
        counter2++
    }
    console.log(`O saque foi feito com notas de :
     ${counter200} : R$ 200,00 
     ${counter100} : R$ 100,00 
     ${counter50} : R$ 50,00 
     ${counter20} : R$ 20,00 
     ${counter10} : R$ 10,00 
     ${counter5} : R$ 5,00 
     ${counter2} : R$ 2,00`)
    console.log(`O novo valor do seu dinheiro em conta é de R$ ${dinheiro - saque}`)
}
cashMachine(calculateSalary(1200, 2000), 497)

function calculateStock() {

}
calculateStock()

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

function getDiagonal(param) {
    for (let i = 0; i < param.length; i++){
        console.log(param[i])
    }
}
getDiagonal(array)
