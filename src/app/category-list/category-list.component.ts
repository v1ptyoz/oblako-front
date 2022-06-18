import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Category, ICategory} from "../category/category.component";
import {select, Store} from "@ngrx/store";
import {State} from "../reducers";
import {selectCategories} from "../reducers/category/category.selectors";
import {plainToClass} from "class-transformer";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent {
  public categories$: Observable<Category[]> = this.store$.pipe(select(selectCategories));
  private categoriesItems: Category[] | undefined;

  constructor(private store$: Store<{categories: Category[]}>) {
    this.categories$.subscribe((items: Category[]) => {
      this.categoriesItems = plainToClass(items, Category)
    })
  }
}
