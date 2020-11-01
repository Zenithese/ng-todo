import { Component, OnInit } from '@angular/core';
import { Model, TodoItem, Todo } from './model';
// import { TodoComponent } from './todo/todo.component';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-todo';
  todos = [];

  constructor(private dataService: DataService){}

  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    // return this.model.items.filter(item => !item.done);
    return this.todos.filter(todo => !todo.done);
  }

  addItem(newItem: string) {
    if (newItem != "") {
      // this.model.items.push(new TodoItem(newItem, false));
      // this.todos.push({"action": newItem, "done": false});
      console.log("addTodo")
      const newTodo: Todo = { action: newItem, done: false } as Todo
      this.dataService
        .createTodo(newTodo)
        .subscribe(todo => this.todos.push(todo));
    }
  }

  ngOnInit() {
    this.dataService.fetchTodos().subscribe((todos) => this.todos = todos)
  }
}
