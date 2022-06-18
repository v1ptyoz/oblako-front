import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createFeature,
} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {ICategory} from "../category/category.component";
import {categoriesReducer, categoriesReducerNode} from "./category/categories.reducer";
import {CategoryActions} from "./category/categories.actions";

export interface State {
  [categoriesReducerNode]: ICategory[];
}

export const reducers: ActionReducerMap<State, CategoryActions> = {
  [categoriesReducerNode]: categoriesReducer
}
