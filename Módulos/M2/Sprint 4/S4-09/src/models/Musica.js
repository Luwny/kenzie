import { kenzieMusic } from ("../utils/kenzieMusic.js")

export class Musica {
    constructor(id, name, artists, duration_ms, music_url) {
        this.id = id
        this.nome = name
        this.artistas = artists
        this.duracao = duration_ms
        this.url = music_url
    }
}


