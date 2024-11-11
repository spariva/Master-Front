import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Departamento } from "../models/departamento";

@Injectable()
export class ServiceDepartamentos {
    constructor(private _http:HttpClient){}

    getDepartamentos(): Observable<any>{
        let request = "api/departamentos";
        let url = environment.apiDepartamentos + request;
        return this._http.get(url);
    }

    createDepartamento(departamento:Departamento): Observable<any>{
        let request = "api/departamentos";
        let url = environment.apiDepartamentos + request;

        let json = JSON.stringify(departamento);
        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");

        return this._http
        .post(url, 
            json,
            {headers: header}
        );
    }
}