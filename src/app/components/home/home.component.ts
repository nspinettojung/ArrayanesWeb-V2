import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Renderer2, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HomeCarouselComponent } from '../home-carousel/home-carousel.component';
import { InstalacionesComponent } from '../depto/instalaciones/instalaciones.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { UbicacionComponent } from '../ubicacion/ubicacion.component';
import { FooterComponent } from '../footer/footer.component';



@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, HeaderComponent, HomeCarouselComponent, InstalacionesComponent, ContactoComponent, UbicacionComponent,  FooterComponent]
})


export class HomeComponent {
  private renderer = inject(Renderer2);
  private router = inject(Router);



  scrollToTop() {
    const element = document.documentElement;
    this.renderer.setProperty(element, 'scrollTop', 0);
  }


}
