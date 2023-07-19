import { useContext, useState } from "react";
import { Context } from "@/store";
import styles from "../styles/Login.module.scss";

export const Login = () => {
  const { state, dispatch } = useContext(Context);
  const [usename, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onSubmitLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: "login",
      username: usename,
      password: password,
    });
  };

  return (
    <form className={styles.Form} onSubmit={(e) => onSubmitLogin(e)}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Add username"
        onChange={(e) => onChangeUsername(e)}
      />
      <input
        type="password"
        placeholder="Add password"
        onChange={(e) => onChangePassword(e)}
      />
      <input type="submit" />
    </form>
  );
};
