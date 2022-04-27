// //NUMEROS
// //1
// //Somar números
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function sum(array) {
//     let soma = 0
//     for (let i = 0; i < array.length; i++) {
//         soma += array[i]

//     }
//     console.log('Soma de todos números:')
//     console.log(soma)
// }
// sum(numbers)

// //2
// //Somar números ímpares
// const oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function odd(array) {
//     let sumOdd = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 != 0) {
//             sumOdd += array[i]
//         }
//     }
//     console.log(sumOdd)
// }
// console.log('Soma de todos números ímpares:')
// odd(oddNumbers)

// //3
// //Somar números negativos
// const negativeNumbers = [-1, -2, -3, -4, -5, -6, -7, 8, 9, 10]

// function negative(array) {
//     let negResult = 0
//     for (let i = 0; i < array.length; i++) {
//         if (Math.sign(array[i]) === -1) {
//             negResult += array[i]
//         }
//     }
//     console.log('Soma de todos números negativos:')
//     console.log(negResult)
// }
// negative(negativeNumbers)

// //4
// //Pushar todos números pares em uma nova array
 const lolNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function myFunction(array) {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             newArray.push(array[i])
//         }
//     }
//     console.log('Push em todos números pares em uma nova array:')
//     console.log(newArray)
// }
// myFunction(lolNumbers)

//5
//Pushar todos números positivos
// const negativeNumberss = [-1, -2, -3, -4, -5, -6, -7, 8, 9, 10]
// function myFunction2(array) {
//     let pair = []
//     for (let i = 0; i < array.length; i++) {
//         if (Math.sign(array[i]) == 1) {
//             pair.push(array[i])
//         }
//     }
//     console.log('Push de todos números positivos em uma array')
//     console.log(pair)
//     console.log(`Tamanho da array: ${array.length}`)
// }
// myFunction2(negativeNumberss)

// //6
// //Pushar todos elementos multiplos de 6 em uma nova array
// const multSix = [0, 6, 12, 18, 24, 30, 36, 42, 45]
// function myFunction(array) {
//     let newSix = []
//     for (let i = 0; i < array.length; i++){
//         if (array[i] % 6 === 0) {
//             newSix.push(array[i])
//         }
//     }
//     console.log('Push de todos números múltiplos de 6')
//     console.log(newSix)
// }
// myFunction(multSix)

// PALAVRAS
//1
//Receber string e retornar tudo separado em arrays
const string = 'espacate'
// function myFunction(param) {
//     let newString = param.split('')
//     console.log(newString)
// }
// myFunction(string)

//2
//Separar pela letra A
// function myFunction(param) {
//     let newString2 = param.split('a')
//     console.log(newString2)
// }
// myFunction(string)

//3
//Retornar frase toda maiúscula
// function myFunction(param) {
//     let newString3 = param.toUpperCase()
//     console.log(newString3)
// }
// myFunction(string)

//4
//Retornar as letras unidas por um hífen
// function myFunction(param) {
//     let newString4 = param.split('').join('-')
//     console.log(newString4)
// }
// myFunction(string)

//FRASES
const frase = 'Vou gabaritar meu whiteboard'
//1
//Retornar cada palavra separada

// function myFunction(param){
//     let newFrase = param.split(' ')
//     console.log(newFrase)
// }
// myFunction(frase)

//2
//Retornar frase separada pela letra 'r'

// function myFunction(param) {
//     let newFrase1 = param.split('r')
//     console.log(newFrase1)
// }
// myFunction(frase)

//3
//Retornar a quantidade de palavras dessa frase

// function myFunction(param) {
//     let newFrase2 = param.split(' ')
//     console.log(`Quantidade de palavras: ${newFrase2.length}`)   
// }
// myFunction(frase)

//4
//Retornar quantidade de palavras com número par

// function myFunction(param) {
//     let array = param.split(' ')
//     let counter = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length % 2 === 0) {
//             counter++
//         }
//     }
//     console.log(counter)
// }
// myFunction(frase)

//5
//Retornar todas com tamanho par em letra maiúscula

// function myFunction(param) {
//     let array = param.split(' ')
//     let
// }
// myFunction(frase)