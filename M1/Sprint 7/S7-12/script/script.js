//Selecionando HTML
const body = document.querySelector('body')
const main = document.querySelector('main')

//Div Geral
const divGeral = document.createElement('div')
divGeral.classList.add('geralBox')

//Divs filhas da Div Geral criadas e sendo atribuidas
const divTitle = document.createElement('div')
divTitle.classList.add('title')
const divItem = document.createElement('div')
divItem.classList.add('item')
const ul = document.createElement('ul')
const divResult = document.createElement('div')
divResult.classList.add('result')
const divEnd = document.createElement('div')
divEnd.classList.add('end')
divGeral.append(divTitle, divItem, ul, divResult, divEnd)

//Título filha da divTitle
const h2Title = document.createElement('h2')
h2Title.innerText = 'Virtual Market'
divTitle.appendChild(h2Title)

//Informações dentro da divItem
const h4Info = document.createElement('h4')
h4Info.innerText = 'Item'
const h4Value = document.createElement('h4')
h4Value.innerText = 'Valor'
divItem.append(h4Info, h4Value)

//Informações totais na divResult
const ulResult = document.createElement('ul')
ulResult.classList.add('productDetails')
divResult.appendChild(ulResult)
const liResult = document.createElement('li')
liResult.classList.add('productSome')
const pTotal = document.createElement('p')
const pPrice = document.createElement('p')
pTotal.innerText = 'Total'
pPrice.classList.add('totalPrice')
ulResult.appendChild(liResult)
divResult.appendChild(ulResult)
liResult.append(pTotal, pPrice)

//Botão dentro da divEnd
const button = document.createElement('button')
button.classList.add('end')
button.innerText = 'Finalizar compra'
divEnd.appendChild(button)

//Atribuindo divs pais
main.appendChild(divGeral)
body.appendChild(main)

function exibir() {
    let sum = 0
    const totalPrice = document.querySelector('.totalPrice')
    items.forEach(item => {
        const li = document.createElement('li')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        li.id = item.id
        sum += item.price
        totalPrice.innerHTML = `R$ ${sum.toFixed(2).replace('.',',')}`
        p1.classList.add('itemName')
        p2.classList.add('itemPrice')
        p1.innerHTML = item.name
        p2.innerHTML = `R$ ${item.price.toFixed(2).replace('.',',')}`
        li.append(p1, p2)
        ul.appendChild(li)
    }) 
}
exibir()