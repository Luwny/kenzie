function newReduce(array, callback) {
    let teste = 0
    for (let i = 0; i < array.length; i++) {
        teste = callback(teste, array[i], i, array)
    }
    return teste
}
