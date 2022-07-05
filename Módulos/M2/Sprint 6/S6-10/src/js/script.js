const main = document.querySelector('main')
const otherNews = document.querySelector('.otherNews')

class createCard {
    static BASE_URL = 'https://kenzie-news-api.herokuapp.com/api/news'
    
    static firstCard = async () => {
        let res = await fetch(this.BASE_URL)
        let data = await res.json()
        const pType = document.querySelector('.type')
        const pTitle = document.querySelector('.title')
        const pDescription = document.querySelector('.description')
        const pBy = document.querySelectorAll('.by')
        const img = document.querySelector('.imgMain')

        img.src = data[0].imagem
        pType.innerText = data[0].categoria
        pTitle.innerText = data[0].titulo
        pDescription.innerText = data[0].resumo
        pBy.innerText = data[0].fonte
    }
    static othersCards = async () => {
        let res = await fetch(this.BASE_URL)
        let data = await res.json()
        let dataNovo = Object.values(data).slice(1)
        
        Object.values(dataNovo).forEach(({ categoria, titulo, resumo, fonte, imagem }) => {
            const cardNews = document.createElement('div')
            const cardImg = document.createElement('div')
            const cardInfo = document.createElement('div')
            const img = document.createElement('img')

            const pType = document.createElement('p')
            const h1Title = document.createElement('h1')
            const pDescription = document.createElement('p')
            const pBy = document.createElement('p')

            pType.className = 'typeNews'
            h1Title.className = 'titleNews'
            pDescription.className = 'descriptionNews'
            pBy.className = 'byNews'

            pType.innerText = categoria
            h1Title.innerText = titulo
            pDescription.innerText = resumo
            pBy.innerText = `Fonte: ${fonte}`


            cardNews.className = 'cardNews'
            img.src = imagem
            cardImg.className = 'cardImg'
            cardInfo.className = 'cardInfo'

            cardImg.appendChild(img)
            cardInfo.append(pType, h1Title, pDescription, pBy)
            cardNews.append(cardImg, cardInfo)
            otherNews.appendChild(cardNews)           
        })
    }
}
createCard.firstCard()
createCard.othersCards()