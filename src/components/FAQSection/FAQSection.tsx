import { useState } from "react";
import { MoreInfoButton } from "../Buttons/MoreInfoButton";
import style from "./FAQSection.module.sass";
import { useInView } from "react-intersection-observer";

const FAQArr = [
  {
    title: "What is Bookmark?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    title: "How can I request a new browser?",
    description:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    title: "Is there a mobile app?",
    description:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    title: "What about other Chromium browsers?",
    description:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

export const FAQSection = () => {
  const [currIndex, setCurrIndex] = useState<number>(1);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id='s-FAQ'>
      <div
        ref={ref}
        style={{ opacity: 0 }}
        className={`${style.container} ${inView ? "inView" : ""}`}>
        <article className={style.FAQ_header}>
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </article>
        <div className={style.FAQ_accordion}>
          {FAQArr.map((detail, index) => {
            return (
              <dl key={detail.title}>
                <dt>
                  <button
                    className={style.expander}
                    aria-controls={`dd${index}`}
                    aria-expanded={currIndex === index ? true : false}
                    aria-label={detail.title}
                    onClick={() => setCurrIndex(index)}>
                    {detail.title}
                    <svg
                      className={currIndex === index ? style.isActive : ""}
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='12'>
                      <path
                        fill='none'
                        stroke='#5267DF'
                        strokeWidth='3'
                        d='M1 1l8 8 8-8'
                      />
                    </svg>
                  </button>
                </dt>
                <dd
                  id={`dd${index}`}
                  className={
                    currIndex === index ? style.isShown : style.isHidden
                  }>
                  {detail.description}
                </dd>
              </dl>
            );
          })}
        </div>
        <MoreInfoButton />
      </div>
    </section>
  );
};
