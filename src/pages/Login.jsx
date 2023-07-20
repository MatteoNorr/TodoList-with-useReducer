import { useContext, useState } from "react";
import { Context } from "@/store";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../plugin/firebase";
import styles from "@/styles/Login.module.scss";
import { signOut } from "firebase/auth";

export const Login = ({ userInfo, setUserInfo }) => {
  const { state, dispatch } = useContext(Context);
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");

  const onChangeUsername = (e) => setUsername(e.target.value);

  const onSubmitLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: "login",
      username: username,
    });
    setUserInfo(username);
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setUserInfo(user.email);
      setDisplayName(user.displayName);
      dispatch({ type: "loginWithGoogle", payload: [...state] });
    });
  };

  const onClickLogout = () => {
    setUserInfo("");
    signOut(auth);
  };

  return (
    <>
      {userInfo !== "" ? (
        <div className={styles.loginOk}>
          <h2>Sei loggato come</h2>
          <div className={styles.userInfo}>
            <p>{displayName}</p>
            <p>{userInfo}</p>
          </div>
          <button className={styles.logout} onClick={onClickLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form className={styles.Form} onSubmit={(e) => onSubmitLogin(e)}>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Add username"
            onChange={(e) => onChangeUsername(e)}
          />
          <input type="submit" />
          <button className={styles.loginWithGoogle} onClick={loginWithGoogle}>
            Login with Google
          </button>
        </form>
      )}
    </>
  );
};
