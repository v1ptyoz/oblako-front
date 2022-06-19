import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {DialogData} from "../new-todo/new-todo.component";
import {HttpClient} from "@angular/common/http";
import {Category} from "../category/category.component";
import {plainToClass} from "class-transformer";

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent {
  title = new FormControl('', Validators.required);
  constructor(private http: HttpClient, public addNewCategoryDialogRef:MatDialogRef<NewCategoryComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  addCategory() {
    this.http.post<Category>("http://localhost:4200/category", {title: this.title.value}).subscribe(category => {
      this.data.categories.push(plainToClass(Category, category));
    })
  }
}
