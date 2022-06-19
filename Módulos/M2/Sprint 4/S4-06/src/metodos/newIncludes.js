function newIncludes(array, element, i = 0) {
    let teste = false
    for (i ; i < array.length; i++) {
        if (array[i] === element) {
            teste = true
        }
    }
    return teste
}
