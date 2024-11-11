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

    getFuncion(funcion: string): Observable<any>{
        let request = "/api/plantilla/plantillafuncion/" + funcion;
        let url = environment.urlApiPlantilla + request;

        return this._http.get(url);
    }
}