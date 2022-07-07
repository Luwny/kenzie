import { Api } from "../Api.js";
import { User } from "./controller.user.js";
import { Toast } from "../toast.js";


export class Login {

  static async request() {

    const btnLogin = document.querySelector('.login-button')

    btnLogin.addEventListener('click', async (event) => {      
      event.preventDefault()
      const login = document.querySelector('.login').value
      const password = document.querySelector('.password').value
      const data = {
        "email": login,
        "password": password
      }
      await Api.login(data)
      Api.showModal()
      //Timer pra recarregar a página
      setTimeout(() => {
        location.reload();
      }, "500")

      Toast.show(`Olá, ${user.username}`, `Logado(a) com sucesso!`)

    })
  }
}