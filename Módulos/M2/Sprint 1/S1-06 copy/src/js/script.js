//Selecionando main
const main = document.querySelector('main')

//Criando barrinha de pesquisa
const nav = document.querySelector('.navBar')
const contentSearchBar = document.createElement('div')
contentSearchBar.classList.add('contentSearchBar')
contentSearchBar.innerHTML = `<input type="text" placeholder="Pesquisar por..." class="input">
`
nav.appendChild(contentSearchBar)
main.appendChild(nav)

//Selecionando botões
const buttonTodos = document.querySelector('.todos')
const buttonHorti = document.querySelector('.horti')
const buttonPani = document.querySelector('.pani')
const buttonLati = document.querySelector('.lati')

function filtrarPreço(lista = produtos) {
    let sum = 0
    lista.forEach(element => {
        return sum += element.preco
    })
    const valorAt = document.querySelector('.valorAtual')
    valorAt.innerText = `R$ ${sum.toFixed(2).replace('.', ',')}`
}

//Criando links dos botões
buttonTodos.addEventListener('click', () => {
    mostrarProdutos()
    filtrarPreço()
})

buttonHorti.addEventListener('click', () => {
    const hortifruit = produtos.filter(element => {
        return element.secao.includes('Hortifruit')
    })
    mostrarProdutos(hortifruit)
    filtrarPreço(hortifruit)
})

buttonLati.addEventListener('click', () => {
    const laticinios = produtos.filter(element => {
        return element.secao.includes('Laticínios')
    })
    mostrarProdutos(laticinios)
    filtrarPreço(laticinios)
})
buttonPani.addEventListener('click', () => {
    const panificadora = produtos.filter(element => {
        return element.secao.includes('Panificadora')
    })
    mostrarProdutos(panificadora)
    filtrarPreço(panificadora)
})
//Coletando input.value e pesquisando
const input = document.querySelector('.input')
input.addEventListener('keyup', () => {    
    const input = document.querySelector('.input').value.toLowerCase().trim()
    const filtro = produtos.filter(element => {
        return element.nome.toLowerCase().includes(input)
    })
    mostrarProdutos(filtro)
    filtrarPreço(filtro)
})



//Soma valor da seção Todos
function somaValorSecaoTodos() {
    let sum = 0
    const totalSection = document.querySelector('.totalSection')
    main.appendChild(totalSection)
    produtos.forEach(element => {
        return sum += element.preco
    })
    totalSection.innerHTML =
        `<p><i class="fa fa-spinner" aria-hidden="true"></i> Valor total dos produtos da   sessão selecionada</p>
                            <span class="valorAtual">R$ ${sum.toFixed(2).replace('.', ',')}</span>`
} somaValorSecaoTodos()

//Criando cards dinâmicos
const contentCard = document.querySelector('.contentCard')
main.appendChild(contentCard)

function criarCard(element) {
    const nome = element.nome
    const preco = element.preco
    const categoria = element.categoria
    const img = element.img
    const box = document.createElement('div')
    box.classList.add('box')
    const imgBox = document.createElement('img')
    imgBox.src = img
    imgBox.alt = ""
    const pNome = document.createElement('p')
    pNome.classList.add('productName')
    pNome.innerText = nome
    const pCategoria = document.createElement('p')
    pCategoria.classList.add('productCategory')
    pCategoria.innerText = categoria
    const pPrice = document.createElement('p')
    pPrice.classList.add('productPrice')
    pPrice.innerText = `R$ ${preco.toFixed(2).replace('.', ',')}`
    box.append(imgBox, pNome, pCategoria, pPrice)
    return box
}

//Função de exibir os itens
function mostrarProdutos(lista = produtos) {
    contentCard.innerHTML = ""
    lista.forEach(element => {
        const box = criarCard(element)
        contentCard.appendChild(box)
    })
} mostrarProdutos()