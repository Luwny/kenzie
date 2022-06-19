function newFlatMap(array, depth = 1, callback) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object') {
            newArr.push(callback(array[i], i, array), depth, newArr)
        } else {
            newArr.push(array[i])
        }
    }
    return newArr
}