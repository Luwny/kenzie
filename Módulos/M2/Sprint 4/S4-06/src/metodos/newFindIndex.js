function newFindIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === array[i]) {
            return array[i]
        }        
    }
    return -1
}
