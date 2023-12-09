import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

type GalleryImage = string;

@Component({
  standalone: true,
  selector: 'app-depto2',
  templateUrl: './depto2.component.html',
  styleUrls: ['./depto2.component.css'],
  imports: [
    CommonModule,
    NgbModule,
    NgOptimizedImage
  ]
})
export class Depto2Component {
  private router = inject(Router);

  gallery: any[] = [
    { url: "assets/images/instalaciones/depto2/depto2_1.jpg", description: "Entrada" },
    { url: "assets/images/instalaciones/depto2/depto2_2.jpg", description: "Estar" },
    { url: "assets/images/instalaciones/depto2/depto2_3.jpg", description: "Comedor" },
    { url: "assets/images/instalaciones/depto2/depto2_4.jpg", description: "Habitacion" },
    { url: "assets/images/instalaciones/depto2/depto2_5.jpg", description: "Cocina" },
    { url: "assets/images/instalaciones/depto2/depto2_6.jpg", description: "Baño" },
    { url: "assets/images/instalaciones/cochera.jpg", description: "Cochera" }
  ]

  images = this.gallery.map((n) => n.url);



  goToDepto1() {
    this.router.navigate(['/depto1'])
  }

  goToHome() {
    this.router.navigate(['']);
  }
}
