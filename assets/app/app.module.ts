import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {CarouselModule} from "ngx-bootstrap";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { UserInfoService } from "./rsvp/user-info.service";

import { DonationListComponent} from "./donation/donation-list.component";
import { RsvpInfoComponent } from "./rsvp/rsvp-info.component";
import {DcarouselComponent} from "./carousel/dcarousel.component";


@NgModule({
    declarations: [
        AppComponent,
        DonationListComponent,
        RsvpInfoComponent,
        DcarouselComponent

    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        CommonModule,
        HttpModule,
        AppRoutingModule,
        CarouselModule.forRoot()
    ],
    providers: [UserInfoService],
    bootstrap: [AppComponent]
})

export class AppModule {

}