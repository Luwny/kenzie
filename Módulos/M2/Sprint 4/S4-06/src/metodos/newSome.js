function newSome(array, callback) {
    let teste = false
    
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === array[i]) {
            teste = true
        }
    }
    return teste
}
