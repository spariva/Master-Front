import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServicePlantillas {
    constructor(private _http: HttpClient){}

    getFunciones(): Observable<any>{
        let request = "/api/plantilla/funciones";
        let url = environment.urlApiPlantilla + request;

        return this._http.get(url);
    }

    getPlantillaFunciones(funciones: string[]): Observable<any>{
        let data = "";
        for(var f of funciones){
            data += "funcion=" + f + "&";
        }
        data = data.substring(0, data.length - 1);
        let request = "/api/plantilla/plantillafunciones?" + data;
        let url = environment.urlApiPlantilla + request;

        return this._http.get(url);
    }

    getFuncion(funcion: string): Observable<any>{
        let request = "/api/plantilla/plantillafuncion/" + funcion;
        let url = environment.urlApiPlantilla + request;

        return this._http.get(url);
    }
}