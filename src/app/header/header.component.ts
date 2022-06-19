import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewTodoComponent} from "../new-todo/new-todo.component";
import {Category} from "../category/category.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Input() categories!: Category[];

  constructor(public newTodoDialogRef: MatDialog) {}

  openDialog(): void {
    this.newTodoDialogRef.open(NewTodoComponent, {
      width: '300px',
      data: {
        categories: this.categories
      }
    });
  }
}
