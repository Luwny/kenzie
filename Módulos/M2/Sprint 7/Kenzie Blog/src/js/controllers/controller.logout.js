export class Logout {

    static request() {
        const btnLogout = document.querySelector('.logout-button')
        btnLogout.addEventListener('click', () => {                     
            localStorage.clear() 
            location.reload()                 
        })
        
    }
}