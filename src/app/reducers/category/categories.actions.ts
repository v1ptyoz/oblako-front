import {Action} from "@ngrx/store";
import {ICategory} from "../../category/category.component";

export enum categoriesActionsType {
  fetch = '[CATEGORY] fetch',
  create = '[CATEGORY] create',
  toggleTodoIsCompleted = '[CATEGORY] toggle',
  addTodo = '[CATEGORY] addTodo'
}

export class categoriesFetchAction implements Action {
  readonly type = categoriesActionsType.fetch;
  constructor(public payload: ICategory[]) {}
}

export class categoriesCreateAction implements Action {
  readonly type = categoriesActionsType.create;
}

export class categoriesToggleTodoIsCompletedAction implements Action {
  readonly type = categoriesActionsType.toggleTodoIsCompleted;
}

export class categoriesAddTodoAction implements Action {
  readonly type = categoriesActionsType.addTodo;
}

export type CategoryActions = categoriesFetchAction | categoriesCreateAction | categoriesToggleTodoIsCompletedAction | categoriesAddTodoAction;
