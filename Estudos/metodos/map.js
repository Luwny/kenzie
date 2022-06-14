const array = [1, 2, 3]

function newMap(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array))
    }
    return newArray
}

function callbackMapTest(elem, i, array) {
    console.log(`${elem+1}`)
    console.log('index', i, array)
}

newMap(array, callbackMapTest)
