import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports:[CommonModule]
})
export class NavbarComponent {

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      let element = document.querySelector('.navbar') as HTMLElement;
      if (window.scrollY > element.clientHeight) {
        element.classList.add('solid-navbar', 'rounded-4', 'mx-3', 'shadow');
        
      } else {
        element.classList.remove('solid-navbar', 'rounded-4', 'mx-3', 'shadow');
        element.classList.add('sticky-top');
      }
    }

}
