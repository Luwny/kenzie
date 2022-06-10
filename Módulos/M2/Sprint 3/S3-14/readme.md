# 🏁 Entrega - POO: Banco com classes

Nesta entrega vamos trabalhar construindo as clases `Pessoa`, `Empresa`, `Cliente` e `Transacao`, com o objetivo de simular o funcionamento de um banco, onde será feito pagamentos de salário e contas, depósitos e transferências.

Para iniciar vamos construir a classe `Cliente`

A classe `Cliente` deve possuir os seguintes parâmetros em seu constructor:

- **idCliente:** string
- **tipoCliente:** string
- **dataCriacao:** string
- **codBanco:** number
- **agencia:** number
- **conta:** number
- **saldo:** number
- E terá o **historico** que será um parâmetro definido no constructor inicando como uma array vazia

Agora vamos criar a classe `Pessoa`, está classe será uma extensão da classe `Cliente` heardando todos os seus atributos e recebendo mais alguns que são:

- **nome:** string
- **cpf:** string
- **email:** string
- **telefone:** number
- **dataDeNascimento:** string

Agora devemos construir a classe `Empresa` que também será um extensão da classe `Cliente` herdando todos os seus atributos e recebendo alguns novos:

- **nomeFantasia:** string
- **cnpj:** string
- **email:** string
- **telefone:** number
- **dataDaFundacao:** string

E por ultimo vamos construir a classe `Transacao` que será uma **classe estática** ou seja não receberá **nenhum parâmetro pelo constructor** e terá **todos seus métodos como estático**. Está classe será responsável por realizar todas as operações de pagamentos, depósitos, transferências e registro do histórico essas operações acontecendo por meio dos métodos abaixo:

Método estático `transferencia`:

Este método irá receber por parâmetro:

- **contaOrigem:** Class (Podendo ser uma classe Empresa ou Pessoa)
- **contaDestino:** Class (Podendo ser uma classe Empresa ou Pessoa)
- **idTransacao**: number
- **dataDeTransacao**: string
- **valorDaTransferencia**: number

- Em sequência deve validar se a **contaOrigem** possui um **saldo** maior ou igual ao de **valorDaTransferencia**.
- Caso o **saldo** sejá maior deve adicionar no **histórico** da **contaOrigem** o objeto:

```javascript
{
  idTransacao: idTransacao,
  dataDeTransacao: dataDeTransacao,
  valorDaTransferencia: valorDaTransferencia,
  tipo: "pagamento",
}
```

- E ao **histórico** da **contaDestino** o seguinte objeto:

```javascript
{
  idTransacao: idTransacao,
  dataDeTransacao: dataDeTransacao,
  valorDaTransferencia: valorDaTransferencia,
  tipo: "recebimento",
}
```

- Ao final do sucesso deve retornar a seguinte mensagem:

```javascript
{
  mensagem: "Transferência realizada com sucesso!";
}
```

- Caso o **saldo** seja menor que o **valorDaTransferencia** deve retornar a mensagem:

```javascript
{
  mensagem: "Saldo insuficiente para transferência!";
}
```

Método estático `deposito`:

O método deposito irá receber por parâmetro:

- **contaDestino:** Class (Podendo ser uma classe Empresa ou Pessoa)
- **idDeposito**: number
- **dataDoDeposito**: string
- **valorDoDeposito**: number

- Deve adicionar ao **saldo** da **contaDestino** o **valorDoDeposito**
- E adicionar ao **historico** da **contaDestino** o objeto:

```javascript
{
  idDeposito: idDeposito,
  dataDoDeposito: dataDoDeposito,
  valorDoDeposito: valorDoDeposito,
  tipo: "recebimento",
}
```

- E retorne a mensagem:

```javascript
{
  mensagem: "Depósito realizado com sucesso!";
}
```

Método estático `pagamentoSalario`:

O método pagamentoSalario irá receber por parâmetro:

- **contaOrigem:** Class (Podendo ser uma classe Empresa ou Pessoa)
- **contaDestino:** Class (Podendo ser uma classe Empresa ou Pessoa)
- **idPagamento**: number
- **dataDoPagamento**: string
- **valorDoSalario**: number

- Deve verificar se a **contaOrigem** é uma instância da classe **Pessoa** caso seja o **valorDoSalario** não pode ser maior 1000. Caso não passe nesta validação deve retornar a mensagem:

```javascript
{
  mensagem: "Seu limite máximo para este tipo de operação é de 1000, entre em contato com o banco!";
}
```

- Deve verificar se a **contaOrigem** tem o **valor** maior ou igual ao **valorDoSalario**.
- Caso a validação seja verdeira deve adicionar ao **saldo** da **contaDestino** o **valorDoSalario** e remover do **saldo** da **contaOrigem**
- Caso a validação seja verdadeira deve adicionar ao **historico** da **contaDestino** o objeto:

```javascript
{
    idPagamento: idPagamento,
    dataDoPagamento: dataDoPagamento,
    valorDoSalario: valorDoSalario,
    tipo: "recebimento",
}
        
```

- E ao **historico** da **contaOrigem** o objeto:

```javascript
{
  idPagamento: idPagamento,
  dataDoPagamento: dataDoPagamento,
  valorDoSalario: valorDoSalario,
  tipo: "pagamento",
}
```

- E retorne a mensagem:

```javascript
{
  mensagem: "Pagamento realizado com sucesso!";
}
```

- Caso o não passe na validação retorne a mensagem:

```javascript
{
  mensagem: "Saldo insuficiente para realizar o pagamento!";
}
```

## Teste

Insira o seguinte código no final do seu programa para verificar se ele está funcionando apropriadamente. **Atenção** (Não modifique este código!

```javascript
const ChurrosVictor = new Empresa(
  "01",
  "Vip",
  "16/05/2022",
  156,
  2798,
  987654321,
  1000,
  "Churros do Victor",
  "1011121314",
  "churrosVictor@email.com.br",
  1234567890,
  "16/05/2022"
);

const Joao = new Pessoa(
  "02",
  "Comum",
  "16/03/2022",
  156,
  2798,
  91919292,
  100,
  "João",
  "2345678901",
  "joao@kenzie.com.br",
  "90919293",
  "01/01/2019"
);

const Maria = new Pessoa(
  "03",
  "Vip",
  "16/03/2022",
  156,
  2798,
  10121416,
  5000,
  "Maria",
  "3456789012",
  "maria@kenzie.com.br",
  "90919293",
  "01/01/2019"
);

console.log(ChurrosVictor.saldo); // Deve retornar 1000
console.log(ChurrosVictor.nomeFantasia); // Deve retornar ChurrosVictor
console.log(ChurrosVictor.historico); // Deve retornar []
console.log(Joao.nome); // Deve retornar João
console.log(Joao.saldo); // Deve retornar 100
console.log(Maria.idCliente); // Deve retornar "03"
console.log(Maria.tipoCliente); // Deve retornar "Vip"

console.log(Transacao.transferencia(Joao, Maria, 001, "25/07/2022", 200)); // Deve retornar {mensagem: "Saldo insuficiente para transferência!"}

console.log(
  Transacao.transferencia(ChurrosVictor, Joao, 002, "20/07/2022", 500)
); // Deve retornar {mensagem: "Transferência realizada com sucesso!"}

console.log(ChurrosVictor.historico); // Deve retornar [{idTransacao: 002, dataDeTransacao: "20/07/2022", valorDaTransferencia: 500, tipo: "pagamento"}]
console.log(Joao.historico); // Deve retornar [{idTransacao: 002, dataDeTransacao: "20/07/2022", valorDaTransferencia: 500, tipo: "recebimento"}]

console.log(ChurrosVictor.saldo); // Deve retornar 500
console.log(Joao.saldo); // Deve retornar 600

console.log(Transacao.deposito(ChurrosVictor, 003, "02/07/2022", 650)); // Deve retornar {mensagem: "Depósito realizado com sucesso!"}

console.log(ChurrosVictor.historico[1]); // Deve retornar [{idDeposito: 003, dataDoDeposito: "02/07/2022", valorDoDeposito: 650, tipo: "recebimento"}]
console.log(ChurrosVictor.saldo); // Deve retornar 1150

console.log(Transacao.pagamentoSalario(Maria, Joao, 004, "22/07/2022", 1100)); // Deve retornar {mensagem: "Seu limite máximo para este tipo de operação é de 1000, entre em contato com o banco!"}
console.log(Transacao.pagamentoSalario(Joao, Maria, 005, "23/07/2022", 700)); // Deve retornar {mensagem: "Saldo insuficiente para realizar o pagamento!"}

console.log(Transacao.pagamentoSalario(Maria, Joao, 006, "22/12/2022", 900)); // Deve retornar {mensagem: "Pagamento realizado com sucesso!"}
console.log(Maria.saldo); // Deve retornar 4100
console.log(Maria.historico); // Deve retornar [{idPagamento: 006, dataDoPagamento: "22/12/2022", valorDaSalario: 900, tipo: "pagamento"}]
console.log(Joao.historico[1]); // Deve retornar [{idPagamento: 006, dataDoPagamento: "22/12/2022", valorDaSalario: 900, tipo: "recebimento"}]
```

## Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. Coloque seu repositório como **Privado** e adicione em **Configurações > Colaboradores e Times**, o time **team-m2-correcoes**. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/oregon-trail-inheritance) e envie o link do seu repositório nos comentários.
