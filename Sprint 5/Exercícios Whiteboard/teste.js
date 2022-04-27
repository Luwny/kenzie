const array = [120, 300, -250, 200, -250, 600]
function gestaoFinanceira(param) {
    let counter = 0
    for (let i = 0; i < param.length; i++) {
        if (Math.sign(param[i]) === 1) {
            counter++
        }
    }
    console.log (counter)
}
gestaoFinanceira(array);

console.log(Math.sign(param[i]))