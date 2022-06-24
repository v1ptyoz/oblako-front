import {Component, Input} from '@angular/core';
import {Category} from "../category/category.component";
import {HttpClient} from "@angular/common/http";
import {TodoService} from "../services/todo.service";

export interface ITodo {
  id: string;
  text: string;
  category_id: number;
  isCompleted: boolean;
}

export class Todo implements ITodo {
  // @ts-ignore
  id: number;
  // @ts-ignore
  category_id: number;
  // @ts-ignore
  isCompleted: boolean;
  // @ts-ignore
  text: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent {
  @Input() todo!: Todo;

  constructor(private todoService: TodoService) { }

  toggleCompleted() {
    this.todoService.toggleTodoIsCompleted(this.todo);
  }
}
