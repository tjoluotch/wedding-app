import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
    selector: 'demo-carousel-config',
    templateUrl: './dcarousel.component.html',
    providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
})
export class DcarouselComponent {
}