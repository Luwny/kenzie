import { Api } from "../Api.js";

export class User {
    static async getUserInfos() {
        let id = localStorage.getItem('userId')
        let token = localStorage.getItem('token')
        let user = await Api.getUser(id, token)
        
        const userImg = document.querySelector('.user-image')
        const userName = document.querySelector('.user-name')

        userName.innerText = user.username
        userImg.src = user.avatarUrl
      }
}