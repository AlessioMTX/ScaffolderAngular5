import {Component, OnInit} from '@angular/core';
import './users.component.scss';
import {UserService} from "../../providers/user.service";
import {UsersCard} from "../../models/users.model";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'users-component',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit{
    users$: Observable<Array<UsersCard>>;

    constructor(private userService: UserService) {
        this.users$ = this.userService.getUsersCard();
    }

    ngOnInit(){
        /*
        this.userService.getUsersCard().subscribe((users: Array<UsersCard>)=>{
            this.users = users;
            this.loading = false;
        })
        */
    }


}