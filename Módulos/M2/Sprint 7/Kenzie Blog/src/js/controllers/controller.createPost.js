import { Api } from "../Api.js";

export class UsersPosts {
    static async create() {
        const editor = document.querySelector('.editor')
        editor.addEventListener('keypress', async (e) => {
            if (e.key === 'Enter') {
                const data = {
                    "content": document.querySelector('.editor').value
                }
                await Api.createPost(data)
                 location.reload()
              }
        })
    }
}