//Selecionando body, main e header, e colocando como filha do body.
const body = document.querySelector('body')
const header = document.querySelector('header')
const main = document.querySelector('main')
body.append(header, main)

//Criando NAV estática via innerHTML
const nav = document.createElement('nav')
nav.innerHTML = `<nav>
<h1>Snows Market</h1>
<div class="campoPesquisa">
    <input type="text" name="pesquisar" id="pesquisa" placeholder="Nome do produto">
    <button>Pesquisar</button>
</div>
<ul>
    <li> <a href="#">Todos</a></li>
    <li><a href="#">Hamburguer</a></li>
    <li><a href="#">Pizzas</a></li>
    <li><a href="#">Frios</a></li>
</ul>
</nav>`
header.appendChild(nav)

//Seleção da UL vitrine, estática / aside carrinho de compras
const ulVitrine = document.querySelector('.vitrine')
const asideCarrinho = document.querySelector('.carrinho')
main.append(ulVitrine, asideCarrinho)

//Função pra exibir os itens na seção de produtos
function exibirProdutos() {
    products.forEach(element => {
        const li = document.createElement('li')
        const name = element.title
        const price = element.price
        const description = element.description
        let img = element.img
        ulVitrine.appendChild(li)
        li.innerHTML =
            `
                <img src="${img}" alt="Descrição do Item">
                <p class="productName">${name}</p>
                <p class="productDescription">${description}</p>
                <p class="price">R$ ${price.toFixed(2).replace('.', ',')}</p>
                <button class="addProduct">+</button>
                `
        const buttonAdd = document.querySelector('.addProduct')
        console.log(buttonAdd)
    })
}
exibirProdutos()

//Selecionar H1 e UL
const h1Carrinho = document.querySelector('.h1Carrinho')
const ulSelectedProducts = document.querySelector('.selectedProducts')
asideCarrinho.append(h1Carrinho, ulSelectedProducts)

//Função para exibir os itens no carrinho de compras.
function carrinho() {
    selected.forEach(element => {
        const li = document.createElement('li')
        const name = element.title
        const price = element.price
        let img = element.img
        li.innerHTML = `   
            <img src="${img}" alt="Descrição do Item">
                    <p>${name}</p>
                    <p class="price">R$ ${price.toFixed(2).replace('.', ',')}</p>
                    <button>-</button>        
        `
        ulSelectedProducts.appendChild(li)
    })
}
carrinho()

//Selecionando botão pra adicionar ao carrinho


//Função pra add itens ao carrinho de compras

//Seleção da UL para resultados
const ulTotalProducts = document.querySelector('.totalProducts')
ulSelectedProducts.appendChild(ulTotalProducts)

//Função para somar valor e quantidade do carrinho
function carrinhoTotal() {
    let sum = 0
    let counter = 0
    const li = document.createElement('li')
    const li2 = document.createElement('li')
    selected.forEach(element => {
        sum += element.price
        counter++
        li.id = element.id
        li.innerHTML = `
        Quantidade de produtos: ${counter}
        `
        li2.innerHTML = `
        Valor total: R$ ${sum.toFixed(2).replace('.', ',')} 
        `
        ulTotalProducts.append(li, li2)
    })
}
carrinhoTotal()



//Selecionando botão finalizar compras
const buttonFinal = document.querySelector('.buttonFinal')
ulTotalProducts.appendChild(buttonFinal)

buttonFinal.addEventListener('click', function (event) {
    console.log('botão finalizar compra')
})



