const button = document.querySelector('button')
const p = document.querySelector('p')
let contador = 0
button.addEventListener('click', (event) => {
    contador++
    p.innerText = contador
})

const paragrafo = document.getElementById('meuParagrafo')
const botao = document.getElementById('meuBotao')

botao.addEventListener('click', function(){ 
    paragrafo.classList.remove('escondido')
})

const botao2 = document.getElementById('removeButton')

botao2.addEventListener('click', function() {
    paragrafo.classList.add('escondido')
})

const body = document.querySelector('body')
    body.addEventListener('click', function(event){
        console.log(event)
    })