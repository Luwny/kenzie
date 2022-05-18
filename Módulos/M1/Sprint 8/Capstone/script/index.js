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
    <input type="text" name="pesquisar" id="pesquisa" placeholder="Barra de pesquisa">
</div>
<ul>
    <li> <a href="#"class="todos">Todos</a></li>
    <li><a href="#" class="burguer">Hamburguer</a></li>
    <li><a href="#" class="pizza">Pizzas</a></li>
    <li><a href="#" class="frio">Frios</a></li>
</ul>
</nav>`
const todosBtn = nav.querySelector('.todos')
const burguerBtn = nav.querySelector('.burguer')
const pizzaBtn = nav.querySelector('.pizza')
const friosBtn = nav.querySelector('.frio')
header.appendChild(nav)

const btnPesquisa = nav.querySelector('.btnPesquisa')

const inputPesquisa = document.getElementById('pesquisa')

//Barra de pesquisa
inputPesquisa.addEventListener('keyup', event => {
    const inputPesquisa = document.getElementById('pesquisa').value.toLowerCase().trim()
    const filtroPesquisa = products.filter(element => {
        return element.title.toLowerCase().includes(inputPesquisa)
     })
     exibirProdutos(filtroPesquisa)
     if (inputPesquisa === '') {
         refreshCarrinho()
     }
})

//Botão filtro todos
todosBtn.addEventListener('click', event => {
    event.preventDefault()
    exibirProdutos()
})

//Botão filtro hamburguer
burguerBtn.addEventListener('click', event => {
    event.preventDefault
    const filtroBurguer = products.filter(element => {
       return element.category.includes('hamburguer')
    })
    exibirProdutos(filtroBurguer)
})

//Botão filtro pizzas
pizzaBtn.addEventListener('click', event => {
    event.preventDefault
    const filtroPizza = products.filter(element => {
       return element.category.includes('pizza')
    })
    exibirProdutos(filtroPizza)
})

//Botão filtro frios
friosBtn.addEventListener('click', event => {
    event.preventDefault
    const filtroFrios = products.filter(element => {
       return element.category.includes('frio')
    })
    exibirProdutos(filtroFrios)
})

//Seleção da UL vitrine, estática / aside carrinho de compras
const ulVitrine = document.querySelector('.vitrine')
const asideCarrinho = document.querySelector('.carrinho')
asideCarrinho.classList.add('display')
main.append(ulVitrine, asideCarrinho)

let counterCarrinho = 0

function incrementar() {
    counterCarrinho++
}

function decrementar() {
    counterCarrinho--
}

//Função pra exibir os itens na seção de produtos
function exibirProdutos(database=products) {
    ulVitrine.innerHTML = ""
    database.forEach((element) => {
        const li = document.createElement('li')
        const name = element.title
        const price = element.price
        const description = element.description
        const category = element.category
        let img = element.img
        const id = element.id
        ulVitrine.appendChild(li)
        li.innerHTML =
            `
                <img src="${img}" alt="Descrição do Item">
                <p class="productName">${name}</p>
                <p class="productDescription">${description}</p>
                <p class="price">R$ ${price.toFixed(2).replace('.', ',')}</p>
                `

        //Criando botão de add ao carrinho
        const addButton = document.createElement('button')
        addButton.classList.add('addButton')
        addButton.id = element.id
        addButton.innerText = '+'
        li.appendChild(addButton)
        const elementButton = document.getElementById(element.id)
        addEventListener(elementButton)
    })
}
exibirProdutos()

//Função pra exibir carrinho, caso tenha algum item.
function exibirCarrinho() {
    if (selected.length > 0) {
        asideCarrinho.classList.remove('display')
    } else {
        asideCarrinho.classList.add('display')
    }    
}

//Função pra clicar no botão e add produto
function addEventListener(elementButton) {
    elementButton.addEventListener('click', element => {
        const retorno = products.find(function(product) {
            if (product.id == element.target.id) {
                return true
            }
        })

        let novoRetorno = {...retorno }
        selected.push(novoRetorno)
        refreshCarrinho()
    })
}

//Função pra atualizar o carrinho
function refreshCarrinho() {
    carrinho()
    carrinhoTotal()
    exibirCarrinho()
}

//Selecionar H1 e UL
const h1Carrinho = document.querySelector('.h1Carrinho')
const ulSelectedProducts = document.querySelector('.selectedProducts')
asideCarrinho.append(h1Carrinho, ulSelectedProducts)

//Função para exibir os itens no carrinho de compras.
function carrinho() {
    ulSelectedProducts.innerHTML = ""
    selected.forEach((element, index) => {
        const li = document.createElement('li')
        const name = element.title
        const price = element.price
        let img = element.img
        const id = index
        element.listIndex = id;
        li.innerHTML = `   
            <img src="${img}" alt="Descrição do Item">
                    <p>${name}</p>
                    <p class="price">R$ ${price.toFixed(2).replace('.', ',')}</p>      
        `
        const dltButton = document.createElement('button')
        dltButton.innerText = "-"
        dltButton.id = id
        li.id = `itemcarrinho-${id}`
        li.appendChild(dltButton)
        ulSelectedProducts.appendChild(li)

        //Função pra clicar no botão e remover produto do carrinho
        dltButton.addEventListener('click', event => {
            selected = selected.filter((item) => item.listIndex != event.target.id)
            refreshCarrinho()

        })
    })
}


//Seleção da UL para resultados
const ulTotalProducts = document.querySelector('.totalProducts')
asideCarrinho.appendChild(ulTotalProducts)

//Função para somar valor e quantidade do carrinho
function carrinhoTotal() {
    ulTotalProducts.innerHTML = ""
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

const buttonFinal = document.querySelector('.buttonFinal')
asideCarrinho.appendChild(buttonFinal)

buttonFinal.addEventListener('click', (event) => {
    console.log('botão finalizar compra')
})