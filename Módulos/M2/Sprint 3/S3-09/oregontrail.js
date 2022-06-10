class Traveler {
    constructor(name) {
        this._name = name
        this._food = 1
        this._isHealthy = true
    }

    //Método de caça
    hunt() {
        return this._food += 2
    }

    //Método de comer
    eat() {
        if (this._food > 0) {
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
    //Checar quantidade de assentos disponíveis
    getAvailableSeatCount() {
        return `A carroça tem ${this._capacity} assentos disponíveis.`
    }

    join(traveler) {
        if (this._capacity > 0) {
            this._capacity -= 1
            this._passageiros.push(traveler)
        } else {
            return `Não tem mais espaço na carroça!`
        }
    }

    shouldQuarantine() {
        if (this._passageiros.some(({ _isHealthy }) => !_isHealthy) == true) {
            return `Sim, há alguém doente, devemos quarentenar.`
        } else {
            return `Não há ninguém doente, não é necessário quarentena.`
        }
    }
    //Contador de comida
    totalFood() {
        const foodCounter = 0
        return `Temos um total de ${this._passageiros.reduce((acc, { _food }) => acc + _food, foodCounter)} comidas.`
    }
}

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this._food = 2
        this._isHealthy = true
    }

    hunt() {
        return this._food += 5
    }
    eat() {
        if (this._food >= 2) {
            return this._food -= 2
        } else if (this._food >= 1) {
            this._food -= 1
            return this._isHealthy = false
        } else if (this._food == 0) {
            return this._isHealthy = false
        }
    }
    //Método de dar comida a outros travelers.
    giveFood(traveler, numOfFoodUnits) {
        if (this._food >= numOfFoodUnits) {
            this._food -= numOfFoodUnits
            traveler._food += numOfFoodUnits
        }
    }
}

class Doctor extends Traveler {
    constructor(name) {
        super(name)
        this._food = 1
        this._isHealthy = true
    }
    //Método de healar travelers doentes
    heal(traveler) {
        return traveler._isHealthy = true
    }
}

// Cria uma carroça que comporta 4 pessoas
let wagon = new Wagon(4);
// Cria cinco viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');

console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);

wagon.join(maude); // Não tem espaço para ela!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);

sarahunter.hunt(); // pega mais 5 comidas
drsmith.hunt();

console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);

henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan agora está doente (sick)

console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
console.log(sarahunter)
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // Ela só tem um, então ela come e fica doente
console.log(sarahunter)
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);