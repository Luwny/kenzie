import { Api } from "../Api.js";
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

      if (!login || !password) {
        localStorage.clear()
        return Toast.showError('Cheque suas credenciais.')
      }      
       
      await Api.login(data)

      let token = localStorage.getItem('token')
      let id = localStorage.getItem('userId')   

      

      if (!token || !id) {        
        return Toast.showError('Cheque suas credenciais.')
      }
      

           
      //Timer pra recarregar a página
      setTimeout(() => {
        location.reload();     
      }, "500")      
    })
  }
}