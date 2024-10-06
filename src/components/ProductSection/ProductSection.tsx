import "./productSection.module.sass";

import chromeIcon from "../../assets/images/logo-chrome.svg";
import firefoxIcon from "../../assets/images/logo-firefox.svg";
import operaIcon from "../../assets/images/logo-opera.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const extensionArr = [
  { icon: chromeIcon, title: "Add to Chrome", version: "Minimum version 62" },
  {
    icon: firefoxIcon,
    title: "Add to Firefox",
    version: "Minimum version 55",
  },
  { icon: operaIcon, title: "Add to Opera", version: "Minimum version 46" },
];
export const ProductSection = () => {
  return (
    <section id='s-product'>
      <article className='product-header'>
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </article>
      <div className='product-card__container'>
        {extensionArr.map((details) => {
          return (
            <div className='product-card' key={details.title}>
              <LazyLoadImage src={details.icon} alt={details.title} />
              <dl>
                <dt>{details.title}</dt>
                <dd>{details.version}</dd>
              </dl>
            </div>
          );
        })}
      </div>
    </section>
  );
};
