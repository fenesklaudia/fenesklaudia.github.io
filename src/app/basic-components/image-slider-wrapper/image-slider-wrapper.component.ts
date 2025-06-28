import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-image-slider-wrapper',
  standalone: false,
  templateUrl: './image-slider-wrapper.component.html',
  styleUrl: './image-slider-wrapper.component.css'
})
export class ImageSliderWrapperComponent {
  @Input() images: any[] = [];

  @Input() width: number | string = 400;
  @Input() height: number | string = 300;
  @Input() space: number | string = 3;
  @Input() slideImage: boolean = true;
  @Input() showArrow: boolean = true;
  @Input() infinite: boolean = true;
  @Input() imagePopup: boolean = true;
  @Input() autoSlide: number = 2; // Set to >0 to auto slide every X seconds
  @Input() showDots: boolean = false;
  @Input() showCaptions: boolean = false;
  @Input() imageSize: string = 'cover'; // for optional CSS binding
  @Input() lazyLoading: boolean = false;
}
