import { Api } from "../Api.js"
import { User } from "./controller.user.js"

export class Logged {

    static async areYouLogged() {
        const hasToken = this.verifyToken()

        if (!hasToken) {
            return Api.showModalLogin()
        }

        let user = await Api.getUser(hasToken.id, hasToken.token)
        User.getUserInfos()
        
    }

    static verifyToken() {
        let token = localStorage.getItem('token')
        let id = localStorage.getItem('userId')

        if (!token || !id) {
            return false
        }

        return {token, id}
    }
}

