import { Directive, ElementRef, HostListener } from '@angular/core';
import { ImageService } from '../services/image.service';

@Directive({
    selector: 'img',
    standalone: false
})
export class ImageLoadDirective {

  constructor(private el: ElementRef,
              private imageService: ImageService) {

    imageService.imageLoading(el.nativeElement);
  }

  @HostListener('load')
  onLoad() {
    this.imageService.imageLoadedOrError(this.el.nativeElement);
  }

  @HostListener('error')
  onError() {
    this.imageService.imageLoadedOrError(this.el.nativeElement);
  }

}
