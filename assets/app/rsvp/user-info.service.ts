import { Injectable } from '@angular/core';
import { Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { User } from "./user.model";


//import RxJs required methods



@Injectable()
export class UserInfoService {

    //Resolve HTTP using the constructor
    constructor(private http: Http) {}

    //add a new User
    addUser (rsvpUser: User) {
            const bodyString = JSON.stringify(rsvpUser); //stringify payload
            const headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON


        return this.http.post(' https://jkvswedding.herokuapp.com/rsvpUser', bodyString, {headers: headers}) // ... using post request
            .map((response: Response) => response.json()) // ...and calling .json() on the response to return Date
            .catch(error => Observable.throw('Serve the error')); //... error

    }


}