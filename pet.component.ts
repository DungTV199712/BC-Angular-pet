import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-pet',
    templateUrl: './pet.component.html',
    styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

    petName = 'puppie';
    petImage = 'https://akns-images.eonline.com/eol_images/Entire_Site/2016515/' +
        'rs_1024x759-160615111729-1024-Kevin-Hart-The-Secret-Life-Of-Pets-JR-061516.jpg?fit=inside|900:auto&output-quality=90';

    constructor() {
    }

    updateName(name) {
        this.petName = name;
    }

    updateImage(image) {
        this.petImage = image;
    }
    ngOnInit() {
    }
}
