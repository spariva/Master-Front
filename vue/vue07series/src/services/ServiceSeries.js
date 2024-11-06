import Global from "@/Global";

export default class ServiceSeries {
    // getSeries() {
    //     new Promise((resolve, reject) => {
    //         let url = Global.urlApi + "/series";
    //         axios.get(url)
    //             .then((response) => {
    //                 resolve(response.data);
    //             })
    //             .catch((error) => {
    //                 reject(error);
    //             }
    //     });
    // }

    async getSeries() {
        let url = Global.urlApi + "api/series/";
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    async getSerie(id) {
        let url = Global.urlApi + "api/series/" + id;
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    async getPersonajesSerie(id) {
        let url = Global.urlApi + "api/series/personajesserie/" + id;

        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    async getPersonajes(){
        let url = Global.urlApi + "api/personajes";

        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    async createPersonaje(personaje) {
        let url = Global.urlApi + "api/personajes/";

        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(personaje),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data = await response.json();
        return data;
    }

    async updatePersonaje(personaje) {
        let url = Global.urlApi + "api/personajes/" + personaje.idPersonaje + "/" + personaje.idSerie;

        let response = await fetch(url,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data = await response.json();
        return data;
    }


}