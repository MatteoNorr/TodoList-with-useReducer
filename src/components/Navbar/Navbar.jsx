import { Context } from "@/states";
import { useContext, useReducer, useState } from "react";
import { add } from "@/states/reducers";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const todos = useContext(Context);
  const [value, setValue] = useState("");
  const [state, dispatch] = useReducer(add, { todo: value });

  const onChangeValue = (e) => setValue(e.target.value);

  const onSubmitAddToDo = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: value });
  };

  return (
    <form className={styles.form} onSubmit={(e) => onSubmitAddToDo(e)}>
      <h1>Todos</h1>
      <input
        text="text"
        placeholder="Add todo"
        onChange={(e) => {
          onChangeValue(e);
        }}
        value={value}
      />
    </form>
  );
};

export default Navbar;
