function newFlatMap(array, callback) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object') {
            newArr.push(callback(...array[i], i, array))
        } else {
            newArr.push([callback(array[i], i, array)])
        }
    }
    return newArr
}