let personOne = {
	"name": "André",
	"age": 27,
	"role": "Full Stack",
	"technologies": ["javascript", "react", "node"]
}

let personTwo = {
	"name": "Romário",
	"age": 22,
	"role": "Front End",
	"technologies": []
}

let personThree = {
	"name": "Diana",
	"age": 19,
	"role": "Back End",
	"technologies": ["python", "django"]
}

const developersList = [personOne, personTwo, personThree]
developersList[1].technologies.push('React', 'JavaScript')
// console.log(developersList[1])



function lol() {
    developersList.forEach(element => {
        for (i in element) {
            console.log(`${[i]}: ${element[i]}`)
        }
        
    });
    // for (let i = 0; i < developersList.length; i++) {
    //     for (j in developersList[i]) {
    //         console.log(`${[j]}: ${developersList[i][j]}`)
    //     }
    // }
}
console.log(lol())