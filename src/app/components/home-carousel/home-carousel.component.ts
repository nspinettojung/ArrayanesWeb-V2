import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css'
})
export class HomeCarouselComponent {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2300;
    //  config.wrap = false;
    // config.keyboard = false;
    // config.pauseOnHover = false;
  }
}
