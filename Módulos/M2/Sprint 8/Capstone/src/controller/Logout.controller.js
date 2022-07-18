import { Toast } from "../views/toast.js"
export class LogoutController {
  static logout() {
    Toast.show('Tchau,','Deslogado com sucesso!')
    setTimeout(() => {
      localStorage.removeItem("@habit:token")
      localStorage.removeItem("@habit:image")
      localStorage.removeItem("@habit:name")
      window.location.href = "/index.html"
    }, "2000")
  }

  static listener() {
    const logoutButton = document.querySelector(".dropdown-logout")

    logoutButton.addEventListener("click", this.logout)
  }
}
