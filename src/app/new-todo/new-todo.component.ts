import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {Category} from "../category/category.component";
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
  new_category_title = new FormControl(null, Validators.required);

  constructor(private todoService: TodoService, public newCategoryDialogRef: MatDialog, public modal: MatDialogRef<NewTodoComponent>) {
    this.categories$ = todoService.categories;
  }

  ngOnInit(): void {
    this.categories$ = this.todoService.categories;
  }

  addTodo() {
    if(!this.text.errors && !this.category.errors) {
      if(this.category.value === 0 ) {
        this.todoService.addTodo(this.text.value, this.category.value, this.new_category_title.value)
      } else {
        this.todoService.addTodo(this.text.value, this.category.value, '')
      }
      this.modal.close();
    }
  }

  trackByCategory(index: number, category: Category): number { return category.id; }


}
