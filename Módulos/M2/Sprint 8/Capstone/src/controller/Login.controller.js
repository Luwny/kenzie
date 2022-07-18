import { UserLogin } from "../models/Login/UserLogin.js"
import { ApiController } from "./Api.controller.js"
import { Toast } from "../views/toast.js"


export class LoginController {
  static token = localStorage.getItem(`@habit:token`)
  static name = localStorage.getItem(`@habit:name`)
  static image = localStorage.getItem(`@habit:image`)

  static eventLogin() {
    const form_login = document.querySelector("#form-login")
    if (form_login) {
      form_login.addEventListener("submit", this.login)
    }
  }

  static async login(eve) {
    eve.preventDefault()
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const user = new UserLogin(email, password)

    const login = await ApiController.apiLogin(user)

    const { token, response } = login

    console.log(login)

    if (!login.message) {

      const  { usr_name, usr_image } = response
      localStorage.clear()
      localStorage.setItem(`@habit:token`, `${token}`)
      localStorage.setItem(`@habit:name`, `${usr_name}`)
      localStorage.setItem(`@habit:image`, `${usr_image}`)

        Toast.show('Olá, ','Seja bem vindo ao nosso Capstone!')
         
       setTimeout(() => {
        window.location.href = "/home.html"
      }, "2000")      
    } else{
      Toast.showError(login.message)
    }
  }
  static checkLogin() {
    if (this.token != null) {
      window.location.href = "/home.html"
    }
  }
}
