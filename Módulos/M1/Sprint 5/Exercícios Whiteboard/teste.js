// Deve criar uma função que receberá uma frase como parametro. 
// O dev deverá retornar um array onde contem as palavras com mais de 4 letras, 
// caso possua menos deverá adicionar a quantidade de letras.
// lessThenFour("Eu vou comer um prato de macarrão");


function lessThenFour(param) {
    param = param.split(' ')
    let array = []

    for (let i = 0; i < param.length; i++) {
        if (param[i].length > 4) {
            array.push(param[i])
        } else {
            array.push(param[i].length)
        }
    }
    return array
}
console.log(lessThenFour('Eu vou comer um prato de macarrão'))

let str = 'peixinho'

for(let i = 0; i < str.length; i++){
      if(str[i] == 'i'){
          console.log('peixinho')
      }
}
