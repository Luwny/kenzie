//1
//Somar números
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]

    }
    console.log('Soma de todos números:')
    console.log(soma)
}
sum(numbers)

//2
//Somar números ímpares
const oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function odd(array) {
    let sumOdd = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            sumOdd += array[i]
        }
    }
    console.log(sumOdd)
}
console.log('Soma de todos números ímpares:')
odd(oddNumbers)

//3
//Somar números negativos
const negativeNumbers = [-1, -2, -3, -4, -5, -6, -7, 8, 9, 10]

function negative(array) {
    let negResult = 0
    for (let i = 0; i < array.length; i++) {
        if (Math.sign(array[i]) === -1) {
            negResult += array[i]
        }
    }
    console.log('Soma de todos números negativos:')
    console.log(negResult)
}
negative(negativeNumbers)

//4
//Pushar todos números pares em uma nova array
const lolNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function myFunction(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            newArray.push(array[i])
        }
    }
    console.log('Push em todos números pares em uma nova array:')
    console.log(newArray)
}
myFunction(lolNumbers)

//5
//Pushar todos números positivos
const negativeNumberss = [-1, -2, -3, -4, -5, -6, -7, 8, 9, 10]
function myFunction2(array) {
    let pair = []
    for (let i = 0; i < array.length; i++) {
        if (Math.sign(array[i]) == 1) {
            pair.push(array[i])
        }
    }
    console.log('Push de todos números positivos em uma array')
    console.log(pair)
    console.log(`Tamanho da array: ${array.length}`)
}
myFunction2(negativeNumberss)