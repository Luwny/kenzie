const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

console.log('Kata1')

function returnNumber1(num) {
    let result = 0
    let array = []
    for (let i = 1; i <= num; i++) {
        array.push(i)
    }
    return array
}
console.log(returnNumber1(25))

console.log('Kata2')

function returnNumber2(num) {
    let result = 0
    let array = []
    for (let i = 25; i >= num; i--) {
        array.push(i)
    }
    return array
}
console.log(returnNumber2(1))

console.log('Kata3')

function returnNumber3(num) {
    let result = 0
    let array = []
    for (let i = -1; i >= num; i--) {
        array.push(i)
    }
    return array
}
console.log(returnNumber3(-25))

console.log('Kata4')

function returnNumber4(num) {
    let result = 0
    let array = []
    for (let i = -25; i <= num; i++) {
        array.push(i)
    }
    return array
}
console.log(returnNumber4(-1))

console.log('Kata5')

function returnNumber5(num) {
    let result = 0
    let array = []
    for (let i = 25; i >= num; i -= 2) {
        array.push(i)
    }
    return array
}
console.log(returnNumber5(-25))

console.log('Kata6')

function returnNumber6(num) {
    let result = 0
    let array = []
    for (let i = 3; i <= num; i++) {
        if (i % 3 === 0) {
            array.push(i)
        }

    }
    return array
}
console.log(returnNumber6(100))

console.log('Kata7')

function returnNumber7(num) {
    let result = 0
    let array = []
    for (let i = 7; i <= num; i++) {
        if (i % 7 === 0) {
            array.push(i)
        }

    }
    return array
}
console.log(returnNumber7(100))

console.log('Kata8')

function returnNumber8(num) {
    let result = 0
    let array = []
    for (let i = 100; i >= num; i--) {
        if (i % 3 === 0) {
            array.push(i)
        } else if (i % 7 === 0) {
            array.push(i)
        }

    }
    return array
}
console.log(returnNumber8(1))

console.log('Kata9')

function returnNumber9(num) {
    let result = 0
    let array = []
    for (let i = 0; i <= num; i++) {
        if (i % 5 === 0) {
            if (i % 2 != 0) {
                array.push(i)
            }
        }
    }
    return array
}
console.log(returnNumber9(100))

console.log('Kata10')


function returnNumber10(num) {
    let result = 0
    let array = []
    for (let i = 0; i < num.length; i++) {
        array.push(num[i])
    }
    return array
}
console.log(returnNumber10(sampleArray))

console.log('Kata11')


function returnNumber11(num) {
    let result = 0
    let array = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            array.push(num[i])
        }
    }
    return array
}
console.log(returnNumber11(sampleArray))

console.log('Kata12')

function returnNumber12(num) {
    let result = 0
    let array = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 != 0) {
            array.push(num[i])
        }
    }
    return array
}
console.log(returnNumber12(sampleArray))

console.log('Kata13')


function returnNumber13(num) {
    let result = 0
    let array = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 8 === 0) {
            array.push(num[i])
        }
    }
    return array
}
console.log(returnNumber13(sampleArray))

console.log('Kata14')


function returnNumber14(num) {
    let result = 0
    let array = []
    for (let i = 0; i < num.length; i++) {
        array.push(num[i] * num[i])
    }
    return array
}
console.log(returnNumber11(sampleArray))

console.log('Kata15')

function returnNumber15(num) {
    let result = 0
    let array = []
    for (let i = 1; i <= num; i++) {
        result += i
    }
    return result
}
console.log(returnNumber15(20))

console.log('Kata16')

function returnNumber16(num) {
    let result = 0
    let array = []
    for (let i = 0; i < num.length; i++) {
        result += num[i]
    }
    return result
}
console.log(returnNumber16(sampleArray))

console.log('Kata17')

function returnNumber17(num) {
    let result = 0
    let array = []
    let minNumber = num[0]
    for (let i = 0; i < num.length; i++) {
        if (num[i] < minNumber) {
            minNumber = num[i]
        }
    }
    return minNumber
}
console.log(returnNumber17(sampleArray))

console.log('Kata18')

function returnNumber18(num) {
    let result = 0
    let array = []
    let maxNumber = num[0]
    for (let i = 0; i < num.length; i++) {
        if (num[i] > maxNumber) {
            maxNumber = num[i]
        }
    }
    return maxNumber
}
console.log(returnNumber18(sampleArray))