//Teste 3 - criar uma função que recebe 2 parâmetros,
//um array de números e uma string em minusculo com o mesmo tamanho
//Sua função deve adicionar cada letra da sua string em maiúsculo em cada elemento do seu array que for múltiplo de 7 ou negativo
// const array = [1, 7, -9, 8, 6, 49, -19, 12, 21, 70];
// const string = "hamburguer";

// function myFunction(numeros, frase) {
//     frase = frase.toUpperCase().split('')
//     let arrayNova = []
//     for (let i = 0; i < frase.length; i++) {
//         if (array[i] % 7 == 0 || array[i] < 0) {
//             arrayNova.push(numeros[i] + frase[i])    
//         } else {
//             arrayNova.push(numeros[i])
//         }
//     }
//     return arrayNova
// }
// console.log(myFunction(array, string))


const arr1 = [5, 10, 15];
const arr2 = ["5", "11", "15"];
const result = [];

for (let index = 0; index < arr1.length; index++) {
  if (arr1[index] - arr2[index] === 0) {
    result.push(arr1[index]);
  } else {
    result.push((arr2[index] += arr1[index]));
  }
}
console.log(result);