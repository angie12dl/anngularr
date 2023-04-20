import { Component, ViewChild, ElementRef } from '@angular/core';


@Component ({
    selector:'crud-search-box',
    template: 
    ` <h5>Buscar :</h5>
    <input type="text" 
    class="form-control" 
    placeholder="ooooo..."
    (keyup.enter)="searchTag()"
    #txtTagImput
    >
    `
})

export class SearchBoxComponent {
    
    @ViewChild('txtTagImput')
    public tagInput!: ElementRef<HTMLInputElement>;

    constructor( private gifsService: GifsService ) {}

    searchTag() {
        const newTag = this.tagInput.nativeElement.value;
        console.log({ newTag});
        this.gifsService.searchTag( newTag);
        this.tagInput.nativeElement.value = '';
    }
}