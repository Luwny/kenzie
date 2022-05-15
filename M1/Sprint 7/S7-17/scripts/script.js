//Seleção do body
const body = document.querySelector('body')
//Criação da NAV e atribuição ao BODY
const nav = document.createElement('nav')
nav.innerHTML = `<nav>
<img
  src="./img/brand/logo.svg"
  alt="Imagem da logotipo do Virtual Market de cor preta"
  title="Imagem da logotipo do Virtual Market de cor preta"
/>
</nav>`
body.appendChild(nav)
//Criando MAIN classe CONTAINER e atribuindo ao body
const mainContainer = document.createElement('main')
mainContainer.classList.add('container')
body.appendChild(mainContainer)

//Criando Seções dos produtos e atribuindo ao mainContainer
const sectionContainer1 = document.createElement('section')
sectionContainer1.classList.add('products-section')
const sectionContainer2 = document.createElement('section')
sectionContainer2.classList.add('products-section')
const sectionContainer3 = document.createElement('section')
sectionContainer3.classList.add('products-section')
mainContainer.append(sectionContainer1, sectionContainer2, sectionContainer3)

//Criando H1 da seção FRUTAS
const h1Frutas = document.createElement('h1')
h1Frutas.innerText = 'Frutas'
sectionContainer1.appendChild(h1Frutas)

//Criando H1 da seção Bebidas
const h1Bebidas = document.createElement('h1')
h1Bebidas.innerText = 'Bebidas'
sectionContainer2.appendChild(h1Bebidas)

//Criando H1 da seção Higiene
const h1Higiene = document.createElement('h1')
h1Higiene.innerText = 'Higiene'
sectionContainer3.appendChild(h1Higiene)

//Criando MAIN CLASSE PRODUCTS-CONTENT FRUITS
const mainPC1 = document.createElement('main')
mainPC1.classList.add('products-content', 'fruits')
sectionContainer1.appendChild(mainPC1)

//Criando MAIN CLASSE PRODUCTS-CONTENT BEBIDAS
const mainPC2 = document.createElement('main')
mainPC2.classList.add('products-content', 'drinks')
sectionContainer2.appendChild(mainPC2)

//Criando MAIN CLASSE PRODUCTS-CONTENT HIGIENE
const mainPC3 = document.createElement('main')
mainPC3.classList.add('products-content', 'hygiene')
sectionContainer3.appendChild(mainPC3)

//CRIAÇÃO DA UL PARA CADA MAIN PRODUCTS-CONTENT
const ul1 = document.createElement('ul')
mainPC1.appendChild(ul1)

//CRIAÇÃO DA UL PARA CADA MAIN PRODUCTS-CONTENT
const ul2 = document.createElement('ul')
mainPC2.appendChild(ul2)

//CRIAÇÃO DA UL PARA CADA MAIN PRODUCTS-CONTENT
const ul3 = document.createElement('ul')
mainPC3.appendChild(ul3)

//Definindo quem é quem
const frutas = products.filter((element) => element.category == 'Frutas')
const bebidas = products.filter((element) => element.category == 'Bebidas')
const higiene = products.filter((element) => element.category == 'Higiene')

//Criando função LI para inserir dentro da UL checando sua categoria
function conteudo() {
        products.forEach(element => {
            const li = document.createElement('li')
            li.classList.add('product')
            const nome = element.title
            const categoria = element.category
            const preco = element.price
            let img = element.image
            if (img == undefined) {
                img = "./img/products/no-img.svg"
            }
            if (categoria == 'Frutas') {                
            ul1.appendChild(li)
            } else if (categoria == 'Bebidas') {
            ul2.appendChild(li)
            } else if (categoria == 'Higiene') {
            ul3.appendChild(li)
            }
            li.innerHTML = `
                <img src="${img}"
              alt=""
              title=""
              class="product-img"
            />
                <main class="product-main">
              <h1 class="product-title">${nome}</h1>
              <h5 class="product-category">${categoria}</h5>
              <strong class="product-price">R$ ${preco}</strong>
                </main>
            `
            
        });
}
conteudo()


