import {User} from "./User";
import {STATUSES} from "./STATUSES";
export class Task {
    public description: String;
    public owner: User;
    public estimationTime: Number;
    public loggedTime: Number;

    constructor(public name: String, public dueDate: Date, public creator: User,
                public status: STATUSES = STATUSES.NEW) {
    }
    
}
