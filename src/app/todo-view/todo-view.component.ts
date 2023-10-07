import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/Todo.model';
import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
})
export class TodoViewComponent implements OnInit {
  todo: Todo = {};
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.todoService.getTodoById(params['id']).subscribe((todo: any) => {
        this.todo = todo;
      });
    });
  }
}
