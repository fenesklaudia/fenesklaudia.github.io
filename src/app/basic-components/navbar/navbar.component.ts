import { Component, ElementRef, ViewChild } from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('navbar') navbar: ElementRef;

  ngAfterViewInit() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        this.navbar.style.top = "0";
      } else {
        if (currentScrollPos > 50) {
          this.navbar.style.top = "-100rem";
        }
      }
      prevScrollpos = currentScrollPos;
    }
  }
}
