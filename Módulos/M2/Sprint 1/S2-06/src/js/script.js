//Criando variável do carrinho
let selected = []

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
        return element.categoria.toLowerCase().includes(input) || element.secao.toLowerCase().includes(input) || element.nome.toLowerCase().includes(input)
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
    const categoria = element.secao
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
    const divPreco = document.createElement('div') 
    pPrice.innerText = `R$ ${preco.toFixed(2).replace('.', ',')}`

    //Botão de add ao carrinho
    const addButton = document.createElement('button')
    addButton.innerHTML = 'Comprar'
    addButton.id = element.id
    addButton.addEventListener('click', (element) => {
        const retorno = produtos.find(function(product) {            
            if (product.id == element.target.id) {
                return true
            }
        })
        selected.push({...retorno})
        verificaCard()
    })
    divPreco.append(pPrice, addButton)
    divPreco.className = 'divPreco'
    box.append(imgBox, pNome, pCategoria)

    //Criação de cada componente do produto
    for (let i = 0; i < element.componentes.length; i++) {
        const componentes = document.createElement('p')
        componentes.className = 'componentes'
        componentes.innerText = element.componentes[i]
        box.append(componentes, divPreco)
    }
    
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

//Criando carrinho vazio
const divCarrinho   = document.createElement('div')
divCarrinho.className = 'carrinhoContent'
const headCarrinho  = document.createElement('div')
headCarrinho.className = 'headCarrinho'
const pHeader       = document.createElement('p')
pHeader.className   = 'tituloCarrinho'
pHeader.innerHTML   = `<i class="fa fa-shopping-bag" aria-hidden="true"></i> Carrinho`
headCarrinho.appendChild(pHeader)

function carrinhoVazio() {
    divCarrinho.innerHTML = ""
    const contentCarrinho = document.createElement('div')
    contentCarrinho.className = 'contentCarrinho' 
    main.appendChild(divCarrinho)
    divCarrinho.append(headCarrinho)
    const divVazio = document.createElement('div')
    divVazio.className = 'divVazio'
    const iVazio = document.createElement('i')
    iVazio.className = 'fa fa-shopping-cart'
    iVazio.ariaHidden = true
    const pVazio = document.createElement('p')
    pVazio.className = 'pVazio'
    pVazio.innerText = 'Não há nada no carrinho!'
    divCarrinho.appendChild(divVazio)
    divVazio.append(iVazio, pVazio)
}

function carrinhoCheio() {
    divCarrinho.innerHTML = ""
    let qtd = 0
    let valor = 0   
    const contentCarrinho = document.createElement('div')
    contentCarrinho.className = 'contentCarrinho'    
    const qtdCarrinho   = document.createElement('div')
    qtdCarrinho.className = 'qtdCarrinho'
    selected.forEach((element, index) => {        
        qtd++
        valor+= element.preco
        const id = index
        element.listIndex = id
        const box           = document.createElement('div')
        box.className       = 'boxCarrinho'
        contentCarrinho.appendChild(box)
        const img = document.createElement('img')
        img.src = element.img
        img.alt = element.nome
        const divInfos = document.createElement('div')
        divInfos.className = 'divInfos'
        const pNome = document.createElement('p')
        pNome.innerText = element.nome
        pNome.className = 'pName'
        const pCat = document.createElement('p')
        pCat.className = 'pCategory'
        pCat.innerText = element.secao
        const pQtd = document.createElement('p')
        pQtd.innerText = ''
        pQtd.className = 'pQtd'
        const pPrice = document.createElement('p')
        pPrice.className = 'pPrice'
        pPrice.innerText = `R$ ${element.preco.toFixed(2).replace('.',',')}`
        divInfos.append(pNome, pCat, pQtd, pPrice)
        box.append(img, divInfos)
        
        //Botão remover
        const removeBtn = document.createElement('i')        
        removeBtn.innerHTML = `<i class="fa fa-trash-o" aria-hidden="true"></i>`      
        removeBtn.id = id
        removeBtn.addEventListener('click', event => {
            selected = selected.filter((item) => item.listIndex != event.target.id)
            verificaCard()
        })
        box.appendChild(removeBtn)
    })
    const pQtd = document.createElement('p')
    pQtd.innerText = 'Quantidade'
    const pQtdNum = document.createElement('p')
    pQtdNum.innerText = qtd
    qtdCarrinho.append(pQtd, pQtdNum)
    const totalCarrinho = document.createElement('div')
    const pTotal = document.createElement('p')
    pTotal.innerText = 'Valor'
    const pValor = document.createElement('p')
    pValor.innerText = `R$ ${valor.toFixed(2).replace('.',',')}`
    qtdCarrinho.append(pQtd, pQtdNum)
    totalCarrinho.className = 'totalCarrinho'
    totalCarrinho.append(pTotal, pValor)
main.appendChild(divCarrinho)
divCarrinho.append(headCarrinho, contentCarrinho, qtdCarrinho, totalCarrinho)     
} 

//Verificação do carrinho vazio ou não 
function verificaCard() {
    if (selected.length > 0) {
         carrinhoCheio()
    } else {
         carrinhoVazio()
    }
} verificaCard()

produtos.forEach(element => {
    for(let i = 0; i < element.componentes.length; i++) {
        //criar componentes
        //componentes.innerText = element.componentes[i]
    }
})