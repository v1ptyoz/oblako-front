import {Component, OnInit} from '@angular/core';
import {Category, ICategory} from "./category/category.component";
import {HttpClient} from "@angular/common/http";
import {plainToClass} from "class-transformer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public categories!: ICategory[];

  constructor(private http: HttpClient) {
    this.http.get<ICategory[]>("https://khrabrov-oblako-2.herokuapp.com/projects")
      .subscribe((response) => {
        this.categories = plainToClass(Category, response);
      });
  }
}
