import { Component, Renderer2, inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  private renderer = inject(Renderer2);

  scrollToTop() {
    const element = document.documentElement;
    this.renderer.setProperty(element, 'scrollTop', 0);
  }


}
