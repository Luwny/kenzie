import { Toast } from "../views/toast.js"
export class ApiController {
  static baseUrl = `https://habits-kenzie.herokuapp.com/api`
  static token = localStorage.getItem("@habit:token")

  static async apiLogin(dataUser) {
    const login = await fetch(`${this.baseUrl}/userLogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    })
      .then((response) => response.json())
      .catch((err) => err)    
    
    console.log(login)

    return login
  }
  static async apiUpdateProfile(dataUser) {
    const updateProfile = await fetch(`${this.baseUrl}/user/profile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`,
      },
      body: JSON.stringify(dataUser),
    }).then((response) => response.json())

    console.log(updateProfile)

    return updateProfile
  }
  static async apiCreateHabits(dataHabit) {
    const createHabit = await fetch(`${this.baseUrl}/habits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`,
      },
      body: JSON.stringify(dataHabit),
    }).then((response) => response.json())

    console.log(createHabit)

    return createHabit
  }
  static async apiReadAllHabits() {
    const ReadAllHabits = await fetch(`${this.baseUrl}/habits`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    }).then((response) => response.json())

    return ReadAllHabits
  }
  static async apiReadCategoryHabits(category) {
    const readCategoryHabit = await fetch(
      `${this.baseUrl}/habits/category/${category}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${this.token}`,
        },
      }
    ).then((response) => response.json())

    console.log(readCategoryHabit)

    return readCategoryHabit
  }
  static async apiUpdateHabitsById(id, dataHabit) {
    const updateHabitById = await fetch(`${this.baseUrl}/habits/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`,
      },
      body: JSON.stringify(dataHabit),
    }).then((response) => response.json())

    console.log(updateHabitById)

    return updateHabitById
  }

  static async apiCompleteHabitsById(id) {
    const completeHabitById = await fetch(
      `${this.baseUrl}/habits/complete/${id}`,
      {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${this.token}`,
        },
      }
    ).then((response) => response.json())

    console.log(completeHabitById)

    return completeHabitById
  }
  static async apiDeleteHabitsById(id) {
    const deleteHabitById = await fetch(`${this.baseUrl}/habits/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    }).then((response) => response.json())

    console.log(deleteHabitById)

    return deleteHabitById
  }
}
