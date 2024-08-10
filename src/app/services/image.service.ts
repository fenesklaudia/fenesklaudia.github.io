import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private _imagesLoading = new Subject<number>();
  imagesLoading$ = this._imagesLoading.asObservable();
  private images: Map<HTMLElement, boolean> = new Map();
  private imagesLoading = 0;

  imageLoading(img: HTMLElement) {
    if (!this.images.has(img) || this.images.get(img)) {
      this.images.set(img, false);
      this.imagesLoading++;
      this._imagesLoading.next(this.imagesLoading);

    }
  }

  imageLoadedOrError(img: HTMLElement) {
    if (this.images.has(img) && !this.images.get(img)) {
      this.images.set(img, true);
      this.imagesLoading--;
      this._imagesLoading.next(this.imagesLoading);
    }
  }
}
