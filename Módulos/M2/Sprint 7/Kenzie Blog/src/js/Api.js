import { Login } from "././controllers/controller.login.js";
import { Register } from "./controllers/controller.register.js";
import { Logged } from "./controllers/controller.logged.js";
import { Logout } from "./controllers/controller.logout.js";
import { Posts } from "./controllers/controller.posts.js";

class Api {
  static token = ""

  static BASE_URL = "https://blog-m2.herokuapp.com"

  static async login(data) {
    const token = await fetch(this.BASE_URL + "/users/login", {
      method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
      headers: {
        "Content-Type": "application/json", // Indica o tipo de dado da requisição
      },
      body: JSON.stringify(data), // Informando as informações do usuário
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => console.log(error));

    Api.token = token //Sempre que fizermos a requisição nosso token será atualizado

    localStorage.setItem('token', JSON.stringify(token.token))
    localStorage.setItem('userId', JSON.stringify(token.userId))

    return token;
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

  

  static async createUser(data) {
    const response = await fetch(this.BASE_URL + "/users/register", {
      method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
      headers: {
        "Content-Type": "application/json", // Indica o tipo de dado da requisição
      },
      body: JSON.stringify(data), // Informando as informações do usuário
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => console.log(error));

    return response;

  }

  static async getPosts() {
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
      },
      body: JSON.stringify(data), // Informando as informações do usuário
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((error) => console.log(error));
    return response;
  }

  static showModal() {
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

Register.request()
Login.request()
Logged.areYouLogged()
Api.createAccountModal()
Api.returnToLogin()
Logout.request()

