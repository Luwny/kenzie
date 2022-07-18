import { CreateHabits } from "../views/CreateHabits.js"
import { ApiController } from "./Api.controller.js"
import { Toast } from "../views/toast.js"

export class CreateController {
    static eventCreate() {
        const button = document.querySelector('.create-tasks')
        button.addEventListener('click', (event) => {
            CreateHabits.modalRender()
            this.eventCreateHab()
        })
    }
    static eventCreateHab() {
        const createHabitsButton = document.querySelector('.create-button-inserir')

        createHabitsButton.addEventListener('click', async (event) => {
            event.preventDefault()
            const createTitle = document.querySelector('.create-title-input').value
            const createDescription = document.querySelector('.create-description-input').value
            const category = document.querySelector('#category').value

            const habit = {
                "habit_title": createTitle,
                "habit_description": createDescription,
                "habit_category": category
            }
            if(createTitle.length == 0 || createDescription.length == 0) {
                return Toast.showError('Cheque os campos.')
            }
            else
            {
                await ApiController.apiCreateHabits(habit)
                Toast.success('Sucesso!', 'Hábito criado.')
                setTimeout(() => {
                    window.location.reload();
                }, "2000")
            }
        })

    }
}
