import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DonationListComponent} from "./donation/donation-list.component";
import { RsvpInfoComponent } from "./rsvp/rsvp-info.component";

const appRoutes: Routes = [
    { path: 'donations', component: DonationListComponent },
    { path: 'rsvpInfo', component: RsvpInfoComponent }
];

@NgModule({
    imports: [
       RouterModule.forRoot(
           appRoutes,
           { enableTracing: true }
       )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}