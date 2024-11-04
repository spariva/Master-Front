import Global from "@/Global";
import axios from "axios";

export default class ServiceEmpleados {
    getEmpleados() {
        return new Promise(function(resolve){
            let url = Global.urlApiEmpleados + "api/empleados";
            axios.get(url)
            .then((response) => {
                resolve(response.data)
            })
        })
    }

    findEmpleados(idEmpleado) {
        return new Promise(function(resolve){
            let url = Global.urlApiEmpleados + "api/empleados/" + idEmpleado;
            axios.get(url)
            .then((response) => {
                resolve(response.data)
            })
        })
    }

    getOficios(){
        return new Promise(function(resolve){
            let url = Global.urlApiEmpleados + "api/empleados/oficios";
            axios.get(url)
            .then((response) => {
                resolve(response.data)
            })
        })
    }

    getEmpleadosOficio(oficio){
        return new Promise((resolve,reject) => {
            let url = Global.urlApiEmpleados + "api/empleados/empleadosoficio/" + oficio;
            axios.get(url)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
        })
    }
}
