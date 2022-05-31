colocarLayoutStatico()

let botoes = document.querySelectorAll('.botao');

const conteudoCentral = document.querySelector('.conteudoCentral');

const cores = ['verde', 'amarelo', 'vermelho', 'azul'];

let sequencia = [];

let sequenciaDoUsuario = [];

let maiorPontuacao = 0;

function colocarLayoutStatico() {
    const layout = document.createElement('section');
    let script = document.querySelector('script');

    layout.innerHTML = `
    <header>
        <h1>Genius</h1>
    </header>

    <main>
        <div id="botao1" class="botao" data-color="verde"></div>
        <div id="botao2" class="botao" data-color="amarelo"></div>
        <div id="botao3" class="botao" data-color="vermelho"></div>
        <div id="botao4" class="botao" data-color="azul"></div>

        <section class="paiCentral">
            <div class="conteudoCentral">

            </div>
        </section>
    </main>`;

    document.body.insertBefore(layout, script);
}

const sortear = () => {
    let index = Math.round(Math.random() * 3);

    sequencia.push(cores[index])
}

const mostrarSequencia = () => {
    let tempo = 0;
    sequencia.forEach((item) => {
        setTimeout(() => {
            let botao = document.querySelector(`div[data-color=${item}]`)

            botao.style.animationName = `${botao.getAttribute('data-color')}`;

            setTimeout(() => {
                botao.style.animationName = '';
            }, 900)
        }, tempo)

        tempo += 1000;
    })
}

const verificar = () => {
    for (let i = 0; i < sequenciaDoUsuario.length; i++) {
        if (sequencia[i] !== sequenciaDoUsuario[i]) {
            return false;
        }
    }
    return true;
}

const ouvinte = (event) => {
    event.target.style.animationName = `${event.target.getAttribute('data-color')}`;

    setTimeout(() => {
        event.target.style.animationName = '';
    }, 900)

    sequenciaDoUsuario.push(event.target.getAttribute('data-color'));

    if (verificar()) {
        if (sequenciaDoUsuario.length === sequencia.length) {
            retirarClick()
            sequenciaDoUsuario = []
            let titulo = conteudoCentral.querySelector('.primeiroTitulo');
            let tempo;

            titulo.innerText = 'É isso aí, aguarde a próxima sequencia';

            setTimeout(() => {
                titulo.innerText = 'Prepare-se e boa sorte!!';
            }, 1700)

            setTimeout(() => {
                titulo.innerText = 'Preste atenção na sequência';
                sortear()

            }, 3000)

            setTimeout(() => {

                tempo = (1000 * sequencia.length);
                mostrarSequencia()

                setTimeout(() => {
                    titulo.innerText = 'Sua vez!, repita a sequencia na ordem correta';
                    vezDoJogador()


                }, tempo)

            }, 4000)
        }
    } else {
        retirarClick()

        maiorPontuacao = maiorPontuacao < sequencia.length - 1 ? sequencia.length - 1 : maiorPontuacao;

        conteudoCentral.innerHTML = `
        <h2 class="primeiroTitulo"> Que pena!</h2>
        <div class="textoPosErro">
            <h3>Você conseguiu ${sequencia.length - 1}.</h3>
            <h3>Maior pontuação ${maiorPontuacao}.</h3>
            <h3>A sequência está errada. Tente outra vez.</h3>
        </div>
        <button class="botaoCentral"> RECOMEÇAR </button>
        `;

        sequencia = [];
        sequenciaDoUsuario = [];

        conteudoCentral.querySelector('.botaoCentral').addEventListener('click', () => {
            comecar();
        })
    }
}

const vezDoJogador = () => {
    botoes.forEach((item) => {
        item.addEventListener('click', ouvinte)
    })
}

const retirarClick = () => {
    botoes.forEach((item) => {
        item.removeEventListener('click', ouvinte)
    })
}

const comecar = () => {
    conteudoCentral.innerText = '';
    const titulo = document.createElement('h2');
    titulo.classList.add('primeiroTitulo');
    conteudoCentral.appendChild(titulo)
    let tempo;

    setTimeout(() => {
        titulo.innerText = 'Seja Bem-vindo!';
    }, 1000)

    setTimeout(() => {
        titulo.innerText = 'Prepare-se e boa sorte!!';
    }, 2700)

    setTimeout(() => {
        titulo.innerText = 'Preste atenção na sequência';
        sortear()
    }, 4000)

    setTimeout(() => {
        tempo = (1000 * sequencia.length);
        mostrarSequencia()

        setTimeout(() => {
            titulo.innerText = 'Sua vez!, repita a sequencia na ordem correta';
            vezDoJogador()
        }, tempo)
    }, 5000)
}