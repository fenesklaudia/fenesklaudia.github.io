import { AfterViewInit, Component } from '@angular/core';

declare var FB: any; // Declare FB global

@Component({
    selector: 'app-social-media',
    templateUrl: './social-media.component.html',
    styleUrl: './social-media.component.css',
    standalone: false
})
export class SocialMediaComponent implements AfterViewInit {

    ngAfterViewInit(): void {
        FB.XFBML.parse();

        const existing = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
        if (existing) {
            existing.remove();
        }

        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }

}
