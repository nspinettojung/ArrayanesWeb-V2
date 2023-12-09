import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Renderer2, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from "../modal/modal.component";
import { Depto1Component } from "../depto/depto1/depto1.component";
import { Depto2Component } from "../depto/depto2/depto2.component";

@Component({
    standalone: true,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, ModalComponent, Depto1Component, Depto2Component, NgOptimizedImage]
})


export class HomeComponent {
  private renderer = inject(Renderer2);
  private router = inject(Router);

  scrollToDepartments() {
    const element = document.getElementById('deptos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToUbicacion() {
    const element = document.getElementById('maps');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  redirectDepto1(){
    this.router.navigate(['/depto1'])
  }

  redirectDepto2(){
    this.router.navigate(['/depto2'])
  }
}
