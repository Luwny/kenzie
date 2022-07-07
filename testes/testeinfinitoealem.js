function getDiagonal(n) {
    let matrizQuadrada = []
    for (let i = 0; i < n; i++) {
        if (i % 3 == 0) {
            matrizQuadrada.push(i)
        }
    }
    return matrizQuadrada
}
console.log(getDiagonal(9))