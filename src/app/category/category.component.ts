import {Component, Input} from '@angular/core';

import {Todo} from "../todo/todo.component";
import {Type} from "class-transformer";

export interface ICategory {
  title: string;
  todos: [Todo]
}

export class Category implements ICategory{
  // @ts-ignore
  public title: string;

  @Type(() => Todo)
  // @ts-ignore
  public todos: [Todo];
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() category?: Category;

  constructor() {
    console.log(this.category)
  }
}
