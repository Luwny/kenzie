export class EditProfile {
  static profileEdit = document.querySelector("#profile-edit")

  static modalRender(name, avatarUrl) {
    this.profileEdit.innerHTML = ""

    const containerPai = document.createElement("div")
    containerPai.classList.add("container__pai")

    const container = document.createElement("div")
    container.className = "modal-edit-container"

    container.append(
      this.modalTitle(),
      this.modalContent(name, avatarUrl),
      this.modalActions()
    )
    containerPai.append(container)

    this.profileEdit.appendChild(containerPai)

    // Animação
    container.style.top = "-1200px"

    setTimeout(() => {
      container.style.top = "0"
    }, 300)

    // Animação

    this.closeModal()
  }

  static modalTitle() {
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"

    const modalTitle = document.createElement("h3")
    modalTitle.className = "modal-title"
    modalTitle.innerText = "Editar perfil"

    const modalClose = document.createElement("button")
    modalClose.className = "modal-close"
    modalClose.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`

    modalHeader.append(modalTitle, modalClose)

    return modalHeader
  }

  static modalContent(name, avatarUrl) {
    const modalContent = document.createElement("div")
    modalContent.className = "modal-content"

    const modalForm = document.createElement("form")
    modalForm.className = "modal-edit-form"

    const titleLabel = document.createElement("label")
    titleLabel.innerText = "Nome"
    titleLabel.for = "name"

    const titleInput = document.createElement("input")
    titleInput.className = "input"
    titleInput.type = "text"
    titleInput.placeholder = "Seu nome completo"
    titleInput.name = "name"
    titleInput.value = name
    titleInput.id = "name"

    const avatarLabel = document.createElement("label")
    avatarLabel.innerText = "Link da Foto"
    avatarLabel.for = "avatarUrl"

    const avatarInput = document.createElement("input")
    avatarInput.className = "input"
    avatarInput.type = "url"
    avatarInput.placeholder = "https://imagem-url.com"
    avatarInput.name = "avatarUrl"
    avatarInput.value = avatarUrl
    avatarInput.id = "avatarUrl"

    modalForm.append(titleLabel, titleInput, avatarLabel, avatarInput)
    modalContent.appendChild(modalForm)

    return modalContent
  }

  static modalActions() {
    const modalActions = document.createElement("div")
    modalActions.className = "modal-actions-profile"

    const saveButton = document.createElement("button")
    saveButton.classList.add("modal-button", "button-save")
    saveButton.innerText = "Salvar alterações"

    saveButton.type = "submit"

    modalActions.append(saveButton)
    return modalActions
  }
  static closeModal() {
    const modal_close = document.querySelector(".modal-close")
    const container = document.querySelector(".modal-edit-container")
    modal_close.addEventListener("click", (eve) => {
      //Animação

      container.style.top = "1200px"
      setTimeout(() => {
        this.profileEdit.innerHTML = ""
      }, 300)

      //Animação
    })
  }
}
