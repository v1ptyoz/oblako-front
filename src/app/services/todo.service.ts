import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Category, ICategory} from "../category/category.component";
import {BehaviorSubject, Observable, take} from "rxjs";
import {plainToClass} from "class-transformer";
import {Todo} from "../todo/todo.component";
import {response} from "express";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  categories: BehaviorSubject<ICategory[]> = new BehaviorSubject<ICategory[]>([]);
  categories$: Observable<ICategory[]> = this.categories.asObservable();

  constructor(private http: HttpClient) {
    this.fetchAllCategories();
  }

  fetchAllCategories() {
    this.http.get<ICategory[]>(environment.apiUrl + "/projects")
      .subscribe((response) => {
        this.categories.next(plainToClass(Category, response));
      });
  }

  toggleTodoIsCompleted(todo: Todo) {
    const url = environment.apiUrl + `/projects/${todo.category_id}/todo/${todo.id}`
    this.categories$.pipe(take(1)).subscribe((categories) => {
      categories.filter(category => {
        if (category.id === todo.category_id) {
          todo.isCompleted = !todo.isCompleted;
          this.http.patch<Todo>(url, {}).subscribe();
        }
      })
      return this.categories.next(categories);
    })
  }

  addTodo(text: string | null, category_id: string | null) {
    this.http.post<Todo>(environment.apiUrl + "/todos", {text: text, category_id: category_id}).subscribe(todo => {
      const newTodo = plainToClass(Todo, todo);
      this.categories$.pipe(take(1)).subscribe((categories) => {
        categories.filter(category => {
          if (category.id === newTodo.category_id) {
            category.todos.push(newTodo);
          }
        })
        this.categories.next(categories);
      })
    })
  }

  addCategory(title: string | null) {
    this.http.post<Category>(environment.apiUrl + "/category", {title: title}).subscribe(category => {
      this.categories.pipe(take(1)).subscribe((categories) => {
        const newCategory = plainToClass(Category, category);
        this.categories.next([...categories, newCategory]);
      })
    })
  }


}
