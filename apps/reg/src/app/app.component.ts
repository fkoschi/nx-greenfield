import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToDo } from '@kxl/data';

@Component({
  selector: 'kxl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  todos: ToDo[];

  constructor(private _http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this._http.get<ToDo[]>('/api/todos')
      .subscribe((t) => (this.todos = t))
  }

  addTodo(): void {
    this._http.post('/api/addToDo', {})
      .subscribe(() => this.fetch());
  }
}
