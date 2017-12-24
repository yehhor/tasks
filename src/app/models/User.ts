import {ROLES} from "./roles/ROLES";


export class User {
    static COUNTER: number = 0;

    public id?: number;

    constructor(public name: string, public role: ROLES) {
        this.id = User.COUNTER++;
        this.role = role ? role : ROLES.GUEST;
    }


}