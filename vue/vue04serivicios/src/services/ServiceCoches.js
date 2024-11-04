import axios from "axios";
import Global from "@/Global";

export default class ServiceCoches {
    getPromesa = new Promise(function(resolve){
        resolve("ok");
    })

    getCoches = new Promise(function(resolve){
        let coches = [];
        
        let request = "webresources/coches";
        let url = Global.urlApiCoches + request;

        axios.get(url).then(response =>{
            coches = response.data;
            
            resolve(coches);
        })
    })

}