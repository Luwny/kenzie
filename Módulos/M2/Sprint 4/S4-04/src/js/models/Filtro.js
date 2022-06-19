import { Vitrine } from "./Vitrine.js";

export class Filtro {
    static filtrarPorSecao(produtos, secao) {
        const produtosFiltrados = produtos.filter(
            (produto) => produto.secao.toLowerCase() === secao.toLowerCase()
        );
        return produtosFiltrados;
    }

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
}