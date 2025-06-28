import { Component } from '@angular/core';
import { ImageListService } from '../../services/image-list.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css',
    standalone: false
})
export class MainPageComponent {
    images: Array<object>;

    constructor(imageList: ImageListService) {
        this.images = imageList.getImages.slice(0, 16).map(x => ({
            image: `../../../assets/images/galery/full/${x.pictureName}`,
            thumbImage: `../../../assets/images/galery/${x.pictureName}`
        }));
    }
}
