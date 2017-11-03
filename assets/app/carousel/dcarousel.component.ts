import { Component } from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'demo-carousel-config',
    templateUrl: './dcarousel.component.html',
    providers: [NgbCarouselConfig]

})
export class DcarouselComponent {


    constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
    }


}