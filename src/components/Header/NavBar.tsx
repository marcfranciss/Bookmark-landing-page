import { LoginButton } from "../LoginButton/LoginButton";
import "./navBar.sass";

interface NavBarProps {
  id?: string;
  className?: string;
}
export const NavBar = ({ id, className }: NavBarProps) => {
  return (
    <nav id={id} className={className}>
      <a href='#features'>features</a>
      <a href='#pricing'>pricing</a>
      <a href='#contact'>contact</a>
      <LoginButton
        style={{
          color: "#FFFFFF",
          backgroundColor: "#FA5959",
          width: "111px",
          height: "2.5rem",
          padding: "0",
        }}
      />
    </nav>
  );
};
