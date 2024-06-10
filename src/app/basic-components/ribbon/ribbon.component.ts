import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrl: './ribbon.component.css'
})
export class RibbonComponent {
  @Input() imagePath: string;
}
