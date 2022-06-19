function newFlat(array, depth = 1, newArr = []) {
    if (depth == 0) {
        return newArr
    }
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object') {
            if (depth == 1) {
                newArr.push(...array[i])
            } else {
                newFlat(array[i], depth - 1, newArr)
            }
        } else {
            newArr.push(array[i])
        }
    }
    return newArr
}
