import { Context } from "@/states";
import { useContext, useReducer, useState } from "react";
import { check } from "@/states/reducers";
import styles from "./TodoList.module.scss";

const TodoList = () => {
  const states = useContext(Context);
  const [state, dispatch] = useReducer(check, { checked: true });

  const onClickCheck = (e) => {
    dispatch({ type: "checked" });
    e.target.remove();
  };

  return (
    <div className={styles.TodoList}>
      <ul className={styles.todo}>
        {states.map((todo, i) => (
          <li
            className={styles.unchecked}
            key={i}
            onClick={(e) => onClickCheck(e)}
          >
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
