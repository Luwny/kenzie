class Restaurante {
  static pratos = [
    {
      numeroPrato: 1,
      nomePrato: "Pizza",
      disponivel: true,
    },
    {
      numeroPrato: 2,
      nomePrato: "Lasanha",
      disponivel: true,
    },
    {
      numeroPrato: 3,
      nomePrato: "Tacos",
      disponivel: true,
    },
    {
      numeroPrato: 4,
      nomePrato: "Salgado",
      disponivel: true,
    },
    {
      numeroPrato: 5,
      nomePrato: "Pudim",
      disponivel: true,
    },
    {
      numeroPrato: 6,
      nomePrato: "Coxinha",
      disponivel: true,
    },
    {
      numeroPrato: 7,
      nomePrato: "Bolo",
      disponivel: true,
    },
    {
      numeroPrato: 8,
      nomePrato: "Pizza",
      disponivel: true,
    },
  ];
  static historico = [];
}

class Funcionario {
  constructor(nome) {
    this.nome = nome
  }
}

class Garcom extends Funcionario {
  constructor(nome) {
    super(nome)
    this.pedidosAtendidos = 0
  }
  atenderCliente(numeroMesa, numeroPrato) {
    let pedidoEncontrado = Restaurante.pratos.find(element => 
      element.numeroPrato === numeroPrato
    )
    if (pedidoEncontrado) {
      this.pedidosAtendidos++
      Restaurante.historico.push({
        numeroMesa,
        numeroPrato,
        nomeDoGarcom: this.nome
      })
      return `Pedido encontrado`
    }
      return `Pedido não encontrado`
  }
}

const FrayCompanies = new Garcom(`Gabriel`)
console.log(FrayCompanies.atenderCliente(2, 8))
console.log(Restaurante.historico)
console.log(FrayCompanies.pedidosAtendidos)

  //passar por cada prato, e verificar se ele existe, de acordo com o parâmetro
  //SE existir, fazer push de um objeto no array static historico
  //SE NÃO existir, prato não encontrado, faça o pedido novamente