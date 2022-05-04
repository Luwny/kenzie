function add(n1, n2) {
    return n1 + n2
}
console.log(`Função ADD:`)
console.log(add(2, 4))

function multiply(n1, n2) {
    let result = 0
    for (let i = 0; i < n2; i = add(i, 1)) {
        result = add(n1, result)
    }
    return result
}
console.log(`Função MULTIPLY:`)
console.log(multiply(6, 8))

function power(n) {
    let result = 1
    for (let i = 1; i <= n; i = add(i, 1)) {
        result = multiply(i, result)
    }
    return result
}
console.log(`Função EXPONENCIAL:`)
console.log(power(5))

function factorial(n) {

    let result = 1

    for (let i = 1; i <= n; i = add(i, 1)) {
        result = multiply(i, result)
    }

    return result
}
console.log(`Função FATORIAL:`)
console.log(factorial(4))

function fibonacci(n) {
    let n1 = 0
    let n2 = 1
    let result = 0

    if (n === 1) {
        return 0
    }
    for (let i = 2; n >= i; i = add(i, 1)) {
        result = add(n1, n2)
        n1 = n2
        n2 = result
    }
    return n2
}

console.log(`Função FIBONACCI:`)
console.log(fibonacci(5)) 
