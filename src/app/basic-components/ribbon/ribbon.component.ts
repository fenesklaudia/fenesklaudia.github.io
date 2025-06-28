import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-ribbon',
    templateUrl: './ribbon.component.html',
    styleUrl: './ribbon.component.css',
    standalone: false
})
export class RibbonComponent {
  @Input() imagePath: string;
}
