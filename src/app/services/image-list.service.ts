import { Injectable } from '@angular/core';
import { PictureViewModel } from '../vew-models/picture-view-model';

@Injectable({
  providedIn: 'root'
})
export class ImageListService {
  images: Array<PictureViewModel> = [];

  constructor() {
    this.images = [
      { pictureName: '1.jpg' },
      { pictureName: '2.jpg' },
      { pictureName: '3.jpg' },
      { pictureName: '4.jpg' },
      { pictureName: '5.jpeg' },
      { pictureName: '6.jpeg' },
      { pictureName: '36.jpg' },
      { pictureName: '35.jpg' },
      { pictureName: '34.jpg' },
      { pictureName: '33.jpg' },
      { pictureName: '37.jpg' },
      { pictureName: '38.jpg' },
      { pictureName: '1.1.jpg' },
      { pictureName: '1.2.jpg' },
      { pictureName: '1.3.jpg' },
      { pictureName: '1.4.jpg' },
      { pictureName: '9.jpg' },
      { pictureName: '10.jpg' },
      { pictureName: '7.jpg' },
      { pictureName: '8.jpg' },
      { pictureName: '19.jpg' },
      { pictureName: '20.jpg' },
      { pictureName: '21.jpg' },
      { pictureName: '22.jpg' },
      { pictureName: '23.jpg' },
      { pictureName: '24.jpg' },
      { pictureName: '27.jpg' },
      { pictureName: '28.jpg' },
      { pictureName: '29.jpg' },
      { pictureName: '30.jpg' },
      { pictureName: '31.jpg' },
      { pictureName: '32.jpg' },
    ]
  }

  get getImages() {
    return this.images;
  }
}
