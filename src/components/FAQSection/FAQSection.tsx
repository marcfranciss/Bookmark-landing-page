import { MoreInfoButton } from "../Buttons/MoreInfoButton";
import "./FAQSection.module.sass";

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
  return (
    <section id='s-FAQ'>
      <article className='FAQ-header'>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </article>
      <div className='FAQ-accordion'>
        {FAQArr.map((detail) => {
          return (
            <dl key={detail.title}>
              <dt>{detail.title}</dt>
              <dd>{detail.description}</dd>
            </dl>
          );
        })}
      </div>
      <MoreInfoButton />
    </section>
  );
};
