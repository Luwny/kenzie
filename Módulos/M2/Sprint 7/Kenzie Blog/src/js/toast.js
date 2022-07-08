import { Api } from "./Api.js";

let x;
const toast = document.getElementById("toast");
const toastError = document.getElementById("toast-error")
const userMessage = document.querySelector('.user-message')
const welcomeMessage = document.querySelector('.welcome-message')
const errorMessage = document.querySelector('.user-message-error')
const errorMessagee = document.querySelector('.welcome-message-error')

export class Toast {
    static async showError(message) {

        errorMessage.innerText = 'Erro'
        errorMessagee.innerText = message

        clearTimeout(x);
        toastError.style.transform = "translateX(0)";
        x = setTimeout(() => {
            toastError.style.transform = "translateX(400px)"
        }, 3000);
    }
    static async show(user, message) {
        let id = localStorage.getItem('userId')
        let token = localStorage.getItem('token')
        user = await Api.getUser(id, token)

        userMessage.innerText = `Olá, ${user.username}`
        welcomeMessage.innerText = message

        clearTimeout(x);
        toast.style.transform = "translateX(0)";
        x = setTimeout(() => {
            toast.style.transform = "translateX(400px)"
        }, 3000);
    }
    static close() {
        toast.style.transform = "translateX(400px)";
    }
}
