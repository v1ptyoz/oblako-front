import {ICategory} from "../../category/category.component";
import {categoriesActionsType, CategoryActions} from "./categories.actions";

export const categoriesReducerNode = 'categories';
const initialState: ICategory[] = [];

export const categoriesReducer = (state = initialState, action: CategoryActions) => {
  switch (action.type) {
    case categoriesActionsType.fetch:
      return action.payload

    case categoriesActionsType.create:
      return {
        ...state,
      }

    case categoriesActionsType.addTodo:
      return {
        ...state,
      }

    case categoriesActionsType.toggleTodoIsCompleted:
      return {
        ...state,
      }

    default:
      return state;
  }
}
