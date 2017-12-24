import {Component} from '@angular/core';
import {DataService} from "../data.service";
import {User} from "../models/User";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    user: User;

    constructor(private dataService: DataService) {
        this.user = dataService.user;
    }

}
