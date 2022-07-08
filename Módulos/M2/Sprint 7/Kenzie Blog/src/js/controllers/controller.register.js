import { Api } from "../Api.js";
import { Toast } from "../toast.js";

const btnRegister = document.querySelector('.register-button')

export class Register {

    static request() {


        btnRegister.addEventListener('click', async event => {
            event.preventDefault()
            const login = document.querySelector('.login-register').value
            const email = document.querySelector('.email-register').value
            const password = document.querySelector('.password-register').value
            const url = document.querySelector('.url-register').value

            const newUser = {
                "username": login,
                "email": email,
                "avatarUrl": url,
                "password": password
            }
            await Api.createUser(newUser)
            
            // Toast.show(`Registro sucedido!`, `Conta criada com sucesso!`)

            /* const modalRegister = document.querySelector('.modal-register')
            modalRegister.className = ('modal-register display-none') */

        })
    }
}