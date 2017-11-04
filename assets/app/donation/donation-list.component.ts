import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'donation-list',
    templateUrl: './donation-list.component.html',
    styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {

    myForm: FormGroup;

        multiplyBy(){
            var input;
            var final;
            input = this.myForm.value.donAmount;
            final = input * 100;
            return final;
        }



    openCheckout() {
        var handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_x3spH20fk2XajyCAyeiBKttC',
            locale: 'auto',
            currency: 'gbp',
            token: function (token: any) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
            }
        });

        handler.open({
            name: 'Sigola Kuria Union',
            description: 'my donation',
            amount: this.multiplyBy()
        });
    }

    ngOnInit() {
        this.myForm = new FormGroup({
          donAmount: new FormControl(null, Validators.required)
        });

    }
}