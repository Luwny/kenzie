import { Api } from "../Api.js";

export class Register {

    static request() {
        const btnRegister = document.querySelector('.register-button')
        
        btnRegister.addEventListener('click', event => {
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
            Api.createUser(newUser)
            Api.showModal()
        })
    }
}