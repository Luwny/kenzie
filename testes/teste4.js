function highAndLow(numbers) {
  let newArray = numbers.split(' ').map(Number)
  let newVarPos = newArray[0]
  let newVarNeg = newArray[0]
  console.log(newArray)
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > newVarPos) {
      newVarPos = newArray[i]
    } 
    if (newArray[i] < newVarNeg) {
      newVarNeg = newArray[i]
    }
  } 
  return `${newVarPos} ${newVarNeg} `

}
console.log(highAndLow('1 222 22223'))