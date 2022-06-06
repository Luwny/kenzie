class Traveler {
    constructor(name) {
        this._name = name
        this._food = 1
        this._isHealthy = true
    }
    
    //Método de caça
    hunt() {
        if (this._isHealthy == true) {
            return this._food +=2
        }
        else {
            return `Você está doente, e não pode sair para caçar.`
        }
    } 

    //Método de comer
    eat() {
        if (this._food > 0 ) {
            this._food -= 1
        } else {
            return this._isHealthy = false
        }
    }
}

class Wagon {
    constructor(capacidade) {
        this._capacity = capacidade
        this._passageiros = []
    }
    
    getAvailableSeatCount() {
        return `A carroça tem ${this._capacity} vagas.`
    }

    join (traveler) {
        if (this._capacity > 0) {
            this._capacity -= 1
            this._passageiros.push(traveler)
        } else {
            return `Não tem mais espaço na carroça!`
        }
    }

    shouldQuarantine() {
       if (this._passageiros.some(({_isHealthy}) => !_isHealthy) == true) {
           return `Sim, há alguém doente, devemos quarentenar.`
       } else {
           return `Não há ninguém doente, não é necessário quarentena.`
       }
    }

    totalFood() {
        const foodCounter = 0
        return `Temos um total de ${this._passageiros.reduce((acc, {_food}) => acc+_food, foodCounter)} comidas.`
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);

// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
//Testes 

console.log(`${wagon.getAvailableSeatCount()} => should be 2`); 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} => should be 1`); 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} => should be 0`); 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente) 
console.log(`${wagon.shouldQuarantine()} => should be true since juan is sick`);
console.log(`${wagon.totalFood()} => should be 3`);