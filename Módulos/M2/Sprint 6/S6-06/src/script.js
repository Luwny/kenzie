import chihuahua from "./services/Api.js"

const button = document.querySelector('button')


button.addEventListener('click', async (event) => {
    event.preventDefault()
    
    await chihuahua.getYear()
    await chihuahua.getMonthAndDay()
    await chihuahua.getNumber()
    await chihuahua.getDynamic('trivia')
})