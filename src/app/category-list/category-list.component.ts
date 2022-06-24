import {Component, Input, OnInit} from '@angular/core';
import {Category, ICategory} from "../category/category.component";
import {TodoService} from "../services/todo.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent {
  @Input() categories: Category[] | null = new Array<Category>;


  trackByCategory(index: number, category: Category): number { return category.id; }


}
