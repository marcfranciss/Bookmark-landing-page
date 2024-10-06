import { ContactUsButton } from "../Buttons/ContactUsButton";

export const CTASection = () => {
  return (
    <section id='s-CTA'>
      <article className='CTA-header'>
        <h2>35,000+ already joined</h2>
        <p>Stay up-to-date with what we’re doing</p>
      </article>
      <div className='CTA-actions'>
        <input
          type='email'
          name=''
          id=''
          placeholder='Enter your email address'
        />
      </div>
      <ContactUsButton />
    </section>
  );
};
