function calculateAge(birthAge, currentYear){
    let yearDay = 365.25
    let yearWeek = 52.1786
    let ageYears = currentYear - birthAge
    let ageMonth = ageYears * 12
    let ageDays = ageYears * yearDay
    let ageWeek = ageYears * yearWeek
    console.log(`Idade em anos: ${ageYears}`)
    console.log(`Idade em meses: ${ageMonth}`)
    console.log(`Idade em dias: ${ageDays}`)
    console.log(`Idade em semanas: ${ageWeek}`)
}
calculateAge(1996, 2022)