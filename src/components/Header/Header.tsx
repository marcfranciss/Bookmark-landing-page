import "./header.sass";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { NavBarMobile } from "./NavBarMobile";

export const Header = () => {
  return (
    <header>
      <Logo fillColor='blue' />
      <NavBar id='nav-main' className='nav-main' />
      <NavBarMobile />
    </header>
  );
};
