import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, Validator} from '@angular/forms';


import { User } from './user.model';
import { UserInfoService } from './user-info.service';


@Component({
    selector: 'rsvp-form',
    templateUrl: './rsvp-info.component.html',
    styleUrls: ['./rsvp-info.component.css']
})
export class RsvpInfoComponent implements OnInit {
        myForm: FormGroup;

    constructor(private userInfoService: UserInfoService){

    }

    onSubmit(){
        const rsvpUser = new User(
            this.myForm.value.firstName,
            this.myForm.value.lastName,
            this.myForm.value.email,
            this.myForm.value.rsvpRes
        );
        this.userInfoService.addUser(rsvpUser)
            .subscribe(
                data => console.log(data)
            );
        this.myForm.reset();
    }

    ngOnInit(){
        this.myForm = new FormGroup({
           firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            rsvpRes: new FormControl(null, Validators.required)
        });
}

}