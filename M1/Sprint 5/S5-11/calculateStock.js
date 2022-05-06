function calculateStock(currentQTD, currentMAX, currentMIN) {
    let currentMED = (currentMAX + currentMIN) / 2
    if (currentQTD >= currentMED) { 
        return 'Não efetuar compra.'
    } else {
        return 'Efetuar compra.'
    }
}
console.log(calculateStock(500, 1000, 100))