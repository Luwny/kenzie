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

let counterCarrinho = 0

function incrementar() {
    counterCarrinho++
}
function decrementar() {
    counterCarrinho--
}

//Função pra exibir os itens na seção de produtos
function exibirProdutos() {    
    products.forEach((element) => {
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

//Função pra clicar no botão e add produto
function addEventListener(elementButton) {
    elementButton.addEventListener('click', element => {
        console.log(selected)
        const retorno = products.find(function (product) {
            if (product.id == element.target.id) {
                incrementar()
                return true
            }                
        })
        retorno.listIndex = counterCarrinho
        selected.push(retorno)                       
        refreshCarrinho()
    })
}

//Função pra atualizar o carrinho
function refreshCarrinho() {
    carrinho()
    carrinhoTotal()
}
//Selecionar H1 e UL
const h1Carrinho = document.querySelector('.h1Carrinho')
const ulSelectedProducts = document.querySelector('.selectedProducts')
asideCarrinho.append(h1Carrinho, ulSelectedProducts)

//Função para exibir os itens no carrinho de compras.
function carrinho() {
    ulSelectedProducts.innerHTML = ""
//     for (let i = 0; i < selected.length; i++) {
//         const element = selected[i]
//         const li = document.createElement('li')
//         const name = element.title
//         const price = element.price
//         let img = element.img
//         const id = counterCarrinho
//         li.innerHTML = `   
//             <img src="${img}" alt="Descrição do Item">
//                     <p>${name}</p>
//                     <p class="price">R$ ${price.toFixed(2).replace('.', ',')}</p>      
//         `
//         const dltButton = document.createElement('button')
//         dltButton.innerText = "-"
//         dltButton.id = `deletebtn-${id}`
//         li.id = `itemcarrinho-${id}`
//         li.appendChild(dltButton)
//         ulSelectedProducts.appendChild(li)
//         const elementButton = document.getElementById(`deletebtn-${id}`)

//         elementButton.addEventListener('click', element => {
//             carrinho()            
//         })
//     }
// }

    selected.forEach((element, index) => {
        const li = document.createElement('li')
        const name = element.title
        const price = element.price
        let img = element.img
        const id = index
        selected[index].listIndex = `itemcarrinho-${id}`
        li.innerHTML = `   
            <img src="${img}" alt="Descrição do Item">
                    <p>${name}</p>
                    <p class="price">R$ ${price.toFixed(2).replace('.', ',')}</p>      
        `
        const dltButton = document.createElement('button')
        dltButton.innerText = "-"
        dltButton.id = `deletebtn-${id}`
        li.id = `itemcarrinho-${id}`
        li.appendChild(dltButton)
        ulSelectedProducts.appendChild(li)
        dltButton.addEventListener('click', element => {
            carrinho()
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



//Selecionando botão finalizar compras


buttonFinal.addEventListener('click', (event) => {
    console.log('botão finalizar compra')
})

//Selecionando botão de add dos produtos
// document.querySelector('body').addEventListener('click', event => {
//     console.log(event.target)
//     products.forEach(element => {
//         if (event.target.id == element.id) {
//             console.log('oi')
//         }
//     })
// })