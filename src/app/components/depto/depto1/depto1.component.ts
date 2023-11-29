import { CommonModule } from '@angular/common';
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
    NgbModule
  ]
})
export class Depto1Component {
  private router = inject(Router);

  gallery: any[] = [
    { url: "assets/images/instalaciones/depto-1/estar.jpg", description: "Estar" },
    { url: "assets/images/instalaciones/depto-1/comedor.jpg", description: "Comedor" },
    { url: "assets/images/instalaciones/depto-1/cocina.jpg", description: "Cocina" },
    { url: "assets/images/instalaciones/depto-1/habitacionA.jpg", description: "Habitacion 3 camas" },
    { url: "assets/images/instalaciones/depto-1/habitacionB.jpg", description: "Habitacion cama doble" },
    { url: "assets/images/instalaciones/depto-1/baño.jpg", description: "Baño" },
    { url: "assets/images/instalaciones/depto-1/patio.jpg", description: "Patio" },
    { url: "assets/images/instalaciones/depto-1/asador.jpg", description: "Asador" },
    { url: "assets/images/instalaciones/cochera.jpg", description: "Cochera" }
  ]

  images = this.gallery.map((n) => n.url);




  goToDepto2() {
    this.router.navigate(['/depto2'])
  }


}
