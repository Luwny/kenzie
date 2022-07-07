class Api {
    static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDc1LCJpYXQiOjE2NTcyMDE3NTEsImV4cCI6MTY1ODA2NTc1MSwic3ViIjoiW29iamVjdCBVbmRlZmluZWRdIn0.cNauA4i3k3CFk3N5mmaDL3JY0Ll3Wg1AGCymilkq3Lg"
    static BASE_URL = "https://m2-api-token.herokuapp.com/"

    static async getPublic() {
        const receitas = await fetch(this.BASE_URL + 'recipe', {
            method: "GET", // Indica o tipo de requisição GET, POST, PATCH, DELETE
            headers: {
                "Content-Type": "application/json", // Indica o tipo de dado da requisição
            },
        })
            .then(res => res.json())
            .then(data => data)
            .catch((error) => console.log(error));

        return receitas
    }

    static async getPrivate() {
        const receitas = await fetch( this.BASE_URL + 'recipe/user', {
          method: "GET", // Indica o tipo de requisição GET, POST, PATCH, DELETE
          headers: {
            "Content-Type": "application/json", // Indica o tipo de dado da requisição
            "Authorization": `Bearer ${Api.token}` // Adicionamos um token de acesso validado pelo header Authorization
          }
          })
          .then(res => res.json())
          .then(data => data)
          .catch((error) => console.log(error));
    
        return receitas
      }

      static async createUser(data) {
        const response = await fetch(this.BASE_URL + "auth/register",  {
            method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
            headers: {
              "Content-Type": "application/json", // Indica o tipo de dado da requisição
            },
            body: JSON.stringify(data), // Informando as informações do usuário
          })
          .then((res) => res.json())
          .then((res) => res)
          .catch((error) => console.log(error));
        return response;
      }

      static async login(data) {
        const token = await fetch(this.BASE_URL + "/auth/login", {
            method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
            headers: {
              "Content-Type": "application/json", // Indica o tipo de dado da requisição
            },
            body: JSON.stringify(data), // Informando as informações do usuário
          })
          .then((res) => res.json())
          .then((res) => res)
          .catch((error) => console.log(error));
      
        Api.token = token //Sempre que fizermos a requisição nosso token será atualizado
      
        return token;
      }

      static async createRecipe(data) {
        const response = await fetch(this.BASE_URL + "/recipe/user", {
            method: "POST", // Indica o tipo de requisição GET, POST, PATCH, DELETE
            headers: {
              "Content-Type": "application/json", // Indica o tipo de dado da requisição
              "Authorization": `Bearer ${Api.token}` // Adicionamos um token de acesso validado pelo header Authorization
            },
            body: JSON.stringify(data), // Informando as informações do usuário
          })
          .then((res) => res.json())
          .then((res) => res)
          .catch((error) => console.log(error));
        return response;
      }

      static async updateRecipe(data, idRecipe) {
        const response = await fetch(this.BASE_URL + `recipe/user/${idRecipe}`, {
            method: "PATCH", // Indica o tipo de requisição GET, POST, PATCH, DELETE
            headers: {
              "Content-Type": "application/json", // Indica o tipo de dado da requisição
              "Authorization": `Bearer ${Api.token}` // Adicionamos um token de acesso validado pelo header Authorization
            },
            body: JSON.stringify(data), // Informando as informações do usuário
          })
          .then((res) => res.json())
          .then((res) => res)
          .catch((error) => console.log(error));
        return response;
      }

      static async destroyRecipe(idRecipe) {
        const response = await fetch(this.BASE_URL + `recipe/user/${idRecipe}`,          {
            method: "DELETE", // Indica o tipo de requisição GET, POST, PATCH, DELETE
            headers: {
              "Content-Type": "application/json", // Indica o tipo de dado da requisição
              "Authorization": `Bearer ${Api.token}` // Adicionamos um token de acesso validado pelo header Authorization
            },
            body: JSON.stringify(data), // Informando as informações do usuário
          })
          .then((res) => res.json())
          .then((res) => res)
          .catch((error) => console.log(error));
        return response;
      }

}

export { Api }