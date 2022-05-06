//crie uma função que receba uma array como parametro
//a função deve retornar quantas letras cada palavra tem como resultado, se for um número, retorne o indice que está localizado
//exemplo: macaco, pateta, indio, 32, 44
// retorno: 6, 6, 5, 3, 4
const wtf = ['fray', 'adão', 'axel', 232 , 'carlos', 2324, 'carioca', 'rony' ]
function myFunction(array){ 
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'string') {
            newArray.push(array[i].length)
        } else {
            newArray[i]
        }
    }
    return newArray
}
console.log(myFunction(wtf))
