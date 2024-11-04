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
}