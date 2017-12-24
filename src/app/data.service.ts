import {Injectable} from "@angular/core";
import data from "./data/tasks";
import {Task} from "./models/Task";
import {User} from "./models/User";
import user from "./data/user";


export class DataService {

    public tasks: Task[] = data;
    public user: User = user;

    constructor() {
    }
}
