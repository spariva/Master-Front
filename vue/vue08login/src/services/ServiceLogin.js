import Global from "@/Global";

export default class ServiceLogin {
    token = "";
    fetchToken() {
        return this.token;
    }

    async getToken(userName, password) {
        let url = Global.urlApi + "auth/login";
        let body = { "userName": userName, "password": password };

        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data = await response.json();
        return data;
    }

    async getEmpleado(id) {
        let url = Global.urlApi + "api/empleados/" + id;
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    async getPerfil(){
    let url = Global.urlApi + "api/empleados/perfilempleado";
    let headers =  new Headers().set("Authorization", "Bearer " + this.token);
    let response = await fetch(url,
        { method: "GET",
        headers: { headers }
        });

    return response;
}


}
