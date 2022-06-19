function newJoin(array, separator) {
    let string = ''
    
    if (array.length == 0) {
        return ''
    }

    for (let i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            string += array[i] + separator
        } else {
            string += arr[i]
        }
    } 
    return string
}
