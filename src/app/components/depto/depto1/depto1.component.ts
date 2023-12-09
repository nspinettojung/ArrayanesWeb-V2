import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


type GalleryImage = string;

@Component({
  standalone: true,
  selector: 'app-depto1',
  templateUrl: './depto1.component.html',
  styleUrls: ['./depto1.component.css'],
  imports: [
    CommonModule,
    NgbModule,
    NgOptimizedImage
  ]
})
export class Depto1Component {
  private router = inject(Router);


  gallery: any[] = [
    { url: "assets/images/instalaciones/depto1/Depto1_1.jpg", description: "Entrada" },
    { url: "assets/images/instalaciones/depto1/Depto1_2.jpg", description: "Estar" },
    { url: "assets/images/instalaciones/depto1/Depto1_3.jpg", description: "Comedor" },
    { url: "assets/images/instalaciones/depto1/Depto1_4.jpg", description: "Cocina" },
    { url: "assets/images/instalaciones/depto1/Depto1_5.jpg", description: "Habitacion cama doble" },
    { url: "assets/images/instalaciones/depto1/Depto1_6.jpg", description: "Habitacion 3 camas" },
    { url: "assets/images/instalaciones/depto1/Depto1_7.jpg", description: "Baño" },
    { url: "assets/images/instalaciones/depto1/Depto1_8.jpg", description: "Patio" },
    { url: "assets/images/instalaciones/depto1/Depto1_9.jpg", description: "Asador" },
    { url: "assets/images/instalaciones/cochera.jpg", description: "Cochera" }
  ]

  images = this.gallery.map((n) => n.url);




  goToDepto2() {
    this.router.navigate(['/depto2']);
  }


}
