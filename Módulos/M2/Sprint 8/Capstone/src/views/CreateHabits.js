export class CreateHabits {
  static habitCreate = document.querySelector("#modal-create")

  static modalRender() {
    this.habitCreate.innerHTML = ""
    const containerMain = document.createElement("div")
    const container = document.createElement("div")
    const close = document.createElement("div")
    const createDelete = document.createElement("div")
    const habitH2 = document.createElement("h2")
    const exitButton = document.createElement("button")
    const labelTitle = document.createElement("label")
    const inputTitle = document.createElement("input")
    const labelDescription = document.createElement("label")
    const inputDescription = document.createElement("input")
    const labelCategory = document.createElement("label")
    const selectCategory = document.createElement("select")
    const optionHealth = document.createElement("option")
    const optionStudy = document.createElement("option")
    const optionHome = document.createElement("option")
    const optionWork = document.createElement("option")
    const buttonAdd = document.createElement("button")

    containerMain.classList.add("create-container-principal")
    container.classList.add("create-container")
    close.classList.add("close")
    createDelete.classList.add("create-delete")
    exitButton.classList.add("create-button")
    buttonAdd.classList.add("create-button-inserir")

    close.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`
    habitH2.innerText = "Criar hábito"
    labelTitle.for = "title"
    inputTitle.placeholder = "Digitar Título"
    inputTitle.className = "create-title-input"
    labelDescription.for = "description"
    inputDescription.placeholder = "Digitar Descrição"
    inputDescription.className = "create-description-input"
    labelCategory.for = "category"
    selectCategory.id = "category"
    optionHealth.value = "saude"
    optionHealth.innerText = "Saúde"
    optionStudy.value = "estudos"
    optionStudy.innerText = "Estudos"
    optionHome.value = "casa"
    optionHome.innerText = "Casa"
    optionWork.value = "trabalho"
    optionWork.innerText = "Trabalho"
    buttonAdd.innerText = "Inserir"

    inputDescription.required = true
    inputTitle.required = true

    selectCategory.append(optionHealth, optionStudy, optionHome, optionWork)

    createDelete.append(habitH2, exitButton)

    container.append(
      close,
      createDelete,
      labelTitle,
      inputTitle,
      labelDescription,
      inputDescription,
      labelCategory,
      selectCategory,
      buttonAdd
    )

    containerMain.appendChild(container)

    this.habitCreate.append(containerMain)

    //Animação

    container.style.top = "-600px"

    setTimeout(() => {
      container.style.top = "0"
    }, 300)

    //Animação

    this.closeRender()
  }
  static closeRender() {
    const close = document.querySelector(".close")
    const container = document.querySelector(".create-container")
    close.addEventListener("click", (eve) => {
      //Animação

      container.style.top = "600px"
      setTimeout(() => {
        this.habitCreate.innerHTML = ""
      }, 300)

      //Animação
    })
  }
}
