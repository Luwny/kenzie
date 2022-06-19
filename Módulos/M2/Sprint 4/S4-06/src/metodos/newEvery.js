function newEvery(array, callback) {
    let newArr = []
    let teste 
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === array[i]) {
            newArr.push('true')
        }
        if (array.length === newArr.length) {
            return teste = true
        } else {
            return teste = false
        }
    }
    
    
    return teste
}
