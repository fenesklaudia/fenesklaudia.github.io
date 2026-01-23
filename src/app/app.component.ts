import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from './services/image.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent {
    title = 'fenesklaudia';
    loaded = true;

    constructor(
        private modalService: NgbModal,
        private imageService: ImageService,
        private router: Router
    ) {
        this.imageService.imagesLoading$.subscribe({
            next: (n) => this.loaded = n == 0
        });
    }

    public open(modal: any): void {
        this.modalService.open(modal);
    }

    public showContactMeButton(): boolean {
        const allowedRoutes = ['/galery', '/prices', '/services', '/about-me'];
        const path = this.router.url.split('?')[0];
        return allowedRoutes.some(r => path === r || path.startsWith(r + '/'));
    }
}
