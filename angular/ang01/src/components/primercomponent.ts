import {Component} from '@angular/core';

@Component({
    selector: "primer-component",
    template: "<h1>Primer Componente</h1>"
})

export class PrimerComponent {
    public titulo: string;
    public description: string;
    public año: number;

    constructor(){
        this.titulo = "Hola mundo";
        this.description = "Este es un componente de angular";
        this.año = 2021;

    }
}