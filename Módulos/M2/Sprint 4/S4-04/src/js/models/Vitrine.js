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
} 