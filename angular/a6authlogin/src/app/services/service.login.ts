import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Empleado } from "../models/empleado";

@Injectable()
export class ServiceLogin {
    constructor(private _http: HttpClient) { }

    getToken(userName: string, password: string): Observable<any> {
        let request = "auth/login";
        let url = environment.urlApi + request;
        console.log(userName + " y " + password);
        let body = {
            "userName": userName,
            "password": password
        };
        return this._http.post(url, body);
    }


    getEmpleados(): Observable<any> {
        let request = "api/empleados";
        let url = environment.urlApi + request;

        //*Dos maneras de hacerlo:
        // let header = new HttpHeaders();
        // header = header.set("Authorization", "Bearer " + environment.token);

        let headers = new HttpHeaders({
            "Authorization": "Bearer " + environment.token
        });
        return this._http.get(url, { headers: headers });
    }

}