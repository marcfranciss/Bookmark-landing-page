import style from "./productSection.module.sass";

import chromeIcon from "../../assets/images/logo-chrome.svg";
import firefoxIcon from "../../assets/images/logo-firefox.svg";
import operaIcon from "../../assets/images/logo-opera.svg";
import bgDots from "../../assets/images/bg-dots.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { InstallButton } from "../Buttons/InstallButton";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section id='s-product'>
      <div
        ref={ref}
        style={{ opacity: 0 }}
        className={`${style.container} ${inView ? "inView" : ""}`}>
        <article className={style.product_header}>
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </article>
        <div className={style.product_card__container}>
          {extensionArr.map((details) => {
            return (
              <div className={style.product_card} key={details.title}>
                <div className={style.card_content}>
                  <LazyLoadImage
                    className={style.card_icon}
                    src={details.icon}
                    alt={details.title}
                  />
                  <dl>
                    <dt>{details.title}</dt>
                    <dd>{details.version}</dd>
                  </dl>
                </div>
                <LazyLoadImage className={style.br} src={bgDots} alt='' />
                <InstallButton />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
