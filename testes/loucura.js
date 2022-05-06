const arrayStrings = ['leão', 'onças', 'macaco', 'passaros', 'jacares', 'peixe', 'mamute']
let counterSing = 0
let counterPlu = 0
let arraySing = []
let arrayPlu = []

function myFunction(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i].slice(-1) === 's'){
            counterPlu++
            arrayPlu.push(' ' +string[i] )
        } else {
            counterSing++
            arraySing.push(' ' + string[i])
        }
    }
    return `São ${counterPlu}, plurais => ${arrayPlu}, e ${counterSing} singular =>${arraySing}`
}
console.log(myFunction(arrayStrings))