import burgerBtn from "../../assets/images/icon-hamburger.svg";
import closeBtn from "../../assets/images/icon-close.svg";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import { Logo } from "./Logo";
import "./navBarMobile.sass";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { LoginButton } from "../LoginButton/LoginButton";

export const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("dialog-open");
    } else {
      document.body.classList.remove("dialog-open");
    }
  };
  return (
    <div className='navMobile-container'>
      <button
        type='button'
        className='btn-burger'
        onClick={handleDialogOpen}
        aria-controls='nav-mobile'
        aria-expanded={isOpen}
        aria-label='Navbar toggler'>
        <img src={burgerBtn} alt='' />
      </button>
      <div
        id='nav-mobile'
        role='modal'
        className={`nav-dialog ${isOpen ? "is-open" : "is-close"}`}
        aria-atomic={isOpen}
        aria-live={isOpen ? "assertive" : "off"}>
        <div className='dialog-container'>
          <header>
            <Logo fillColor='white' />
            <button
              type='button'
              className='btn-close'
              onClick={handleDialogOpen}
              aria-controls='nav-mobile'
              aria-expanded={isOpen}
              aria-label='Navbar toggler'>
              <img src={closeBtn} alt='' />
            </button>
          </header>
          <nav className='nav-links'>
            <ul>
              <li>
                <a href='#features'>features</a>
              </li>
              <li>
                <a href='#pricing'>pricing</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
            </ul>
            <LoginButton />
          </nav>
          <div className='nav-socials'>
            <a href='#facebook'>
              <LazyLoadImage
                src={facebookIcon}
                alt={`Bookmark's Facebook page link`}
              />
            </a>
            <a href='#twitter'>
              <LazyLoadImage
                src={twitterIcon}
                alt={`Bookmark's Twitter page link`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
