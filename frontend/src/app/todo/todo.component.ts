import { Component, Input } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() item: any;
  @Input() i: number;

  constructor(private dataService: DataService) { }

  updateItem(todo) {
    this.dataService.updateTodo(todo)
      .subscribe(todo => console.log(todo))
  }

}
