import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../category/category.component";


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent {
  @Input() categories!: Category[];

  constructor() {}

  trackByCategory(index: number, category: Category): number { return category.id; }

}
