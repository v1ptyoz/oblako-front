import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewTodoComponent} from "../new-todo/new-todo.component";
import {Category, ICategory} from "../category/category.component";
import {TodoService} from "../services/todo.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {


  constructor(private todoService: TodoService, public newTodoDialogRef: MatDialog) {

  }

  openDialog(): void {
    this.newTodoDialogRef.open(NewTodoComponent, {
      width: '300px',
      data: {
        categories: this.todoService.categories$,
        dialog: this.newTodoDialogRef
      }
    });
  }
}
