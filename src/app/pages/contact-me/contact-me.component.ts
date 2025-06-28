import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-contact-me',
    templateUrl: './contact-me.component.html',
    styleUrl: './contact-me.component.css',
    standalone: false
})
export class ContactMeComponent {
  @Input() simplified = false;
}
