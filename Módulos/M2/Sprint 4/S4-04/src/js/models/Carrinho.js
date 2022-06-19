import { Vitrine } from "./Vitrine.js";

export class Carrinho extends Vitrine {
    constructor(elementoPai, elementoValorTotal) {
        super(elementoPai);
        this.elementoValorTotal = elementoValorTotal;
        this.produtos = [];
    }

    calcularValorTotal() {
        const total = this.produtos.reduce((total, item) => {
            const precoDoProduto = item.promocao ? item.precoPromocao : item.preco;
            return total + Number(precoDoProduto);
        }, 0);

        this.elementoValorTotal.innerText = total.toFixed(2);
    }

    adicionarProduto(novoProduto) {
        this.produtos.push(novoProduto);
    
        this.calcularValorTotal();
        this.listarProdutos(this.produtos);
      }
}