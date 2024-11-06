import { Component } from "@angular/core";

@Component ({
    selector: "formsbinding-component",
    templateUrl: "./formsbinding.component.html"
})

export class A4FormsBindingComponent {
    public user: any;
    public mensaje: string;

    constructor(){
        this.mensaje = "";
        this.user = {
            nombre: "",
            apellidos: "",
            edad: 0
        }
    }

    recibirDatos(): void {
        this.mensaje = "recibiendo datos";
    }
}