import { Component } from '@angular/core';

export interface ITodo {
  text: string;
  category_id: number;
  isCompleted: boolean;
}

export class Todo implements ITodo {
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

  constructor() { }

  isCompleted: boolean = false;


  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
    return this.isCompleted;
  }
}
