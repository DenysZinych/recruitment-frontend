import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodoItem {
  id: string;
  todoText: string;
  isResolved: boolean;
}

interface IInitialState {
  value: ITodoItem[];
}

const initialState: IInitialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoItem>) => {
      state.value = [action.payload, ...state.value];
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
    markTodoAsResolved: (state, action: PayloadAction<string>) => {
      const resolvedTask = state.value.find(
        (todo) => todo.id === action.payload,
      );
      if (resolvedTask) {
        state.value = state.value
          .filter((todo) => todo.id !== action.payload)
          .concat(resolvedTask);

        resolvedTask.isResolved = true;
      }
    },
    markTodoAsUnresolved: (state, action: PayloadAction<string>) => {
      const unresolvedTask = state.value.find(
        (todo) => todo.id === action.payload,
      );
      if (unresolvedTask) {
        state.value = [
          unresolvedTask,
          ...state.value.filter((todo) => todo.id !== action.payload),
        ];

        unresolvedTask.isResolved = false;
      }
    },
  },
});

export const { addTodo, removeTodo, markTodoAsResolved, markTodoAsUnresolved } =
  todoSlice.actions;

export default todoSlice.reducer;
