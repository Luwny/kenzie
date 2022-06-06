class Restaurant {
    constructor(nome, bairro, experiencia, sabor, funcionamento, horario) {
        this.nome = nome;
        this.bairro = bairro;
        this.experiencia = experiencia;
        this.sabor = sabor;
        this.funcionamento = funcionamento;
        this.horario = horario;
    }
    greetings() {
        return `Olá! Seja bem vindo ao restaurante ${this.nome}, nosso horário de funcionamento é de ${this.horario} e estamos abertos de ${this.funcionamento}`
    }
}

let saborBrasileiro = new Restaurant('Sabor Brasileiro', 'Bairro das Laranjeiras', 'Dez anos', 'Comida típica nordestina', 'segunda à sábado', '12 às 21')
//console.log(saborBrasileiro.greetings())

class FastFood {
    constructor(nome, franquias, preço, filial, semana,horario, pagamento) {
        this.nome = nome
        this.franquias = franquias
        this.preco = preço
        this.filial = filial
        this.semana = semana
        this.horario = horario
        this.pagamento = pagamento
    }    
}

let burguerQueen = new FastFood('Burguer Queen', 'Franquias pela cidade inteira', 'Preços acessíveis', 'Centro', 'Todos dias da semana', '9 as 22', 'Pagamento rápido com opção de feedback no fim do pagamento')


class Pizza {
    constructor(sauce, cheese, border){
      this.sauce = sauce;
      this.cheese = cheese;
      this.border = border;
    }

    greeting(){
        if (this.vegetable == undefined) {
            return `Oi, eu sou a pizza de ${this.sauce}, com o queijo ${this.cheese}, e a borda de ${this.border}!`
        } else {
            return `Oi, eu sou a pizza de ${this.sauce}, com o queijo ${this.cheese}, e a borda de ${this.border}, e ainda por cima adição de ${this.vegetable}, pois sou uma edição especial!!`
        }
      
    }
  }

  let pizzaDeQueijo = new Pizza('Queijo', 'Cheedar', 'Queijo provolone')
  console.log(pizzaDeQueijo.greeting())

  class vegetarianPizza extends Pizza {
      constructor(sauce, cheese, border, vegetal) {
        super(sauce, cheese, border)
        this.vegetable = vegetal
      }
  }

  let pizzaDeBrocolis = new vegetarianPizza('Queijo', 'Cheedar', 'Queijo provolone', 'Brócolis')
  console.log(pizzaDeBrocolis.greeting())