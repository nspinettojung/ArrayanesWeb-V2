import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterLink]
})
export class NavbarComponent {

  // @HostListener('window:scroll', ['$event'])

  // onWindowScroll() {
  //   let element = document.querySelector('.navbar') as HTMLElement;
  //   if (window.scrollY > element.clientHeight) {
  //     element.classList.add('bg-body-tertiary',  'shadow', 'sticky-top');

  //   } else {
  //     element.classList.remove('bg-body-tertiary', 'shadow', 'sticky-top');

  //   }
  // }

}
