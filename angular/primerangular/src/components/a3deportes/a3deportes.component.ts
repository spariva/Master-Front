import { Component } from "@angular/core";

@Component({
    selector: "a3deportes-component",
    templateUrl: "./a3deportes.component.html",
    styleUrls: ["./a3deportes.component.css"]
})

export class A3DeportesComponent {
    public deportes: string[];
    public numeros: number[];

    constructor() {
        this.deportes = ["Fútbol", "Baloncesto", "Tenis"];
        this.numeros = [2,3,4,5,6,7]
    }

}