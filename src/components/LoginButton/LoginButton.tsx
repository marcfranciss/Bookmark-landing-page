import { CSSProperties } from "react";
import "./loginButton.sass";

interface LoginButtonProps {
  style?: CSSProperties;
}
export const LoginButton = ({ style }: LoginButtonProps) => {
  return (
    <button type='button' className='btn-login' style={style}>
      Login
    </button>
  );
};
