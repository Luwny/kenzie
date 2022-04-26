const array1 = ['Adam', 'Gabriel', 'Wesley', 'Carol', 'Thalles']


function award(winNum) {
    let winnersName = []
    for (let i = 0; i < winNum.length; i+=2) {
    winnersName.push(winNum[i])       
    }
    console.log(winnersName)
}
award(array1)