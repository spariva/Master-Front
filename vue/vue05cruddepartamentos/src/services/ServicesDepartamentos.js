import Global from "@/Global";
import axios from "axios";

export default class ServicesDepartamentos {
    getDepartamentos() {
        return new Promise((resolve, reject) =>{
            let url = Global.urlApiDep + "api/departamentos"

            axios.get(url).then(response =>{
                resolve(response.data)
            }).catch((error)=>{
                reject(error)
            })
        })
    }

    createDepartamento(departamento) {
        return new Promise((resolve,reject) =>{
            let url = Global.urlApiDep + "api/departamentos/"

            axios.post(url, departamento).then(response=>{
                resolve(response)
            }).catch(error=>{
                reject(error)
            })
        })
    }

    findDepartamento(id){
        return new Promise((resolve,reject)=>{
            let url = Global.urlApiDep + "api/departamentos/" + id;

            axios.get(url)
            .then(response=>{
                resolve(response.data)
            }).catch(error=>{
                reject(error)
            })

        })
    }

    updateDepartamento(departamento) {
        return new Promise((resolve,reject)=>{
            let url = Global.urlApiDep + "api/departamentos/"

            axios.put(url, departamento)
            .then(response=>{
                resolve(response)
            }).catch(error=>{
                reject(error)
            })

        })
    }

    deleteDepartamento(id) {
        return new Promise((resolve, reject) =>{
            let url = Global.urlApiDep + "api/departamentos/" + id;

            axios.delete(url).then(response=>{
                resolve(response)
            }).catch(error=>{
                reject(error)
            })
        })
    }
}