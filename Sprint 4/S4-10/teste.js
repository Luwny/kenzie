function teste2 (array){
    let sum = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            sum += array[i]
        }
    }
    console.log(sum)
}
teste2([5,3,2,10,1,1])