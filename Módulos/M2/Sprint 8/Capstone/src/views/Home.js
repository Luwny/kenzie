import { ApiController } from "../controller/Api.controller.js"
import { CreateController } from "../controller/Create.controller.js"
import { EditController } from "../controller/Edit.controller.js"
import { LogoutController } from "../controller/Logout.controller.js"
import { EditHabits } from "./EditHabits.js"
import { DeleteController } from "../controller/Delete.controller.js"

export class Home {
  static token = localStorage.getItem(`@habit:token`)
  static name = localStorage.getItem(`@habit:name`)
  static image = localStorage.getItem(`@habit:image`)

  static async render() {
    const posts = await ApiController.apiReadAllHabits()

    this.renderHeader(this.name, this.image)
    this.renderContent(posts)

    LogoutController.listener()
    CreateController.eventCreate()
    EditController.eventEdit()

  }

  static renderHeader(name, image) {
    const headerImg = document.querySelector(".header-content img")
    headerImg.src = image

    const subHeaderImg = document.querySelector(".user-content img")
    subHeaderImg.src = image

    const subHeaderUser = document.querySelector(".user-name")
    subHeaderUser.innerText = name

    //DROPDOWN LOGOUT, EDIT PROFILE
    const figureImg = document.querySelector(".dropdown")
    const divDown = document.createElement("div")
    divDown.classList.add("dropdown-content")

    const edit = document.createElement("p")
    edit.classList.add("dropdown-edit")
    const logout = document.createElement("p")
    logout.classList.add("dropdown-logout")

    edit.innerHTML = `<i class="fa fa-pencil-square-o" aria-hidden="true"></i>`
    logout.innerHTML = `<i class="fa fa-sign-out" aria-hidden="true"></i>`

    divDown.append(edit, logout)
    figureImg.appendChild(divDown)
  }

  static async renderContent(postsData) {
    const postList = document.querySelector(".all-tasks")

    const renderPosts = await postsData.forEach(
      ({
        habit_title,
        habit_description,
        habit_category,
        habit_status,
        habit_id,
      }) =>
        this.getPosts(
          habit_title[0].toUpperCase() + habit_title.substring(1),
          habit_description[0].toUpperCase() + habit_description.substring(1),
          habit_category[0].toUpperCase() + habit_category.substring(1),
          habit_status,
          habit_id
        )
    )
  }

  static getPosts(
    habit_title,
    habit_description,
    habit_category,
    habit_status,
    habit_id
  ) {
    const divStatus = document.querySelector(".task-status")
    const divTitle = document.querySelector(".task-title")
    const divDescription = document.querySelector(".task-description")
    const divCategory = document.querySelector(".task-category")
    const divEdit = document.querySelector(".task-edit")

    const postCheck = document.createElement("i")
    postCheck.id = habit_id

    if (habit_status === true) {
      postCheck.classList.add("fa", "fa-check", "fa-check-checked")
    }
    if (habit_status === false) {
      postCheck.classList.add("fa", "fa-check")
    }
    const postTitle = document.createElement("p")
    postTitle.innerText = habit_title

    if(habit_status === true){
      postTitle.style.textDecoration = "line-through"
    }
    
    const postDescription = document.createElement("p")
    postDescription.innerText = habit_description

    const postCategory = document.createElement("p")
    postCategory.innerText = habit_category

    const postEdit = document.createElement("i")
    postEdit.classList.add("fa", "fa-pencil-square-o")
    postEdit.id = habit_id

    divStatus.appendChild(postCheck)
    divTitle.appendChild(postTitle)
    divDescription.appendChild(postDescription)
    divCategory.appendChild(postCategory)
    divEdit.appendChild(postEdit)

    postEdit.addEventListener('click', async (e) => {
      e.preventDefault()

      EditHabits.modalRender(habit_title, habit_description, habit_category, habit_status)
      localStorage.setItem('@habit:idPost', `${habit_id}`)

    })
  }

  static async completed() {
    let newArr = []
    const posts = await ApiController.apiReadAllHabits()
    const tasks = document.querySelector('.select-tasks')
    const allTasks = document.querySelector('.all-tasks')
    tasks.addEventListener('click', async event => {
      newArr = []
      const taskDescription = document.querySelector('.task-description')
      const taskCategory = document.querySelector('.task-category')
      const taskStatus = document.querySelector('.task-status')
      const taskTitle = document.querySelector('.task-title')
      const taskEdit = document.querySelector('.task-edit')

      taskDescription.innerHTML = ""
      taskCategory.innerHTML = ""
      taskStatus.innerHTML = ""
      taskTitle.innerHTML = ""
      taskEdit.innerHTML = ""

      const taskTitleDescription = document.createElement('div')
      const taskTitleStatus = document.createElement('div')
      const taskTitleCategory = document.createElement('div')
      const taskTitleEdit = document.createElement('div')
      const taskTitleTitle = document.createElement('div')

      const h1Description = document.createElement('h1')
      const h1Status = document.createElement('h1')
      const h1Category = document.createElement('h1')
      const h1Edit = document.createElement('h1')
      const h1Title = document.createElement('h1')

      h1Description.innerText = 'Descrição'
      h1Status.innerText = 'Status'
      h1Status.className = 'task-title-status'
      h1Category.innerText = 'Categoria'
      h1Edit.innerText = 'Editar'
      h1Edit.className = 'task-edit-title'
      h1Title.innerText = 'Título'

      taskTitleDescription.appendChild(h1Description)
      taskTitleStatus.appendChild(h1Status)
      taskTitleCategory.appendChild(h1Category)
      taskTitleEdit.appendChild(h1Edit)
      taskTitleTitle.appendChild(h1Title)

      taskDescription.appendChild(taskTitleDescription)
      taskTitle.appendChild(taskTitleTitle)
      taskStatus.appendChild(taskTitleStatus)
      taskEdit.appendChild(taskTitleEdit)
      taskCategory.appendChild(taskTitleCategory)

      allTasks.append(taskStatus, taskTitle, taskDescription, taskCategory, taskEdit)

      await posts.forEach(elem => {
        if (elem.habit_status == true) {
          newArr.push(elem)
        }
      })
      await this.renderContent(newArr)
    })
  }
}
