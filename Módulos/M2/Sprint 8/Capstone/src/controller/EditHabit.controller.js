
import { ApiController } from "./Api.controller.js"
import { UserHabitsAll } from "../models/Habits/UserHabitsAll.js"
import { Toast } from "../views/toast.js"
export class EditHabitController {
    static async editModal(title, description, category) {
        let id = parseInt(localStorage.getItem('@habit:idPost'))
        let data = {
            "habit_title": title,
            "habit_description": description,
            "habit_category": category,
        }
        Toast.success('Sucesso!', 'Hábito atualizado!')

        return await ApiController.apiUpdateHabitsById(id, data)
    }
}