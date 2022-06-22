const kenzieMusic = class {
    static musicaAtual = {};
    static async buscaMusica(nomeMusica) {
      if (nomeMusica.trim() === "") {
        alert("Digite o nome de alguma música.")
        return console.log("Busca inválida!")
      }
      await fetch(`https://simple-spotify-api.herokuapp.com?search=${nomeMusica}`)
        .then((res) => res.json())
        .then((res) => {
          const musica = res.data[0];
          if (!musica) {
            alert("Música não encontrada!");
            this.musicaAtual = {};
            return console.log("Música não encontrada!")
          } else {
            this.musicaAtual = musica;
          }
        });
    }
  };
  
  export default kenzieMusic;