# Entrega: Oregon Trail com Sintaxe de Classe

Para começar, faça o clone desse repositório.

Revise a aula de Sintaxe de Classe e veja como criar um objeto de classe usando uma função construtora para instanciar propriedades e definir os métodos comum a todas as instâncias da classe, utilizando **sintaxe de classe**. Aqui está um exemplo:

```javascript
class Dog {
    constructor(name, breed, isGoodBoy) {
        this.name = name;
        this.breed = breed;
        this.isGoodBoy = isGoodBoy;
    }

   sit() {
       // sitting code here
   }
}
```

Seguindo este exemplo, crie dois tipos diferentes de classes usando funções construtoras e métodos: um `Traveler` (Viajante) e uma `Wagon` (Carroça).

## Traveler

Um Traveler (viajante) tem algumas propriedades:  

- um name (nome) (string) que deve ser fornecido como parâmetro para o construtor. 
- uma quantidade de food (comida) (númerico) com valor inicial 1. 
- uma propriedade isHealthy (está saudável)(booleano) que indica se ele está doente com valor inicial true.  

**O principal objetivo do Traveler é racionar seus mantimentos através de caçadas e refeições para que ele não fique doente durante sua viagem**.

Para racionar seus mantimentos, o Traveler poderá:

- hunt(Caçar): Quando o Traveler sair para caçar, a quantidade de comida deve aumentar em 2.
- eat(Comer): Quando o Traveler tentar comer, caso a quantidade de comida for maior que 0, então o Traveler perde 1 comida, e continua saudável. Caso a quantidade for 0, então o Traveler não consegue comer e fica doente.

## Wagon
Uma `Wagon` (Carroça) também tem algumas propriedades:
- uma `capacity` (capacidade) (número), que deve ser fornecida como parâmetro para o construtor, determina a quantidade máxima de passageiros que cabe na carroça.
- uma lista de `passageiros` (array) que inicialmente está vazia.

**O pricipal objetivo do Cocheiro (Piloto da carroça) é monitorar os assentos e estado de saúde de todos os viajantes para que ele possa decidir seguir viagem ou manter a quarentena**.

Para monitorar seus assentos e seus viajantes, o cocheiro poderá:

- getAvailableSeatCount: Retorna o número de assentos vazios, determinado pela capacidade que foi estipulada quando a carroça foi criada comparado com o número de passageiros a bordo no momento.

- join: Adicione um viajante à carroça se tiver espaço. Se a carroça já estiver cheia, não o adicione.

- shouldQuarantine: Retorna true se houver pelo menos uma pessoa não saudável na carroça. Retorna false se não houver.

- totalFood: Retorna o número total de comida de todos os ocupantes da carroça.

## Teste

Insira o seguinte código no final do seu programa para verificar se ele está funcionando apropriadamente. **Atenção** (Não modifique este código!)

```js
// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
```

## Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, **envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/oregon-trail-with-class)** e envie o link do seu repositório nos comentários. Deixe o link do seu repositório como **internal**.