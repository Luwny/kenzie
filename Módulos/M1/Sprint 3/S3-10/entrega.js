/* FUNÇÃO */
function position(firstPlace, secondPlace, thirdPlace) {
    /* ARRAY */
    nomeDosPlayers = [firstPlace, secondPlace, thirdPlace]
    /* VERIFICAÇÃO SE O DANIEL ESTÁ EM PRIMEIRO  */
    if ("Daniel" != nomeDosPlayers[0]) {
        /* VERIFICAÇÃO SE O DANIEL ESTÁ EM SEGUNDO */
        if ("Daniel" == nomeDosPlayers[1]) {
            console.log(`1º Colocado: ${nomeDosPlayers[1]}`)
            console.log(`2º Colocado: ${nomeDosPlayers[0]}`)
            console.log(`3º Colocado: ${nomeDosPlayers[2]}`)
        }
        /* VERIFICAÇÃO SE O DANIEL ESTÁ EM TERCEIRO */
        else if ("Daniel" == nomeDosPlayers[2]) {
            console.log(`1º Colocado: ${nomeDosPlayers[0]}`)
            console.log(`2º Colocado: ${nomeDosPlayers[2]}`)
            console.log(`3º Colocado: ${nomeDosPlayers[1]}`)
        }
    } /* CASO DANIEL ESTEJA EM PRIMEIRO */
    else {
        console.log(`1º Colocado: ${nomeDosPlayers[0]}`)
        console.log(`2º Colocado: ${nomeDosPlayers[1]}`)
        console.log(`3º Colocado: ${nomeDosPlayers[2]}`)
    }
}
/* DEFINIÇÕES DAS POSIÇÕES E TESTES */
console.log("Caso Daniel esteja em primeiro lugar:")
position("Daniel", "Rafael", "Manoel")
console.log("Caso Daniel esteja em segundo lugar:")
position("Rafael", "Daniel", "Manoel")
console.log("Caso Daniel esteja em terceiro lugar:")
position("Rafael", "Manoel", "Daniel")