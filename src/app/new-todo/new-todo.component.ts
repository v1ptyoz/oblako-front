import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {NewCategoryComponent} from "../new-category/new-category.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../category/category.component";
import {HttpClient} from "@angular/common/http";
import {Todo} from "../todo/todo.component";
import {plainToClass} from "class-transformer";

export interface DialogData {
  categories: Category[]
}

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})

export class NewTodoComponent {
  text = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);

  constructor(private http: HttpClient, public newCategoryDialogRef: MatDialog, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  openNewCategoryModal(): void {
    this.newCategoryDialogRef.open(NewCategoryComponent, {
      width: '300px',
      data: this.data
    });
  }

  addTodo() {
    this.http.post<Todo>("https://khrabrov-oblako-front-2.herokuapp.com/todos", {text: this.text.value, category_id: this.category.value}).subscribe(todo => {
      this.data.categories.forEach(category => {
        if (category.id === todo.category_id) {
          category.todos.push(plainToClass(Todo, todo));
        }
      })
    })
  }
}
