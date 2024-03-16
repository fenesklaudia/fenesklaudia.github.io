import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fenesklaudia';
  loaded = true;

  constructor(
    private modalService: NgbModal,
    private imageService: ImageService
  ) {
    this.imageService.imagesLoading$.subscribe({
      next: (n) => this.loaded = n == 0
    });
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
