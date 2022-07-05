class Api {
    static BASE_URL = "http://numbersapi.com/"

    static getYear = async () => {
        const date = document.getElementsByName('date')[0].value.split('-')
    
        let res = await fetch(`${this.BASE_URL}${date[0]}/year?json`)
        let data = await res.json()
        
        console.log(`O ano citado foi ${date[0]}, e a informação que temos sobre este ano é "${data.text}"`)
    }
    
    static getMonthAndDay = async () => {
        const month = document.getElementsByName('date')[0].value.split('-')
    
        let res = await fetch(`${this.BASE_URL}${month[1]}/${month[2]}/date?json`)
        let data = await res.json()
    
        console.log(`O dia escolhido foi ${month[2]}, o mês escolhido foi ${month[1]} e a informação que temos sobre este dia/mês é: "${data.text}"`)
    }
    
    static getNumber = async () => {
        const number = document.getElementsByName('number')[0].value
        
        let res = await fetch(`${this.BASE_URL}${number}/trivia?json`)
        let data = await res.json()
        
        console.log(`Você escolheu o número: ${data.number} e a informação que temos sobre este número é que: "${data.text}"`)
    }
    
    //função dinâmica pra pegar de acordo com a informação desejada
    static getDynamic = async (type) => {
        const number = document.getElementsByName('number')[0].value
        
        let res = await fetch(`${this.BASE_URL}${number}/${type}?json`)
        let data = await res.json()
        
        console.log(`Você escolheu o número: ${data.number} e a informação que temos sobre este número é que: "${data.text}"`)
    }
}

export default Api



