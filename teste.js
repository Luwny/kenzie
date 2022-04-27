function countPositivesSumNegatives(input) {
    let counterPos = 0
    let counterNeg = 0
    let result = []
for (let i = 0; i < input.length; i++) {
    if (Math.sign(input[i]) == 1) {
        counterPos++
    } if (Math.sign(input[i]) == -1) {
        counterNeg += Math.abs(input[i]) * -1
    }
}
result.push(counterPos)
result.push(counterNeg)

console.log(result)

}
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])