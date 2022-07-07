const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function sample6(c) {
    let menorNumero = -1
    for (let i = 0; i < c.length; i++) {
        if (menorNumero < c[i]) {
            menorNumero = c[i]        
        }
    }
    return menorNumero    
}
console.log(sample6(sampleArray));