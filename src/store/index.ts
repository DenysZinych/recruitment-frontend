import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "slices/TodoSlice";

export const store = configureStore({
  reducer: {
    todoList: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
