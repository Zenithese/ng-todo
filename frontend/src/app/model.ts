export class Model {
    user;
    items;
    constructor() {
        this.user = "Justin";
        this.items = [
            new TodoItem("Buy Flowers", false),
            new TodoItem("Get Shoes", false),
            new TodoItem("Collect Tickets", false), 
            new TodoItem("Call Joe", false)
        ];
    }
}

export class TodoItem {
    action;
    done;
    constructor(action, done) {
        this.action = action; 
        this.done = done;
    }
}

export interface Todo {
    action: string;
    done: boolean;
}