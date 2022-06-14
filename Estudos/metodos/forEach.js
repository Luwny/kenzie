const arr = ['teste', 1, 'teste2', 2, 'teste3', 3]

function newForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array)
    }
}

function callBackForEach(element, i, array) {
    return (array[i] = element + ' estou funcionando ')    
}

newForEach(arr, callBackForEach)
console.log(arr)


arr.forEach(elem => {
    console.log(elem)
})