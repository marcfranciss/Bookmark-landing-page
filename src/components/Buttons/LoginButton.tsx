import style from "./loginButton.module.sass";

export const LoginButton = () => {
  return (
    <button type='button' className={style.btn_login}>
      Login
    </button>
  );
};
