import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/Todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor(private router: Router) {}
  @Input('value') todo: Todo = {};

  @Output() deleteTodo = new EventEmitter();

  deleteTodoEvent() {
    this.deleteTodo.emit(this.todo.id);
  }

  navigateTodoView() {
    this.router.navigate(['todo', this.todo.id]);
  }
}
