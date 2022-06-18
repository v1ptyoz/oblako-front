import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewCategoryComponent} from "../new-category/new-category.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})

export class NewTodoComponent {
  text = new FormControl('', Validators.required);
  category = new FormControl('');

  constructor(public newCategoryDialogRef: MatDialog) {}

  openNewCategoryModal(): void {
    this.newCategoryDialogRef.open(NewCategoryComponent, {
      width: '300px',
    });
  }
}
