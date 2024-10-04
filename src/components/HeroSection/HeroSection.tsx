import { LazyLoadImage } from "react-lazy-load-image-component";
import "./heroSection.sass";
import heroImg from "../../assets/images/illustration-hero.svg";

export const HeroSection = () => {
  return (
    <section id='s-hero'>
      <div className='container'>
        <div className='hero-img'>
          <LazyLoadImage
            src={heroImg}
            alt='Tablet with loading social media details'
          />
          <div className='design-oblong'></div>
        </div>
        <div className='hero-text'>
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className='downloads-container'>
            <button className='btn-download btn-blue'>Get it on Chrome</button>
            <button className='btn-download btn-white'>
              Get it on Firefox
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
