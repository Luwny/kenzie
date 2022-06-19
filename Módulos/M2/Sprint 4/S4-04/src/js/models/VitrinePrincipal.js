import { Vitrine } from "./Vitrine.js";

export class VitrinePrincipal extends Vitrine {
    constructor(elementoPai, produtos, carrinho) {
        super(elementoPai, produtos);
        this.carrinho = carrinho;
        this.elementoPai.addEventListener("click", this);
    }
    handleEvent(event) {
        switch (event.type) {
            case "click":
                this.adicionarNoCarrinho(event);
                break;
            default:
        }
    }
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
    
    mostrarTodos() {
        this.listarProdutos(this.produtos);
      }
}