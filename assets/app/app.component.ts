import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],


})
export class AppComponent {
      title: string = 'Wedding Venue';
      lat: number = 53.7454804;
      lng: number = -0.3414341999999806;
}