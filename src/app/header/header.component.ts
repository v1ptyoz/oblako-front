import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewTodoComponent} from "../new-todo/new-todo.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public newTodoDialogRef: MatDialog) {}

  openDialog(): void {
    this.newTodoDialogRef.open(NewTodoComponent, {
      width: '300px',
    });
  }
}
