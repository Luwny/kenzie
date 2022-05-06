function snapCrackle(maxValue) {
    let result = ''
    for (let i = 1; i <= maxValue; i++) {
        if (i % 2 != 0) {
            if (i % 5 === 0) {
                result += 'SnapCrackle, '
            } else {
                result += 'Snap, '
            }
        } else if (i % 5 === 0) {
            result += 'Crackle, '
        } else {
            result += i + ', '
        }
    }
    return result.slice(0, -2)
}
console.log('Snapcrackle:')
console.log(snapCrackle(12))

function snapCracklePrime(maxValue) {
    let primeValue = ""
    for (let i = 1; i <= maxValue; i++) {
        let counterP = 0
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                counterP++
            }
        }
        if (i % 2 === 1) {
            primeValue += "Snap"
        } else if (i % 2 == 1 && i % 5 === 0) {
            primeValue += "SnapCrackle"
        }
        if (i % 5 === 0) {
            primeValue += "Crackle"
        }
        if (counterP <= 2 && i !== 1) {
            primeValue += "Prime"
        }
        if (counterP > 2 && i % 2 === 0 && i % 5 !== 0) {
            primeValue += i
        }
        primeValue += ", "
    }
    return primeValue.slice(0, -2)
}
console.log('SnapCracklePrime:')
console.log(snapCracklePrime(15))