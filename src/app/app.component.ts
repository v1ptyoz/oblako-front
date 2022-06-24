import {Component, OnInit} from '@angular/core';
import {Category, ICategory} from "./category/category.component";
import {TodoService} from "./services/todo.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  categories$: Observable<Category[]>;

  constructor(private todoService: TodoService) {
    this.categories$ = this.todoService.categories;
  }

  ngOnInit(): void {
    this.categories$ = this.todoService.categories;
  }
}
