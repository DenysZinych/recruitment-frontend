import { useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import {
  ITodoItem,
  markTodoAsResolved,
  markTodoAsUnresolved,
  removeTodo,
} from "slices/TodoSlice";
import { Trash } from "icons/Trash";

import styles from "./TodoListItem.module.scss";

interface ITodoListItemProps {
  data: ITodoItem;
}

export const TodoListItem = ({ data }: ITodoListItemProps) => {
  const { id, todoText, isResolved } = data;
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState<boolean>(isResolved);

  const onRemoveTodoItem = () => {
    dispatch(removeTodo(id));
  };

  const checkboxToggle = () => {
    if (isChecked) {
      setChecked(false);
      dispatch(markTodoAsUnresolved(id));
      return;
    }

    if (!isChecked) {
      setChecked(true);
      dispatch(markTodoAsResolved(id));
      return;
    }
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.contentWrapper}>
        <input
          onChange={checkboxToggle}
          className={styles.checkbox}
          checked={isChecked}
          type="checkbox"
        />
        <p className={clsx(styles.todoText, isResolved && styles.todoResolved)}>
          {todoText}
        </p>
      </div>
      <button
        onClick={onRemoveTodoItem}
        className={styles.button}
        type="button"
      >
        Delete
        <Trash className={styles.trash} />
      </button>
    </div>
  );
};
