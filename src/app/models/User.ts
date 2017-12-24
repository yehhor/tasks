import {ROLES} from "./roles/ROLES";


export class User {
    static COUNTER: number = 0;


    private _role: ROLES;
    private id : number = User.COUNTER++;
    constructor(private _name: string){}


    get role(): ROLES {
        return this._role;
    }

    set role(value: ROLES) {
        this._role = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}