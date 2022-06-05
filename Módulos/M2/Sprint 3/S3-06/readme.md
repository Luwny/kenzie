# Atividade - Classes em JS

## Visão Geral

Para começar, faça o clone deste repositório.

No repositório clonado ja esta sendo fornecido parte do código, então vai ter um ponta pé inicial para essa atividade.

## Atividade

No trecho de código a seguir você pode revisar como se extende uma classe "filha" a partir da classe "mãe". Neste exemplo é criada uma classe **Knight** a partir da classe chamada **Villager** 

### Villager

Um Villager (aldeão) tem algumas propriedades:
- Um name (nome) (string) que deve ser fornecido como parâmetro para o construtor.
- Um _health (vida) que tem um valor inicial 50.
- Um defense (defesa) que tem um valor inicial 0.
- Um attack (ataque) que tem o valor inicial 0.
- Um isAlive (está vivo) que tem o valor inicial true (verdadeiro)

**O principal objetivo do Villager é sobreviver e se defender caso necessário.**

Para definir sua vida usaremos um get e set:
- **get health():** retorna o valor atual da vida do Villager.
- **set health():** defini a quantidade de vida que o Villager irá perder, e se continua vivo após esse ataque.

Para se defender, o Villager poderá:
- **normalAttack = (target):** quando o Villager realizar um normalAttack (ataque normal), ele irá verificar se o target (alvo) esta morto, caso não estiver morto vai diminuir a vida do alvo na quantidade de ataque - a quantidade de defesa. No fim retorna se o alvo está morto ou a quantidade de vida que ele ficou após o ataque.
   
```js
class Villager {
    constructor(name){
        this.name = name
        this._health = 50
        this.defense = 0
        this.attack = 0
        this.isAlive = true
    }

    get health() {
        return this._health
    }

    set health(value) {
        if (this.health - value <= 0) {
            this._health = 0
            this.isAlive = false
        } else {
            this._health -= value       
        }
    }

    normalAttack = (target) => {
        if (target.health === 0) {
            return `${target.name} ja esta morto!!`
        } 
        
        if (this.attack - target.defense > 0){
            target.health = this.attack - target.defense
        }

        if (target.health > 0) {
            return `${target.name} ficou com ${target.health} de vida`
        }

        return `${target.name} morreu!!`
    }

}

```

### Knight

Um Knight (guerreiro) tem algumas propriedades:
- Um name (nome) (string) que deve ser fornecido como parâmetro para o construtor.
- Um _health (vida) que tem um valor inicial 100.
- Um defense (defesa) que tem um valor inicial 10.
- Um attack (ataque) que tem o valor inicial 15.
- Um isAlive (está vivo) que tem o valor inicial true (verdadeiro)

**O principal objetivo do Knight é guerrear.**

**extends**
- Ao usarmos extends, extendemos a classe **Villager**, que faz com que a classe Knight obtenha todas as propriedades e seus métodos respectivamente.

```js
class Knight extends Villager {
    constructor(name) {
        super(name)
        this.defense = 10
        this._health = 100
        this.attack = 15
    }
}

```
#### Crie uma classe **Mage** que vai receber as mesmas propriedades das outras classes. Apenas com uma diferença:   

### Mage

Um Mage (mago) tem algumas propriedades:
- Um name (nome) (string) que deve ser fornecido como parâmetro para o construtor.
- Um attack (ataque) que tem o valor inicial 10.
- Um Mana que tem o valor inicial a 100.

```js
class Mage extends Villager {
    constructor(name) {
        super(name)
        this.attack = 10
        this.mana = 100
    }
}
```

Para se defender o Mage poderá: 
- **fireBall(target)** quando o Mage realizar um fireBall, ele irá verificar se o target esta vivo, caso esteja vivo, irá verificar se a mana disponivel, se disponivel vai causar dano ao target (alvo).

```js
fireBall = (target) => {
        const manacost = 25
        const damage = 30
        if (!target.isAlive) {
            return `${target.name} ja esta morto!!`
        }
        if (this.mana < manacost) {
            return `Mana insuficiente`
        }
        // Aqui você irá diminuir a vida do target de acordo com a variavel "damage" e retornar ela
    }
```
- Você pode se basear no método **normalAttack** da classe "pai" **Villager** para criar a lógica do novo método