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
        const music = new Audio('src/music/error.mp3');
        music.play()
        errorMessage.innerText = 'Erro'
        errorMessagee.innerText = message

        clearTimeout(x);
        toastError.style.transform = "translateX(0)";
        x = setTimeout(() => {
            toastError.style.transform = "translateX(400px)"
        }, 1800);
    }
    static async register(message) {
        const music = new Audio('src/music/success.mp3');
        music.play()
        userMessage.innerText = `Olá`
        welcomeMessage.innerText = message

        clearTimeout(x);
        toast.style.transform = "translateX(0)";
        x = setTimeout(() => {
            toast.style.transform = "translateX(400px)"
        }, 1800);
    }

    static async show(user, message) {
        const music = new Audio('src/music/success.mp3');
        music.play()
        let id = localStorage.getItem('userId')
        let token = localStorage.getItem('token')
        user = await Api.getUser(id, token)

        userMessage.innerText = `Olá, ${user.username}`
        welcomeMessage.innerText = message

        clearTimeout(x);
        toast.style.transform = "translateX(0)";
        x = setTimeout(() => {
            toast.style.transform = "translateX(400px)"
        }, 1800);
    }
    static close() {
        toast.style.transform = "translateX(400px)";
    }
}
