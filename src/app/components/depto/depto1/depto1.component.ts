import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  standalone: true,
  selector: 'app-depto1',
  templateUrl: './depto1.component.html',
  styleUrls: ['./depto1.component.css'],
  imports: [
    CommonModule,
    NgbModule,
    NgOptimizedImage,
    NgbCarouselModule
  ]
})
export class Depto1Component {
  private router = inject(Router);
  minWidth: number = window.innerWidth;


  gallery: any[] = [
    { url: "assets/images/instalaciones/depto1/depto1_1h.jpg", description: "Entrada" },
    { url: "assets/images/instalaciones/depto1/depto1_2h.jpg", description: "Asador" },
    { url: "assets/images/instalaciones/depto1/depto1_3h.jpg", description: "Estar" },
    { url: "assets/images/instalaciones/depto1/depto1_4h.jpg", description: "Comedor" },
    { url: "assets/images/instalaciones/depto1/depto1_5h.jpg", description: "Cocina" },
    { url: "assets/images/instalaciones/depto1/depto1_6h.jpg", description: "Habitacion cama doble" },
    { url: "assets/images/instalaciones/depto1/depto1_7h.jpg", description: "Habitacion 3 camas" },
    { url: "assets/images/instalaciones/depto1/depto1_8h.jpg", description: "Baño" },
    { url: "assets/images/instalaciones/depto1/depto1_9h.jpg", description: "Patio" },
    { url: "assets/images/instalaciones/cochera.jpg", description: "Cochera" }
  ]

  images = this.gallery.map((n) => n.url);


  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

}
