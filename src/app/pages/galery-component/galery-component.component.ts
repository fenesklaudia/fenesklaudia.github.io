import { Component } from '@angular/core';
import ImageViewer from 'awesome-image-viewer';

@Component({
  selector: 'app-galery-component',
  templateUrl: './galery-component.component.html',
  styleUrl: './galery-component.component.css'
})
export class GaleryComponent {

  imageIndexes: any[];

  data = [{
    mainUrl: 'cdn.com/img1.jpg',
    thumbnailUrl: 'cdn.com/img1.min.jpg',
    description: 'Steel Wool',
  },
  {
    mainUrl: 'cdn.com/img2.jpg',
    thumbnailUrl: 'cdn.com/img2.min.jpg',
    description: 'Beach',
  }];

  constructor() {
    this.imageIndexes = Array(32).fill(35).map((x, i) => ({
      mainUrl: `../../../assets/images/galery/full/${i + 1}.jpg`,
      thumbnailUrl: `../../../assets/images/galery/${i + 1}.jpg`,
      description: ''
    })
    );
  }

  openImage(image: number): void {
    new ImageViewer({
      images: this.imageIndexes,
      currentSelected: image
    });
  }

}
