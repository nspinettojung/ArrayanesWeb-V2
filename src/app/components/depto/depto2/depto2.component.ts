import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    { url: "assets/images/instalaciones/depto2/depto2_1h.jpg", description: "Entrada" },
    { url: "assets/images/instalaciones/depto2/depto2_2h.jpg", description: "Estar" },
    { url: "assets/images/instalaciones/depto2/depto2_3h.jpg", description: "Comedor" },
    { url: "assets/images/instalaciones/depto2/depto2_4h.jpg", description: "Habitacion" },
    { url: "assets/images/instalaciones/depto2/depto2_5h.jpg", description: "Cocina" },
    { url: "assets/images/instalaciones/cochera.jpg", description: "Cochera" }
  ]

  images = this.gallery.map((n) => n.url);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

}
