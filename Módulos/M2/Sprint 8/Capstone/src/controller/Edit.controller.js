import { UserProfileAll } from "../models/Profile/UserProfileAll.js"
import { UserProfileImg } from "../models/Profile/UserProfileImg.js"
import { UserProfileName } from "../models/Profile/UserProfileName.js"
import { EditProfile } from "../views/EditProfile.js"
import { ApiController } from "./Api.controller.js"
import { Toast } from "../views/toast.js"
 
export class EditController
{
    static eventEdit()
    {
        const editButton = document.querySelector(".dropdown-edit")
        editButton.addEventListener("click",this.edit)
    }
    static edit()
    {
        EditProfile.modalRender()

        const dropdownContent = document.querySelector(".dropdown-content")
        dropdownContent.style.zIndex = "0"

        const nomeForm = document.querySelector("#name")
        const avatarUrlForm = document.querySelector("#avatarUrl")

        const nomeUser = localStorage.getItem("@habit:name")
        const avatarUrlUser = localStorage.getItem("@habit:image")

        console.log(nomeUser,avatarUrlUser)

        nomeForm.value = nomeUser
        avatarUrlForm.value = avatarUrlUser

        const send = document.querySelector(".button-save")
        console.log(send)
        send.addEventListener("click",()=>
        {
            EditController.sendInfoUser()
        })
    }
    static async sendInfoUser(eve)
    {
        const nomeValue = document.querySelector("#name").value
        const avatarUrlValue = document.querySelector("#avatarUrl").value
        if(nomeValue.trim().match(/[\s\S]/gi))
        {
            if(avatarUrlValue.trim().match(/[\s\S]/gi))
            {
                const userProfile = new UserProfileAll(nomeValue,avatarUrlValue)

                const userEdit = await ApiController.apiUpdateProfile(userProfile)

                console.log(userEdit)

                const {usr_name,usr_image} = userProfile

                localStorage.setItem(`@habit:name`, `${usr_name}`)
                localStorage.setItem(`@habit:image`, `${usr_image}`)

                Toast.success('Sucesso!', 'Sua modificação foi feita!')
                setTimeout(() => {
                    return window.location.href = "../home.html"
                  }, "2000")               
            }
        }
        if(nomeValue.trim().match(/[\s\S]/gi))
        {
                const userProfile = new UserProfileName(nomeValue)

                const userEdit = await ApiController.apiUpdateProfile(userProfile)

                console.log(userEdit)

                const {usr_name} = userProfile

                localStorage.setItem(`@habit:name`, `${usr_name}`)

                Toast.success('Sucesso!', 'Sua modificação foi feita!')
                setTimeout(() => {
                    return window.location.href = "../home.html"
                  }, "2000")  
        }
        if(avatarUrlValue.trim().match(/[\s\S]/gi))
        {
            const useAvatarUrl = new UserProfileImg(avatarUrlValue)

            const EditAvatarUrl = await ApiController.apiUpdateProfile(useAvatarUrl)

            const {usr_image} = useAvatarUrl

            localStorage.setItem(`@habi:image`, `${usr_image}`)

            Toast.success('Sucesso!', 'Sua modificação foi feita!')
            setTimeout(() => {
                return window.location.href = "../home.html"
              }, "2000")  
        }

    }
}