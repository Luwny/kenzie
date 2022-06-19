function newSlice(array, inicio = 0, fim = 0) {
   let index
   
    if (inicio < 0) {
        index = array.length - Math.abs(inicio)
    } else {
        index = inicio
    }

    let newArr = []
    for (let i = 0; i< array.length; i++) {
        newArr.push(array[i])
    }
    return newArr
}
