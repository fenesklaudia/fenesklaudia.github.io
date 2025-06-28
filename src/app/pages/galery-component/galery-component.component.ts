import { Component } from '@angular/core';
import ImageViewer from 'awesome-image-viewer';
import { ImageListService } from '../../services/image-list.service';

@Component({
    selector: 'app-galery-component',
    templateUrl: './galery-component.component.html',
    styleUrl: './galery-component.component.css',
    standalone: false
})
export class GaleryComponent {

  imageIndexes: any[];

  constructor(imageList: ImageListService) {
    this.imageIndexes = imageList.getImages.map(x => ({
      mainUrl: `../../../assets/images/galery/full/${x.pictureName}`,
      thumbnailUrl: `../../../assets/images/galery/${x.pictureName}`,
      description: ''
    }));
  }

  openImage(image: number): void {
    new ImageViewer({
      images: this.imageIndexes,
      currentSelected: image
    });
  }

}
