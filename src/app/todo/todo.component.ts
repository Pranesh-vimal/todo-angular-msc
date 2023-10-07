import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/Todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input('value') todo: Todo = {};

  @Output() deleteTodo = new EventEmitter();

  deleteTodoEvent() {
    this.deleteTodo.emit(this.todo.id);
  }
}
