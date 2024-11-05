import Global from "@/Global";

export default class ServicesCoches {
    getCochesPromise() {
        return new Promise((resolve, reject) => {
            let url = Global.urlApi + "api/coches/";

            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    async getCochesFetch() {
        return fetch(Global.urlApi + "api/coches/")
            .then(response => {
                return response.json();
            })
            // .catch(error => {
            //     console.error('There has been a problem with your fetch operation:', error);
            //     throw error;
            // });
    }

    async getCochesAsync() {
            let url = Global.urlApi + "api/coches/";
            let response = await fetch(url);
            let data = await response.json();
            return data;
    }

    async createCoche(coche) {
        let url = Global.urlApi + "api/coches/insertcoche";
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(coche),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async updateCoche(coche) {
        let url = Global.urlApi + "api/coches/updatecoche";
        let response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(coche),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async findCoche(id) {
        let url = Global.urlApi + "api/coches/findcoche/" + id;

        return fetch(url)
        .then(response => {
            return response.json();
        })

    }

    async deleteCoche(id) {
        let url = Global.urlApi + "api/coches/deletecoche/" + id;
        let response = await fetch(url);
        return response;
    }


}