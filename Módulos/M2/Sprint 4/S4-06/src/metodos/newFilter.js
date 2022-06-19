function newFilter(array, callback){
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, arr)) {
            newArr.push(array[i])
        }
    }
    return newArr
}
