import {Component, Input} from '@angular/core';
import {Category} from "../category/category.component";
import {HttpClient} from "@angular/common/http";

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

  constructor(private http: HttpClient) { }

  toggleCompleted() {
    this.todo.isCompleted = !this.todo.isCompleted;
    const url = `https://khrabrov-oblako-2.herokuapp.com/projects/${this.todo.category_id}/todo/${this.todo.id}`
    this.http.patch(url, {}).subscribe();
  }
}
