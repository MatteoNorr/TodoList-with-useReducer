import { useContext, useState } from "react";
import { Context } from "@/store";
import styles from "./TodoList.module.scss";

const TodoList = () => {
  const { state, dispatch } = useContext(Context);
  const [value, setValue] = useState("");

  const onClickDelete = (data) =>
    dispatch({ type: "delete", payload: data.id });
  const onClickCheck = (data) => dispatch({ type: "check", payload: data.id });
  const onChangeValue = (e) => setValue(e.target.value);
  const onSubmitAddToDo = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: value,
    });
  };

  return (
    <div className={styles.TodoList}>
      <h1>Todos</h1>
      <form className={styles.form} onSubmit={onSubmitAddToDo}>
        <input
          text="text"
          placeholder="Add todo"
          onChange={(e) => onChangeValue(e)}
        />
        <input type="submit" value="+" />
      </form>
      <ul className={styles.todo}>
        {state.map((todo, i) => (
          <li
            key={i}
            className={todo.checked ? styles.checked : styles.unchecked}
            onClick={() => onClickCheck(todo)}
          >
            {todo.todo}
            <button onClick={() => onClickDelete(todo)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
