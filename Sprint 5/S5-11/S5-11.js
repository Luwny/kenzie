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

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const notas = [200, 100, 50, 20, 5, 2]
const n200 = 200
const n100 = 100
const n50 = 50
const n20 = 20
const n10 = 10
const n5 = 5
const n2 = 2
let counter200 = 0
let counter100 = 0
let counter50 = 0
let counter20 = 0
let counter10 = 0
let counter5 = 0
let counter2 = 0
let vezes = 0

function cashMachine() {
}
cashMachine()
function calculateStock() {

}
calculateStock
function calculateAge(birthAge, currentYear){
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
function getDiagonal(a, b, c) {

}
getDiagonal()