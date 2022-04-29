let conta = 200
const notas = [200, 100, 50, 20, 10, 5, 2]
let counter = [0, 0, 0, 0, 0, 0, 0]
let contarest = conta
    for (let i = 0; i < notas.length; i++) {
        while (notas[i] <= conta) {
            contarest = conta - notas
            counter[i]++
        }
    }

