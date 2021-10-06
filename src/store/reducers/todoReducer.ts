import { ITodoState } from "../../types/todoTypes";

const initialState: ITodoState = {
  todoList: [],
  loading: false,
  error: "",
}

export const todoReducer = 
  (state: ITodoState = initialState, action: any): ITodoState => {
    switch(action.type){
      case "SET_LOADING":
        return { ...state, loading: action.payload }
      case "SET_TODO_LIST":
        return { ...state, todoList: action.payload }
      default:
        return state
    }
  
}