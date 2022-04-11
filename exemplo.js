function myFunction(n1, n2, n3, n4) {
    if (typeof n1 ==  'number' && typeof n2 ==  'number' && typeof n3 ==  'number' && typeof n4 ==  'number') {
        console.log(n1+n2+n3+n4)
    }
    else {
        console.log('Preciso que as notas sejam números!')
    }
}
myFunction(1, 2, 3, 4)