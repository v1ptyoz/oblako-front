import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Category} from "../category/category.component";
import {plainToClass} from "class-transformer";
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent {
  title = new FormControl(null, Validators.required);
  constructor(private todoService: TodoService, public modal:MatDialogRef<NewCategoryComponent>) { }

  addCategory() {
    if(!this.title.errors) {
      this.todoService.addCategory(this.title.value)
      this.modal.close();
    }
  }
}
