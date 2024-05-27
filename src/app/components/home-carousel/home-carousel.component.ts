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
  images = [1,2,3,4,5].map((n) => `./../../assets/images/alta-gracia/${n}.jpg`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 4000;
    //  config.wrap = false;
    // config.keyboard = false;
    // config.pauseOnHover = false;
  }
}
