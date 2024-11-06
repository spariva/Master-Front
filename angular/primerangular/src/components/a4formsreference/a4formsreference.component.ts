import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'formsreference-component',
    templateUrl: './a4formsreference.component.html'
})

export class A4FormsReference {
    @ViewChild("cajaN1") cajaN1Ref!: ElementRef;
    @ViewChild("cajaN2") cajaN2Ref: ElementRef;
    public suma!: number;

    constructor() { 
        // this.suma = 0;
        // this.cajaN1Ref = new ElementRef(0);
        this.cajaN2Ref = new ElementRef(0);
    }

    sumar(): void {
        let num1 = this.cajaN1Ref.nativeElement.value;
        let num2 = this.cajaN2Ref.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2);
    } 
}