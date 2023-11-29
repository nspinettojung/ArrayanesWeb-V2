import { CommonModule } from '@angular/common';
import { Component, Renderer2, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
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
