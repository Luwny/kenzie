export class DeleteHabits{

    static modalDelete = document.querySelector("#modal-delete")
    static modalEdit = document.querySelector("#modal-edit")

    static modalRender()
    {

        this.modalDelete.innerHTML = ""
        this.modalEdit.innerHTML = ""

        const containerMain = document.createElement('div')
        const container = document.createElement('div')
        const deleteContainer = document.createElement('div')
        const title = document.createElement('h3')
        const exitButton = document.createElement('button')
        const subTitle = document.createElement('h2')
        const paragaph = document.createElement('p')
        const containerButton = document.createElement('div')
        const cancelButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        containerMain.classList.add('delete-habits-container-principal')
        container.classList.add('delete-habits-container')
        deleteContainer.classList.add('delete-habits-container-button')
        exitButton.classList.add('delete-button-close')
        containerButton.classList.add('delete-button-container')
        cancelButton.classList.add('delete-button-cancel')
        deleteButton.classList.add('delete-button')

        title.innerText = 'Excluir hábito'
        exitButton.innerText = 'X'
        subTitle.innerText = 'Certeza que deseja excluir esse hábito?'
        paragaph.innerText = 'Esta alteração não poderá ser desfeita.'
        cancelButton.innerText = 'Cancelar'
        deleteButton.innerText = 'Sim, excluir este hábito'
        
        containerMain.append(container)
        container.append(deleteContainer,subTitle, paragaph,containerButton)
        deleteContainer.append(title,exitButton)
        containerButton.append(cancelButton, deleteButton)

        this.modalDelete.append(containerMain)

        this.closeModal()
    }
    static closeModal()
    {
        const close = document.querySelector(".delete-button-close")
        const cancel = document.querySelector(".delete-button-cancel")
        close.addEventListener("click",(eve)=>
        {
            this.modalDelete.innerHTML = ""
        })
        cancel.addEventListener("click", (eve)=>{
                this.modalDelete.innerHTML = ""
        })
    }
}
