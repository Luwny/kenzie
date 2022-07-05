const imgCat = document.querySelector('.imgCat')
const imgDog = document.querySelector('.imgDog')
const buttonCat = document.querySelector('.buttonCat')
const buttonDog = document.querySelector('.buttonDog')

buttonCat.addEventListener('click', () => {
    getCat()
})

buttonDog.addEventListener('click', () => {
    getDog()
})

//função com async & wait
async function getDog() {
    let res = await fetch('https://api.thedogapi.com/v1/images/search')
    let data = await res.json()      
    imgDog.src = data[0].url             
}
getDog()

//função com then
function getCat() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => { 
        imgCat.src = data[0].url             
    })
}
getCat()