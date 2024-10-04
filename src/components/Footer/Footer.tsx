import "./footer.sass";
import { Logo } from "../Header/Logo";
import { NavBar } from "../Header/NavBar";
import { SocialNav } from "../SocialNav/SocialNav";

export const Footer = () => {
  return (
    <footer>
      <div className='logo-nav'>
        <Logo />
        <NavBar id='footer-nav' className='footer-nav' />
      </div>
      <div className='social-copyright'>
        <SocialNav />
        <p className='copyright'>© 2021 Loopstudios. All rights reserved</p>
      </div>
    </footer>
  );
};
