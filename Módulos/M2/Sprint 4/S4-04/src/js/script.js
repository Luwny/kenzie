import { VitrinePrincipal } from "./models/VitrinePrincipal.js";
import { Carrinho } from "./models/Carrinho.js";
import { Filtro } from "./models/Filtro.js";

import { produtos } from "./dataProdutos.js";

const containerCarrinhoDeCompras = document.querySelector("#carrinho ul");
const displayPreçoTotal = document.querySelector("#precoTotal")

const carrinhoDeCompras = new Carrinho(
    containerCarrinhoDeCompras,
    displayPreçoTotal
);

const containerListaProduto = document.querySelector("#listProdutos ul");

const vitrineDeProdutos = new VitrinePrincipal(
    containerListaProduto,
    produtos,
    carrinhoDeCompras
);

vitrineDeProdutos.mostrarTodos();

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