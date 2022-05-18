function mtable(n){
    let tabuada = []
    for(let i = 0; i <= n; i++){
        tabuada.push([0])
        for(let j = 1; j <= n; j++){
            tabuada[i].push(j*i)
        }
    }
    return tabuada
}
console.table(mtable(4))