import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent {
  title = new FormControl('', Validators.required);
  constructor(public addNewCategoryDialogRef:MatDialogRef<NewCategoryComponent>) { }

  addCategory() {

  }
}
