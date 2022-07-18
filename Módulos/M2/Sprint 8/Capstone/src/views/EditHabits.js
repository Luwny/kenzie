import { UserHabitsAll } from "../models/Habits/UserHabitsAll.js"
import { DeleteHabits } from "./DeleteHabits.js"
import { EditHabitController } from "../controller/EditHabit.controller.js"
import { ApiController } from "../controller/Api.controller.js"
import { Toast } from "./toast.js"
export class EditHabits {
  static modalEdit = document.querySelector("#modal-edit")

  static modalRender(title, description, category, status) {
    this.modalEdit.innerHTML = ""

    const containerPai = document.createElement("div")
    containerPai.classList.add("container__pai")
    const container = document.createElement("div")
    container.className = "modal-edit-container"

    container.append(
      this.modalTitle(),
      this.modalContent(title, description, category, status),
      this.modalActions()
    )
    containerPai.append(container)
    this.modalEdit.appendChild(containerPai)

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
    modalTitle.innerText = "Editar hábito"

    const modalClose = document.createElement("button")
    modalClose.className = "modal-close"
    modalClose.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`

    modalHeader.append(modalTitle, modalClose)

    return modalHeader
  }

  static modalContent(title, description, category, status) {
    const modalContent = document.createElement("div")
    modalContent.className = "modal-content"

    const modalForm = document.createElement("form")
    modalForm.className = "modal-edit-form"

    const titleLabel = document.createElement("label")
    titleLabel.innerText = "Título"

    const titleInput = document.createElement("input")
    titleInput.className = "input"
    titleInput.type = "text"
    titleInput.placeholder = "Fazer exercícios segunda pela manhã"
    titleInput.name = "title"
    titleInput.value = title

    const descriptionLabel = document.createElement("label")
    descriptionLabel.innerText = "Descrição"

    const descriptionTextArea = document.createElement("textarea")
    descriptionTextArea.innerText = description
    descriptionTextArea.className = "input"
    descriptionTextArea.name = "description"
    descriptionTextArea.cols = "20"
    descriptionTextArea.rows = "5"
    descriptionTextArea.placeholder =
      "Ir correr na  praça próximo de casa ás 7:30 da manhã"

    const categoryLabel = document.createElement("label")
    categoryLabel.innerText = "Categoria"

    const categorySelect = document.createElement("select")
    categorySelect.className = "input"
    categorySelect.id = "category"

    const optionSelect = document.createElement("option")
    optionSelect.value = category
    optionSelect.id = category
    optionSelect.innerText = category[0].toUpperCase() + category.substring(1)

    const optionSaude = document.createElement("option")
    optionSaude.value = "saude"
    optionSaude.id = "saude"
    optionSaude.innerHTML = '&#128138; Saude'

    const optionCasa = document.createElement("option")
    optionCasa.value = "casa"
    optionCasa.id = "casa"
    optionCasa.innerHTML = "&#127968; Casa"

    const optionEstudos = document.createElement("option")
    optionEstudos.value = "estudos"
    optionEstudos.id = "estudos"
    optionEstudos.innerHTML = "&#128218; Estudos"

    const optionTrabalho = document.createElement("option")
    optionTrabalho.value = "trabalho"
    optionTrabalho.id = "trabalho"
    optionTrabalho.innerHTML = "&#x1F4BC; Trabalho"

    const statusLabel = document.createElement("label")
    statusLabel.className = "form-checkbox"
    statusLabel.innerText = "Status"

    const statusCheckbox = document.createElement("input")
    statusCheckbox.type = "checkbox"
    statusCheckbox.name = "status"
    if (status === true) {
      statusCheckbox.checked = true
    }
    categorySelect.append(
      optionSelect,
      optionSaude,
      optionEstudos,
      optionCasa,
      optionTrabalho
    )
    statusLabel.appendChild(statusCheckbox)
    modalForm.append(
      titleLabel,
      titleInput,
      descriptionLabel,
      descriptionTextArea,
      categoryLabel,
      categorySelect,
      statusLabel
    )
    return modalForm
  }

  static modalActions() {
    const modalActions = document.createElement("div")
    modalActions.className = "modal-actions"

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("modal-button", "button-delete")
    deleteButton.innerText = "Excluir"

    const saveButton = document.createElement("button")
    saveButton.classList.add("modal-button", "button-save")
    saveButton.innerText = "Salvar alterações"

    deleteButton.addEventListener("click", () => {
      this.closeModal()
      DeleteHabits.modalRender()

      const confirmDeleteButton = document.querySelector(".delete-button")
      confirmDeleteButton.addEventListener("click", async () => {
        await ApiController.apiDeleteHabitsById(
          localStorage.getItem("@habit:idPost")
        )
        localStorage.removeItem("@habit:idPost")
        Toast.success("Sucesso!", "Hábito deletado!")
        setTimeout(async () => {
          document.location.reload(true)
        }, "2000")
      })
    })

    saveButton.addEventListener("click", async () => {
      let id = parseInt(localStorage.getItem("@habit:idPost"))
      const titleEdit = document.querySelector(".input")
      const descriptionEdit = document.getElementsByName("description")[0]
      const categoryEdit = document.getElementById("category")
      const statusCheckbox = document.getElementsByName("status")[0]
      await EditHabitController.editModal(
        titleEdit.value,
        descriptionEdit.value,
        categoryEdit.value
      )
      if (statusCheckbox.checked === true) {
        await ApiController.apiCompleteHabitsById(id)
      }
      localStorage.removeItem("@habit:idPost")
      setTimeout(async () => {
        window.location.reload()
      }, "2000")
    })
    modalActions.append(deleteButton, saveButton)
    return modalActions
  }
  static closeModal() {
    const close = document.querySelector(".modal-close")
    const container = document.querySelector(".modal-edit-container")
    close.addEventListener("click", (eve) => {
      //Animação

      container.style.top = "1200px"
      setTimeout(() => {
        this.modalEdit.innerHTML = ""
      }, 300)

      //Animação
    })
  }
}
