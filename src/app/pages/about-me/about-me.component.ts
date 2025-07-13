import { Component } from '@angular/core';
import ImageViewer from "awesome-image-viewer";

@Component({
    selector: 'app-about-me',
    standalone: false,
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

    public imageIndexes: any[];

    constructor() {
        this.imageIndexes = [{
            mainUrl: `../../../assets/images/about-me/about-me-1.jpg`,
            thumbnailUrl: `../../../assets/images/about-me/about-me-1.jpg`,
            description: ''
        }, {
            mainUrl: `../../../assets/images/about-me/about-me-2.jpg`,
            thumbnailUrl: `../../../assets/images/about-me/about-me-2.jpg`,
            description: ''
        }, {
            mainUrl: `../../../assets/images/about-me/about-me-3.jpg`,
            thumbnailUrl: `../../../assets/images/about-me/about-me-3.jpg`,
            description: ''
        }, {
            mainUrl: `../../../assets/images/about-me/about-me-4.jpeg`,
            thumbnailUrl: `../../../assets/images/about-me/about-me-4.jpeg`,
            description: ''
        }]
    }

    openImage(image: number): void {
        new ImageViewer({
            images: this.imageIndexes,
            currentSelected: image
        });
    }
}
