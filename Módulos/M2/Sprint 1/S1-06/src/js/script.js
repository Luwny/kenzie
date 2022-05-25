//Selecionando main
const main = document.querySelector('main')

//Criando barrinha de pesquisa
const nav = document.querySelector('.navBar')
const contentSearchBar = document.createElement('div')
contentSearchBar.classList.add('contentSearchBar')
contentSearchBar.innerHTML = `  <input type="text" placeholder="Pesquisar por">
                                <button type="submit"><img src="./src/img/search.png" alt=""></button>
                                `
nav.appendChild(contentSearchBar)
main.appendChild(nav)

//Selecionando e criando seção de valor atual da seção
const totalSection = document.querySelector('.totalSection')
main.appendChild(totalSection)
totalSection.innerHTML =    `<p><i class="fa fa-spinner" aria-hidden="true"></i> Valor total dos produtos da   sessão selecionada</p>
                            <span>R$ 00,00</span>`

//Criando cards dinâmicos
const contentCard = document.querySelector('.contentCard')
main.appendChild(contentCard)

function criarCard() {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
}