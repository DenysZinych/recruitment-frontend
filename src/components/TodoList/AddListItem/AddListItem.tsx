import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "slices/TodoSlice";
import { PlusCircle } from "icons/PlusCircle";

import styles from "./AddListItem.module.scss";

export const AddListItem = () => {
  const todoId = uuidv4();
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState<string>("");
  const [isError, setError] = useState<boolean>(false);

  const onAddTodoItem = () => {
    if (!todoText.trim()) {
      setError(true);
      return;
    }

    dispatch(addTodo({ id: todoId, todoText: todoText, isResolved: false }));
    setTodoText("");
  };

  return (
    <div
      className={styles.container}
      data-testid="itemContainer"
    >
      <div className={styles.inputContainer}>
        <input
          id="listItem"
          data-testid="listItem"
          value={todoText}
          className={styles.input}
          onChange={(e) => {
            setTodoText(e.target.value);
            setError(false);
          }}
        />
        <button
          onClick={onAddTodoItem}
          className={styles.button}
        >
          Add
          <PlusCircle className={styles.plusCircle} />
        </button>
      </div>
      {isError && <p className={styles.error}>Please enter a 'todo' item.</p>}
    </div>
  );
};
