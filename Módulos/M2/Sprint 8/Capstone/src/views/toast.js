import { LoginController } from "../controller/Login.controller.js"

let x;
const toast = document.getElementById("toast");
const wrapperSucess = document.querySelector(".wrapper")
const wrapperError = document.querySelector(".wrapper-error")
const toastError = document.getElementById("toast-error")
const userMessage = document.querySelector('.user-message')
const welcomeMessage = document.querySelector('.welcome-message')
const errorMessage = document.querySelector('.user-message-error')
const errorMessagee = document.querySelector('.welcome-message-error')
const icon = document.getElementById('editable-icon')

export class Toast {
    static async showError(message) {
        errorMessage.innerText = 'Erro'
        errorMessagee.innerText = message

        clearTimeout(x);
        toastError.style.transform = "translateX(0)";
        wrapperError.style.zIndex = "1"
        x = setTimeout(() => {
            toastError.style.transform = "translateX(400px)"
            wrapperError.style.zIndex = "-1"
        }, 3000);
    }
    static async register(message) {
        userMessage.innerText = `Olá`
        welcomeMessage.innerText = message

        clearTimeout(x);
        toast.style.transform = "translateX(0)";
        wrapperSucess.style.zIndex = "1"
        x = setTimeout(() => {
            toast.style.transform = "translateX(400px)"
            wrapperSucess.style.zIndex = "-1"
        }, 1800);
    }

    static async show(situation, message) {

        let name = localStorage.getItem('@habit:name')
        console.log(name)

        userMessage.innerText = `${situation} ${name}`
        welcomeMessage.innerText = message

        clearTimeout(x);
        toast.style.transform = "translateX(0)";
        wrapperSucess.style.zIndex = "1"
        x = setTimeout(() => {
            wrapperSucess.style.zIndex = "-1"
            toast.style.transform = "translateX(400px)"
        }, 3000);
    }

    static async success(situation, message) {

        let name = localStorage.getItem('@habit:name')
        console.log(name)

        userMessage.innerText = situation
        welcomeMessage.innerText = message

        clearTimeout(x);
        wrapperSucess.style.zIndex = "1"
        toast.style.transform = "translateX(0)";
        x = setTimeout(() => {
            wrapperSucess.style.zIndex = "-1"
            toast.style.transform = "translateX(400px)"
        }, 3000);
    }
    static close() {
        toast.style.transform = "translateX(400px)";
    }
}
