//controllers
import { StatusController } from "./src/controller/Status.controller.js"
import { ApiController } from "./src/controller/Api.controller.js"
import { CompleteController } from "./src/controller/Complete.controller.js"
import { CreateController } from "./src/controller/Create.controller.js"
import {DeleteController} from "./src/controller/Delete.controller.js"
import {EditController} from "./src/controller/Edit.controller.js"
//views
import { Home } from "./src/views/Home.js"
import { CreateHabits } from "./src/views/CreateHabits.js"
import { DeleteHabits } from "./src/views/DeleteHabits.js"
import { EditHabits } from "./src/views/EditHabits.js"
import { EditProfile } from "./src/views/EditProfile.js"

//models
import { UserLogin } from "./src/models/Login/UserLogin.js"
import { UserHabitsAll } from "./src/models/Habits/UserHabitsAll.js"
import { UserHabitTitle } from "./src/models/Habits/UserHabitTitle.js"
import { UserHabitDescription } from "./src/models/Habits/UserHabitDescription.js"
import { UserHabitCategory } from "./src/models/Habits/UserHabitCategory.js"
import { UserHabitStatus } from "./src/models/Habits/UserHabitStatus.js"
import { UserProfileAll } from "./src/models/Profile/UserProfileAll.js"
import { UserProfileImg } from "./src/models/Profile/UserProfileImg.js"
import { UserProfileName } from "./src/models/Profile/UserProfileName.js"
import { Toast } from "./src/views/toast.js"

Home.render()
Home.completed()

if(localStorage.getItem('@habit:token') == null)
{
    location.href = "/index.html"
}