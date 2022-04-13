// Ativ. 1
//let valor1 = 15
//let valor2 = 876
//console.log (valor1+valor2)

//Ativ. 2
//function myFunction(valor) {
//    console.log(typeof valor);
//}
//myFunction("text");

//Ativ. 3
function myFunction(n1, n2, n3, n4) {
    if (typeof n1 ==  'number' && typeof n2 ==  'number' && typeof n3 ==  'number' && typeof n4 ==  'number') {
        console.log(n1+n2+n3+n4)
    }
    else {
        console.log('O campo só pode receber números.')
    }
}
myFunction(8, '6', 9, 3)