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
  value: [{ id: "1", todoText: " Make this done asap", isResolved: false }],
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
      const unresovedTask = state.value.find(
        (todo) => todo.id === action.payload,
      );
      if (unresovedTask) {
        state.value = [
          unresovedTask,
          ...state.value.filter((todo) => todo.id !== action.payload),
        ];

        unresovedTask.isResolved = false;
      }
    },
  },
});

export const { addTodo, removeTodo, markTodoAsResolved, markTodoAsUnresolved } =
  todoSlice.actions;

export default todoSlice.reducer;
