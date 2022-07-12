import { Login } from "././controllers/controller.login.js";
import { Register } from "./controllers/controller.register.js";
import { Logged } from "./controllers/controller.logged.js";
import { Logout } from "./controllers/controller.logout.js";
import { Posts } from "./controllers/controller.posts.js";
import { Toast } from "./toast.js";

class Api {
  static token = ""

  static BASE_URL = "https://blog-m2.herokuapp.com"

  static async login(data) {

    try {
      const apiResponse = await fetch(this.BASE_URL + "/users/login", {
        method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
        headers: {
          "Content-Type": "application/json", // Indica o tipo de dado da requisição
        },
        body: JSON.stringify(data), // Informando as informações do usuário
      })

      if (apiResponse.status != 200) {
        throw new Error
      }
      const token = await apiResponse.json()

      Api.token = token //Sempre que fizermos a requisição nosso token será atualizado

      localStorage.setItem('token', JSON.stringify(token.token))
      localStorage.setItem('userId', JSON.stringify(token.userId))

      return token;

    } catch (error) {
      return Toast.showError('Cheque suas credenciais.')
    }


  }

  static async getUser(id, token) {
    token = localStorage.getItem('token') // Recebendo token
    token = JSON.parse(token) //  Tratando, pois precisa tirar o ""

    const user = await fetch(this.BASE_URL + `/users/${id}`, {
      method: "GET", // Indica o tipo de requisição GET, POST, PATCH, DELETE
      headers: {
        "Content-Type": "application/json", // Indica o tipo de dado da requisição
        "Authorization": `Bearer ${token}`
      },
    })
      .then(res => res.json())
      .then(data => data)
      .catch((error) => console.log(error))

    return user
  }



/*     static async createUser(data) {
      try {
        const apiResponse = await fetch(this.BASE_URL + "/users/register", {
          method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
          headers: {
            "Content-Type": "application/json", // Indica o tipo de dado da requisição
          },
          body: JSON.stringify(data), // Informando as informações do usuário
        })
  
        if (apiResponse.status != 201) {
          throw new Error
        }
        const response = await apiResponse.json()
  
        this.returnToLogin()
        Toast.register('Conta criada com sucesso!')
        return response;
      } catch (error) {
        return Toast.showError('Cadastro não realizado.')
      }
    } */

  static async createUser(data) {
    const apiResponse = await fetch(this.BASE_URL + "/users/register", {
      method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
      headers: {
        "Content-Type": "application/json", // Indica o tipo de dado da requisição
      },
      body: JSON.stringify(data), // Informando as informações do usuário
    })
      .then(res => res.json())
      .catch((error) => error);

    /* if (apiResponse.status != 201) {
      throw new Error
    } */
    console.log(apiResponse)
    let errorAvatar = 'avatarUrl is a required field'
    let errorUser = 'An user with the same username is already registered'
    let errorEmail = 'An user with the same email is already registered'
    let errorPassword = 'password must have at least six digits, one capital letter and one number'
 
    if (apiResponse.message == errorPassword) {
      return Toast.showError('A senha tem que ter no mínimo: 6 dígitos, 1 letra maiúscula e 1 número')
    }
    if (apiResponse.message == errorEmail) {
      return Toast.showError('Já existe um usuário com o mesmo e-mail!')
    }
    if (apiResponse.message == errorUser) {
      return Toast.showError('Já existe um usuário com o nome de usuário!')
    }
    if (apiResponse.message == errorAvatar) {
      return Toast.showError('O campo de imagem deve ser preenchido com um link de uma imagem')
    }

    this.returnToLogin()
    return Toast.register('Conta criada com sucesso!')    
  }

  static async getPosts() {
    this.token = localStorage.getItem('token') // Recebendo token
    this.token = JSON.parse(this.token) //  Tratando, pois precisa tirar o ""
    const posts = await fetch(this.BASE_URL + '/posts?page=1', {
      method: "GET", // Indica o tipo de requisição GET, POST, PATCH, DELETE
      headers: {
        "Content-Type": "application/json", // Indica o tipo de dado da requisição
        "Authorization": `Bearer ${Api.token}`
      },
    })
      .then(res => res.json())
      .then(data => data)
      .catch((error) => console.log(error));

    return posts
  }

  static async getYourPosts(id) {
    const yourPosts = await fetch(this.BASE_URL + `/posts/${id}`, {
      method: "GET", // Indica o tipo de requisição GET, POST, PATCH, DELETE
      headers: {
        "Content-Type": "application/json", // Indica o tipo de dado da requisição
        "Authorization": `Bearer ${Api.token}` // Adicionamos um token de acesso validado pelo header Authorization
      }
    })
      .then(res => res.json())
      .then(data => data)
      .catch((error) => console.log(error));

    return yourPosts
  }

  static async createPost(data) {
    const response = await fetch(this.BASE_URL + "/posts", {
      method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
      headers: {
        "Content-Type": "application/json", // Indica o tipo de dado da requisição
        "Authorization": `Bearer ${Api.token}` // Adicionamos um token de acesso validado pelo header Authorization
      },
      body: JSON.stringify(data), // Informando as informações do usuário
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => console.log(error));
    return response;
  }

  static async updatePost(data, id) {
    const response = await fetch(this.BASE_URL + `/posts/${id}`, {
      method: "PATCH", // Indica o tipo de requisição GET, POST, PATCH, DELETE
      headers: {
        "Content-Type": "application/json", // Indica o tipo de dado da requisição
        "Authorization": `Bearer ${Api.token}` // Adicionamos um token de acesso validado pelo header Authorization
      },
      body: JSON.stringify(data), // Informando as informações do usuário
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => console.log(error));
    return response;
  }

  static async destroyPost(id) {
    const response = await fetch(this.BASE_URL + `/posts/${id}`, {
      method: "DELETE", // Indica o tipo de requisição GET, POST, PATCH, DELETE
      headers: {
        "Content-Type": "application/json", // Indica o tipo de dado da requisição
        "Authorization": `Bearer ${Api.token}` // Adicionamos um token de acesso validado pelo header Authorization
      }
    })
      .then((res) => res)
      .catch((error) => console.log(error));
    return response;
  }

  static showModalLogin() {
    const modalLogin = document.querySelector('.modal-login')
    modalLogin.classList.remove('display-none')
  }

  static createAccountModal() {
    const btnCreateAccount = document.querySelector('.register-link')

    btnCreateAccount.addEventListener('click', event => {
      event.preventDefault()
      const modalLogin = document.querySelector('.modal-login')
      modalLogin.classList.add('display-none')

      const modalRegister = document.querySelector('.modal-register')
      modalRegister.className = ('modal-register')
    })
  }

  static returnToLogin() {
    const btnRegister = document.querySelector('.register-button')
    const btnLogin = document.querySelector('.login-link')
    btnLogin.addEventListener('click', event => {
      event.preventDefault()

      const modalLogin = document.querySelector('.modal-login')
      modalLogin.className = ('modal-login')

      const modalRegister = document.querySelector('.modal-register')
      modalRegister.className = ('modal-register display-none')
    })
  }

}

export { Api }

Login.request()
Logged.areYouLogged()
Api.createAccountModal()
Api.returnToLogin()
Logout.request()
Posts.edit()
Posts.create()
Posts.show()
window.setInterval(() => {
  Posts.show()
}, 30000)
Posts.delete()
Register.request()

