import { useSelector } from "react-redux";
import { RootState } from "store";
import { AddListItem } from "./AddListItem";
import { TodoListItem } from "./TodoListItem";

import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todoList.value);

  return (
    <div className={styles.todoContainer}>
      <h1 className={styles.header}>To-Do List</h1>
      <div className={styles.todoListContent}>
        <AddListItem />
        {todoList.map((item) => (
          <TodoListItem
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};
