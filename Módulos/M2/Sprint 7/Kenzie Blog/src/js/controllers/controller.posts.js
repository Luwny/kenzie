import { Api } from "../Api.js";
const main = document.querySelector('main')
const divPosts = document.createElement('div')

export class Posts {
    static async create() {
        const music = new Audio('src/music/sent.mp3');
        const editor = document.querySelector('.editor')
        editor.addEventListener('keypress', async event => {
            if (event.key === 'Enter') {                
                music.play();
                event.preventDefault()
                const data = {
                    "content": document.querySelector('.editor').value
                }
                await Api.createPost(data)
                setTimeout(() => {
                    location.reload();
                }, "500")
            }
        })

        const send = document.querySelector('#send-icon')
        send.addEventListener('click', async event => {
            music.play();
            if (event.key === 'Enter') {
                event.preventDefault()
            }
            const data = {
                "content": document.querySelector('.editor').value
            }
            console.log(data)
            await Api.createPost(data)
            setTimeout(() => {
                location.reload();
            }, "500")
        })

    }

    static async show() {
        divPosts.innerHTML = ""
        let id = localStorage.getItem('userId')
        let posts = await Api.getPosts()

        posts.data.forEach(elem => {

            const divPostCard = document.createElement('div')
            const figImg = document.createElement('figure')
            const imgUser = document.createElement('img')
            const divCardContent = document.createElement('div')
            const h1Author = document.createElement('h1')
            const pText = document.createElement('p')
            const divIcons = document.createElement('div')
            const iEdit = document.createElement('i')
            const iTrash = document.createElement('i')

            figImg.className = 'figImg'

            divPosts.className = 'posts'
            divPostCard.className = 'card post-card'
            imgUser.className = 'card-picture'
            divCardContent.className = 'card-content'
            divCardContent.id = elem.id + ' conteudo'
            divIcons.className = 'icons display-none'
            h1Author.className = 'post-card-author-name'
            pText.className = 'card-text'
            divIcons.className = 'icons'

            imgUser.addEventListener('error', event => {
                imgUser.src = "src/images/anonimo.jpg"
            })

            h1Author.innerText = elem.user.username
            imgUser.src = elem.user.avatarUrl
            pText.innerText = elem.content

            divPosts.appendChild(divPostCard)
            figImg.appendChild(imgUser)
            divPostCard.append(figImg, divCardContent, divIcons)
            divCardContent.append(h1Author, pText)
            divIcons.append(iEdit, iTrash)
            main.appendChild(divPosts)

            if (elem.user.id == id) {
                iEdit.className = 'fa fa-pencil-square-o'
                iEdit.id = elem.id
                iTrash.className = 'fa fa-trash-o'
                iTrash.id = elem.id
                iEdit.ariaHidden = 'true'
                iTrash.ariaHidden = 'true'
            }
        })
    }
    static async edit() {
        document.addEventListener('click', async event => {
            if (event.target.classList.contains('fa-pencil-square-o')) {
                let posts = await Api.getPosts()
                posts.data.find(elem => {
                    if (event.target.id == elem.id) {
                        const textArea = document.getElementById(`${elem.id} conteudo`)
                        textArea.innerHTML = `<textarea id="${elem.id + 1}"> ${elem.content}</textarea> <i id="send-icon2"class="fa fa-paper-plane" aria-hidden="true"></i>
                        </div>`
                        textArea.addEventListener('keypress', event => {
                            if (event.key == 'Enter') {
                                event.preventDefault()
                                
                                let newText = document.getElementById(elem.id + 1).value
                                const data = {
                                    "content": newText
                                }
                                console.log(data, elem.id)
                                Api.updatePost(data, elem.id)
                                setTimeout(() => {
                                    location.reload();
                                }, "500")
                            }
                        })
                        const sendIcon = document.querySelector('#send-icon2')
                        sendIcon.addEventListener('click', event => {
                            let newText = document.getElementById(elem.id + 1).value
                            const data = {
                                "content": newText
                            }
                            console.log(data, elem.id)
                            Api.updatePost(data, elem.id)
                            setTimeout(() => {
                                location.reload();
                            }, "500")
                        })
                    }
                })
            }
        })
    }

    static async delete() {
        document.addEventListener('click', async event => {
            if (event.target.classList.contains('fa-trash-o')) {
                let posts = await Api.getPosts()
                posts.data.find(elem => {
                    if (event.target.id == elem.id) {
                        Api.destroyPost(elem.id)
                        setTimeout(() => {
                            location.reload();
                        }, "500")
                    }
                })
            }
        })
    }
}