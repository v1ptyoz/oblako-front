import {createFeatureSelector, createSelector} from "@ngrx/store";
import {State} from "../index";
import {categoriesReducerNode} from "./categories.reducer";
import {ICategory} from "../../category/category.component";

export const selectCategoriesFeature = createFeatureSelector<State>(categoriesReducerNode);

export const selectCategories = createSelector(
  selectCategoriesFeature,
  (state: State): ICategory[] => state.categories
)
