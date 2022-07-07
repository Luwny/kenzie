import { Api } from "../Api.js"
import { User } from "./controller.user.js"
import { Toast } from "../toast.js"

export class Logged {

    static async areYouLogged() {        
        let token = localStorage.getItem('token')
        let id = localStorage.getItem('userId')
        let user = await Api.getUser(id, token)
        if (!token && !id) {
            Api.showModal()

        }
        if (token && id) {
            User.getUserInfos()
            Toast.show(`Olá, ${user.username}`, `Você já está logado!`)
        }
    }
}

