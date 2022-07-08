import { Api } from "../Api.js";
const main = document.querySelector('main')
const divPosts = document.createElement('div')

export class Posts {
    static async show() {
        let id = localStorage.getItem('userId')
        let posts = await Api.getPosts()

        posts.data.forEach(elem => {            
            const divPostCard = document.createElement('div')
            const imgUser = document.createElement('img')
            const divCardContent = document.createElement('div')
            const h1Author = document.createElement('h1')
            const pText = document.createElement('p')
            const divIcons = document.createElement('div')
            const iEdit = document.createElement('i')
            const iTrash = document.createElement('i')

            divPosts.className = 'posts'
            divPostCard.className = 'card post-card'
            imgUser.className = 'card-picture'
            divCardContent.className = 'card-content'
            divIcons.className = 'icons display-none'
            h1Author.className = 'post-card-author-name'
            pText.className = 'card-text'
            divIcons.className = 'icons'


            h1Author.innerText = elem.user.username
            imgUser.src = elem.user.avatarUrl
            pText.innerText = elem.content

            divPosts.appendChild(divPostCard)
            divPostCard.append(imgUser, divCardContent, divIcons)
            divCardContent.append(h1Author, pText)
            divIcons.append(iEdit, iTrash)
            main.appendChild(divPosts)

            if (elem.user.id == id) {
                iEdit.className = 'fa fa-pencil-square-o'
                iEdit.id = 'pencil'
                iTrash.className = 'fa fa-trash-o'
                iTrash.id ='trash'
                iEdit.ariaHidden = 'true'
                iTrash.ariaHidden = 'true'
            }              
        }) 
              
    }

}