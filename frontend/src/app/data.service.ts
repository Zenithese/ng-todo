import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  fetchTodos() {
    // return this.http.get('assets/todos.json').pipe(map((response: any) => response));
    return this.http.get('http://localhost:3000/todos.json').pipe(map((response: any) => response));
  }

  createTodo(todo) {
    console.log("creating:", todo)
    return this.http.post('http://localhost:3000/todos.json', todo)
      .pipe(
        tap(
          data => console.log(data),
          err => console.log(err)
        )
      );
  }

  updateTodo(todo) {
    console.log(todo.id)
    return this.http.patch(`http://localhost:3000/todos/${todo.id}.json`, { action: todo.action, done: true })
  }
}
