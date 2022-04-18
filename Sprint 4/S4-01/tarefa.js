const chefe = [ 
    ["Nome", "Boss"],
    ["Idade", 89],
    ["Cidade", "Rio de Janeiro"],
    ["Estado", "RJ"],
    ["Ano de Nascimento", 1933]
]
// 1º Criar 1 função, com 2 características
//2º Criar variável para receber senha
//3º Concantenar as informações, inserindo um símbolo
//4ª Retornar nova senha (resultado)

// função 1
function boss(info1, info2) {
return info1 +"@"+ info2
}
console.log("Função 1:") 
console.log(boss(chefe[0][1], chefe[3][1]))
// função 2
function reverseBoss (info1, info2) {
    let split1 = info1.split("").reverse().join("")
    let split2 = info2.split("").reverse().join("")
    return split1 +"@"+ split2    
}
console.log("Função 2:")
console.log(reverseBoss(chefe[0][1], chefe[3][1]))
// função 3
function uppercaseBoss (info1, info2) {
    let split1 = info1.split("").reverse().join("")
    let split2 = info2.split("").reverse().join("")
    let password = split1 +"@"+ split2   
    if (password[0] != password[0].toUpperCase) {
        let firstWord = password[0].toUpperCase() + password.substr(1)
        return firstWord.substring(0, firstWord.length - 1).concat("r")
    } 
}
console.log("Função 3:")
console.log(uppercaseBoss(chefe[0][1], chefe [3][1]))