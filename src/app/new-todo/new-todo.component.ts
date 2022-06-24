import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {NewCategoryComponent} from "../new-category/new-category.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../category/category.component";
import {HttpClient} from "@angular/common/http";
import {Todo} from "../todo/todo.component";
import {plainToClass} from "class-transformer";
import {TodoService} from "../services/todo.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})

export class NewTodoComponent implements OnInit{
  categories$: Observable<Category[]>;
  text = new FormControl(null, Validators.required);
  category = new FormControl(null, Validators.required);

  constructor(private todoService: TodoService, public newCategoryDialogRef: MatDialog, public modal: MatDialogRef<NewTodoComponent>) {
    this.categories$ = todoService.categories;
  }

  ngOnInit(): void {
    this.categories$ = this.todoService.categories;
  }

  openNewCategoryModal(): void {
    this.newCategoryDialogRef.open(NewCategoryComponent, {
      width: '300px'
    });
  }

  addTodo() {
    if(!this.text.errors && !this.category.errors) {
      this.todoService.addTodo(this.text.value, this.category.value)
      this.modal.close();
    }
  }

  trackByCategory(index: number, category: Category): number { return category.id; }


}
