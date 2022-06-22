function newIndexOf(array, element) {
    let result = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i
        }
    }
    return result    
}
