import { Injectable } from '@nestjs/common';

import { ToDo } from '@kxl/data';

@Injectable()
export class AppService {
  todos: ToDo[] = [{ title: 'ToDo 1' }, { title: 'ToDo 2'}];

  getData(): ToDo[] {
    return this.todos;
  }

  addToDo(): void {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
