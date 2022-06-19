# 💪 Atividade - POO: Convertendo Lista de Produtos em POO

Para começar faça clone deste repositório.

> **Aviso!**
>
> Ao clonar o projeto você verá três arquivos JavaScript, sendo um deles para armazenar exclusivamente os dados que você irá utilizar, o segundo onde será inserido sua lógica e o terceiro conterá as models. Lembre-se que a organização do seu projeto é tão importante quanto seu código. Nem sempre será só você que irá utilizar o projeto
> Agora que já está bem fixado o conceito de DOM, vamos avançar com a nossa **Lista de Produtos** criada anteriormente e a refatoraremos em POO.

# Introdução

Nesta atividade iremos converter a entrega Lista de Produtos -
continuação para POO (Programação Orientada a Objetos). Mostraremos o
passo a passo para essa conversão.

<br>

# 🐣 Passo a passo

## Preparando os arquivos

Antes de começar devemos criar nossos arquivos <code>script.js</code>, dentro da pasta src e
<code>Vitrine.js</code>, <code>VitrinePrincipal.js</code>, <code>Carrinho.js</code> e <code>Filtro.js</code> dentro da pasta models.

Com o <code>script.js</code> criado, podemos linkar ele ao
<code>index.html</code>. Nesse caso vamos utilizar o atributo
<code>type="module"</code> para poder utilizar o import e export no
nosso Javascript.

<br />

## Modelando as classes

Em cada um dos arquivos criados anteriomente vamos desenvolver a respectiva classe.

São elas

- Classe Vitrine;
- Classe VitrinePrincipal;
- Classe Carrinho;
- Classe Filtro.

**Classe Vitrine**

Esta classe será resposável por criar e listar nossos produtos no HTML.

<ol>
<li>

A primeira coisa que vamos fazer é criar nosso constructor, que será
responsável por inicializar nosso objeto quando a classe for
instanciada.

Para nossa vitrine serão necessárias duas propriedades, o
<strong>elementoPai</strong> (elemento HTML onde nossos produtos vão
ser exibidos), e o <strong>produtos</strong> (nossa lista de
produtos).

É importante utilizar o export , pois vamos utilizar ela em outros arquivos.

```
 export class Vitrine {
    constructor(elementoPai, produtos) {
      this.elementoPai = elementoPai;
      this.produtos = produtos;
    }
  }
```

</li>
<li>
Agora vamos criar o método <strong>listarProdutos()</strong> para criar/listar todos nossos produtos.

   <ul>
      <li>
      Primeiro vamos utilizar o <strong>document.createElement()</strong> para criar todos elementos necessários para o nosso produto:
              
```
export class Vitrine {
    constructor(elementoPai, produtos) {
      this.elementoPai = elementoPai;
      this.produtos = produtos;
    }
  
    listarProdutos(produtos) {
      this.elementoPai.innerHTML = "";
  
      produtos.forEach((produto) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const span = document.createElement("span");
        const button = document.createElement("button");
        const listaComponentes = document.createElement("ol");
  
        produto.componentes.forEach((item) => {
          const li = document.createElement("li");
          li.innerText = item;
          listaComponentes.appendChild(li);
        });

      });
    }

}

```
   </li>
   <li>Agora vamos popular nossos elementos com os dados dos produtos:

```

listarProdutos(produtos) {
this.elementoPai.innerHTML = "";

    produtos.forEach((produto) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      const span = document.createElement("span");
      const button = document.createElement("button");
      const listaComponentes = document.createElement("ol");

      produto.componentes.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item;
        listaComponentes.appendChild(li);
      });

      li.dataset.id = produto.id;

      img.src = produto.img;
      img.alt = produto.nome;

      h3.innerText = produto.nome;

      const precoDoProduto = produto.promocao
        ? produto.precoPromocao
        : produto.preco;
      p.innerText = precoDoProduto.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
      });

      span.innerText = produto.secao;

      button.innerText = "Adicionar ao Carrinho";

      li.append(img, h3, p, span, listaComponentes, button);

      this.elementoPai.appendChild(li);
    });

}

```
   </li>
<br/>

**Classe VitrinePrincipal**

Esta classe irá herdar todas as funcionalidades da nossa classe
Vitrine e acrescentará novas funcionalidade. Para herdar a <strong>Vitrine</strong>
devemos utilizar a palavra chave <strong>extends</strong>.

Lembre-se de importar a classe <strong>Vitrine</strong> e também exportar a classe <strong>VitrinePrincipal</strong>.


```

import { Vitrine } from "./Vitrine.js";

export class VitrinePrincipal extends Vitrine {

}

```

<ol>
<li>

Primeiro vamos criar o constructor assim como feita na classe
Vitrine, mas dessa vez vamos utilizar o
<strong>super()</strong>, o super será usado para executar o
constructor da nossa classe herdada (Vitrine):

```

export class VitrinePrincipal extends Vitrine {
constructor(elementoPai, produtos, carrinho) {
super(elementoPai, produtos);
this.carrinho = carrinho;
this.elementoPai.addEventListener("click", this);
}
}

```
É importante notar que aqui criamos mais uma propriedade, o
<strong>carrinho</strong>, que será um outro objeto responsável por
armazenar os produtos do nosso carrinho.

Também vamos adicionar um evento no nosso
<strong>elementoPai</strong> para escutar nosso click.

</li>

<li>

Agora vamos criar o método que será responsável por adicionar
nossos produtos no carrinho:
   <ul>
   <li>

   Como você deve ter notado, nós não passamos nenhum callback no
   nosso addEventListener().

Isso acontece porque ao utilizar classes, nós podemos utilizar
   o método <strong>handleEvent()</strong> (é muito importante
   utilizar exatamente esse nome) para "gerenciar" os nossos
   eventos. Toda vez que nosso evento for disparado ele irá
   executar nosso método <strong>handleEvent()</strong>.

Dessa forma podemos fazer uma verificação no
   <strong>event.type</strong> e se ele for igual a
   <strong>"click"</strong> disparamos o nosso método responsável
   por adicionar o produto ao carrinho.

```

export class VitrinePrincipal extends Vitrine {
...

    handleEvent(event) {
      switch (event.type) {
        case "click":
          this.adicionarNoCarrinho(event);
          break;
        default:
      }
    }

}

```

</li>

<li>

Agora iremos criar nosso método
<strong>adicionarNoCarrinho()</strong> dentro da nossa classe
VitrinePrincipal.

Nela vamos verificar se o elemento clicado foi um botão, e
caso seja verdade, vamos verificar o id do produto clicado
através do nosso <strong>data atributo</strong> criado no
método <strong>listarProdutos()</strong>. Para ter acesso ao
<strong>data atributo</strong> utilizamos
<strong>Element.dataset.nomeDoAtributo</strong>.

```

adicionarNoCarrinho(event) {
const element = event.target;

if (element.tagName === "BUTTON") {
const idDoProdutoClicado = element.closest("li").dataset.id;
}
}

```

Agora com o id do produto clicado podemos utilizar o método
<strong>find()</strong> para encontrar o produto com o mesmo
id dentro da nossa lista de produtos e então executar o método
<strong>this.carrinho.adicionarProduto()</strong> e passar o
nosso produto como argumento para adicionar o produto ao
carrinho (esse método será criado mais a frente junto da nossa
classe <strong>Carrinho</strong>).

```

adicionarNoCarrinho(event) {
const element = event.target;

    if (element.tagName === "BUTTON") {
      const idDoProdutoClicado = element.closest("li").dataset.id;

      const produto = this.produtos.find((produto) => {
        return produto.id == idDoProdutoClicado;
      });

      this.carrinho.adicionarProduto(produto);
    }

}

```
</li>
<li>

Só falta criar o método <strong>mostrarTodos()</strong> para
mostrar todos os produtos no nosso HTML.

Para isso basta chamar nosso método
<strong>this.listarProdutos()</strong> e passar nossa lista de
produtos completa para ele.

```

mostrarTodos() {
this.listarProdutos(this.produtos);
}

```

</li>
</ol>

<br>

**Classe Carrinho**

Esta classe irá herdar todas as funcionalidades da nossa classe
<strong>Vitrine</strong> e acrescentará novas funcionalidades específicas do carrinho.
Assim como na VitrinePrincipal, nós vamos utilizar o export para
utilizar esta classe em outro arquivo.

<ol>
<li>

Antes de tudo vamos criar o constructor, mas neste caso vamos
utilizar o <strong>super()</strong>, o
<strong>elementoValorTotal</strong> ( o elemento onde vamos exibir
o valor total ), e o <strong>produtos</strong> que nesse caso vai
iniciar como um array vazio.

```

import { Vitrine } from "./Vitrine.js";

export class Carrinho extends Vitrine {
constructor(elementoPai, elementoValorTotal) {
super(elementoPai);
this.elementoValorTotal = elementoValorTotal;
this.produtos = [];
}
}

```
</li>

<li>

Agora vamos criar o método <strong>calcularValorTotal()</strong>,
que vai ser utilizado para calcular e exibir o valor total dos
produtos do nosso carrinho.

Para isso vamos utilizar o método <strong>reduce()</strong> na
nossa propriedade <strong>this.produtos</strong> para calcular o
valor total de todos os produtos dentro do carrinho.

E por fim exibir o valor na tela utilizando o
<strong>Element.innerText</strong>.

```

export class Carrinho extends Vitrine {
...

    calcularValorTotal() {
      const total = this.produtos.reduce((total, item) => {
        const precoDoProduto = item.promocao ? item.precoPromocao : item.preco;
        return total + Number(precoDoProduto);
      }, 0);

      this.elementoValorTotal.innerText = total.toFixed(2);
    }

}

```
</li>

<li>

E agora vamos criar o método
<strong>adicionarProduto()</strong> que utilizamos na classe
VitrinePrincipal para adicionar um produto ao carrinho.

Para isso basta utilizar o <strong>push()</strong> para colocar o
produto recebido por parametro no carrinho, e então utilizar o
método <strong>calcularValorTotal()</strong> para atualizar o
valor total do carrinho, e o método
<strong>listarProdutos()</strong> ( que foi herdado da classe
Vitrine ) para exibir a lista de produtos atualizada no nosso
carrinho.

```

adicionarProduto(novoProduto) {
this.produtos.push(novoProduto);

    this.calcularValorTotal();
    this.listarProdutos(this.produtos);

}

```
</li>
</ol>

  <br>

**Classe Filtro**
A classe <strong>Filtro</strong> será utilizada para filtrar os produtos, nós vamos
utilizar métodos estáticos para não precisar instanciar a classe.

Nesta classe vamos criar dois métodos, o
<strong>filtrarPorSecao()</strong>, e o
<strong>filtrarPorCampoDePesquisa()</strong>, que vão receber primeiro
o parametro <strong>produtos</strong>
(lista de produtos que devemos filtrar) e no segundo parâmetro o valor
que queremos buscar.


```

import { Vitrine } from "./Vitrine.js";

export class Filtro {
static filtrarPorSecao(produtos, secao) {

    }

    static filtrarPorCampoDePesquisa(produtos, valorDoInput) {

    }

}

```

  <ol>
    <li>
      No método <strong>filtrarPorSecao()</strong> vamos utilizar o
      <strong>filter()</strong> para procurar todos produtos que tem a
      seção igual a seção procurada:


```

static filtrarPorSecao(produtos, secao) {
const produtosFiltrados = produtos.filter(
(produto) => produto.secao.toLowerCase() === secao.toLowerCase()
);
return produtosFiltrados;
}

```

</li>

<li>

No método <strong>filtrarPorCampoDePesquisa()</strong> tambem
vamos utilizar o <strong>filter()</strong> mas dessa vez vamos
fazer a busca no nome, seção e categoria do nosso produto, e vamos
fazer a verificação usando o <strong>includes()</strong>:


```

static filtrarPorCampoDePesquisa(produtos, valorDoInput) {
const inputPesquisar = valorDoInput.toLowerCase();

    const produtosFiltrados = produtos.filter((produto) => {
      if (
        produto.nome.toLowerCase().includes(inputPesquisar) ||
        produto.secao.toLowerCase().includes(inputPesquisar) ||
        produto.categoria.toLowerCase().includes(inputPesquisar)
      ) {
        return true;
      }
    });

    return produtosFiltrados;

}

```
</li>

</li>

<br />

## Instanciando as classes

Agora que já temos as classes prontas podemos utilizá-las, bem como o
array de produtos no <code>script.js</code>. Para isso devemos utilizar
o <code>import</code>.

```

import { VitrinePrincipal } from "./models/VitrinePrincipal.js";
import { Carrinho } from "./models/Carrinho.js";
import { Filtro } from "./models/Filtro.js";

import { produtos } from "./js/dataProdutos.js";

```

<ol>
   <li>
Primeiro vamos instanciar a classe <strong>Carrinho</strong>, vamos
utilizar o operador <strong>new</strong> o nome da nossa classe e seus
argumentos;

```

const containerCarrinhoDeCompras = document.querySelector("#carrinho ul");
const displayPreçoTotal = document.querySelector("#precoTotal")

const carrinhoDeCompras = new Carrinho(
containerCarrinhoDeCompras,
displayPreçoTotal
);

```
</li>

<li>
Agora podemos instanciar a <strong>VitrinePrincipal</strong>, e passar
os argumentos necessários (incluindo o nosso carrinho que foi
instanciado logo acima). E então chamar o método
<strong>vitrineDeProdutos.mostrarTodos()</strong> para exibir os
produtos na nossa página.

```

const containerListaProduto = document.querySelector("#listProdutos ul");

const vitrineDeProdutos = new VitrinePrincipal(
containerListaProduto,
produtos,
carrinhoDeCompras
);

vitrineDeProdutos.mostrarTodos();

```
</li>

<li>
E para finalizar podemos adicionar nossos
<strong>addEventListener()</strong> nos botões, e utilizar a classe
<strong>Filtro</strong> para filtrar os produtos.

```

const botaoMostrarHortifruti = document.querySelector(".estiloGeralBotoes--filtrarHortifruti");

botaoMostrarHortifruti.addEventListener("click", () => {
const produtosFiltrados = Filtro.filtrarPorSecao(vitrineDeProdutos.produtos, "hortifruti");

    vitrineDeProdutos.listarProdutos(produtosFiltrados);

});

const botaoBuscarProduto = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome");

botaoBuscarProduto.addEventListener("click", () => {
const inputPesquisar = document.querySelector(".campoBuscaPorNome").value;

    const produtosFiltrados = Filtro.filtrarPorCampoDePesquisa(vitrineDeProdutos.produtos, inputPesquisar);

    vitrineDeProdutos.listarProdutos(produtosFiltrados);

});

const botaoMostrarTodos = document.querySelector(".estiloGeralBotoes--mostrarTodos");

botaoMostrarTodos.addEventListener("click", () => vitrineDeProdutos.mostrarTodos());

```

</li>
</ol>


```
