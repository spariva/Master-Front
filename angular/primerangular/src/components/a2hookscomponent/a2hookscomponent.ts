import { Component, OnInit, DoCheck } from "@angular/core";


@Component({
  selector: "a2hooks-component",
  templateUrl: "./a2hooks.component.html",
  styleUrls: ["./a2hooks.component.css"]
})

export class A2HooksComponent implements OnInit {
    public mensaje: string;

    constructor() {
        console.log("constructor");
        this.mensaje = "Mensaje inicial";
    }

    ngOnInit() {
        console.log("ngOnInit");
    }

    ngDoCheck() {
        console.log("ngDoCheck");
    }

    cambiarMensaje(){
        this.mensaje = "Mensaje cambiado";
    }
}