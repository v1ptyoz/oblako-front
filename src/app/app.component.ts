import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Category, ICategory} from "./category/category.component";
import {select, Store} from "@ngrx/store";
import {selectCategories} from "./reducers/category/category.selectors";
import {categoriesFetchAction} from "./reducers/category/categories.actions";
import {HttpClient} from "@angular/common/http";
import {plainToClass} from "class-transformer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oblako-front-2';

  constructor(private store$: Store<{categories: ICategory[]}>, private http: HttpClient) {
    http.get<ICategory[]>("http://localhost:4200/projects")
      .subscribe((response) => {
        store$.dispatch(new categoriesFetchAction(response))
      });
  }
}
