class Restaurant {
    constructor(nome, bairro, experiencia, sabor, funcionamento, horario) {
        this.nome = nome;
        this.bairro = bairro;
        this.experiencia = experiencia;
        this.sabor = sabor;
        this.funcionamento = funcionamento;
        this.horario = horario;
    }
}
let saborBrasileiro = new Restaurant('Sabor Brasileiro', 'Bairro das Laranjeiras', 'Dez anos', 'Comida típica nordestina', 'Segunda à Sábado', '12 às 21')

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
console.log(burguerQueen)