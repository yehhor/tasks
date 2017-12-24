import {Component} from '@angular/core';
import {User} from "../models/User";
import {ROLES} from "../models/roles/ROLES";
import {DataService} from "../data.service";

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html'
})
export class UserProfile {

    public user: User;
    public roles: { id: number; name: string }[] = [];

    constructor(private dataService: DataService) {
        this.user = {...dataService.user};

        for (let n in ROLES) {
            if (typeof ROLES[n] === 'number') {
                this.roles.push({id: <any>ROLES[n], name: n});
            }
        }
    }

    submit() {
        Object.assign(this.dataService.user, this.user);
        console.log(ROLES)
    }
}
