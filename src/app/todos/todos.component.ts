import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../models/Todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  @Input() title: string = '';
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos: any) => {
      this.todos = todos;
    });
  }

  deleteTodo(event: any) {
    this.todos = this.todos.filter((todo) => todo.id !== event);
  }
}
