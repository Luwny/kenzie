function cashMachine(sf,vvd,vs) {
    let notasDisp = [200,100,50,20,10,5,2] //-> utilizado para exemplificar o valor das notas que teremos disponíveis
                                          //no sistema.
    let qtd = [] // -> armazenamento da quantidade de notas usadas para sacar o dinheiro.
    let valorSaque = vs
    if (vs < sf){ //implementei a mensagem de erro, caso o valor do saque seja maior que o valor em conta (salário)
      for (let i = 0; i < notasDisp.length; i++){
        if (valorSaque >= notasDisp[i] ){ 
          let notas =  Math.floor(valorSaque / notasDisp[i]) 
          if (notas > 1){
            qtd.push (notas +  " notas de " + notasDisp[i])
          }
          else {
            qtd.push (notas +  " nota de " + notasDisp[i])
          }
          valorSaque = valorSaque - ( notas * notasDisp[i] )
        }
      }
      console.log("Saque feito com sucesso!" + " Valor: "+  vs)
      console.log (qtd.join(', ')) //criar como array e converter em string foi a forma que encontrei para resolver
                                   //o problema da divisão de palavras não terminar com ", " no final do texto todo.
      console.log ("Saldo restante: " + (sf - vs))
    }
    else {
      console.log("Valor de saque excede valor em conta")
      console.log("Valor atual: " + sf)
    }
   
    }
  