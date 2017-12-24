import {User} from "../models/User";
import {Task} from "../models/Task";


let users: User[] = [
    new User('Steeve', null),
    new User('Yehor', null),
    new User('Roman', null),
    new User('Vadym', null),
    new User('Kolya', null),
];

let data = [
    new Task('1', new Date(), users[0]),
    new Task('2', new Date(), users[1]),
    new Task('3', new Date(), users[2]),
    new Task('3', new Date(), users[2]),
    new Task('4', new Date(), users[4]),
    new Task('5', new Date(), users[3]),
    new Task('6', new Date(), users[1]),
    new Task('7', new Date(), users[0])
];
data.forEach(item => item.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
data.forEach(i => i.owner = users[Math.round(Math.random() * 4)]);

export default data;