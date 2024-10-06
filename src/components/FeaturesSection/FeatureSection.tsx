import { LazyLoadImage } from "react-lazy-load-image-component";
import "./featureSection.sass";
import { useState } from "react";
import feature1 from "../../assets/images/illustration-features-tab-1.svg";
import feature2 from "../../assets/images/illustration-features-tab-2.svg";
import feature3 from "../../assets/images/illustration-features-tab-3.svg";
import { MoreInfoButton } from "../Buttons/MoreInfoButton";

const featureNav = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

const featureContent = [
  {
    image: feature1,
    header: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    image: feature2,
    header: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    image: feature3,
    header: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];
export const FeatureSection = () => {
  const [currIndex, setCurrIndex] = useState<number>(0);
  return (
    <section id='s-feature'>
      <div className='container'>
        <article className='feature-article'>
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </article>
        <nav className='feature-nav'>
          {featureNav.map((text, index) => {
            return (
              <button
                type='button'
                className={`btn-feature ${currIndex === index ? "active" : ""}`}
                key={text}
                onClick={() => setCurrIndex(index)}>
                <span>{text}</span>
              </button>
            );
          })}
        </nav>
        <div className='feature-details-container'>
          {featureContent.map((details, index) => {
            return (
              <div
                key={details.header}
                className={`feature-details ${
                  currIndex === index ? "show" : "hide"
                }`}>
                <div className='feature-image__container'>
                  <div className='feature-image'>
                    <LazyLoadImage src={details.image} alt={details.header} />
                  </div>
                </div>
                <div className='feature-text'>
                  <h2>{details.header}</h2>
                  <p>{details.text}</p>
                  <MoreInfoButton />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
