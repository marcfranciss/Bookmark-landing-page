import style from "./CTASection.module.sass";
import { ContactUsButton } from "../Buttons/ContactUsButton";
import { useState } from "react";

export const CTASection = () => {
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [emailVal, setEmailVal] = useState<string>("");

  const handleNewsletter = () => {
    const emailRegEx = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (emailVal === "") {
      setIsEmailError(true);
    } else {
      emailRegEx.test(emailVal)
        ? setIsEmailError(false)
        : setIsEmailError(true);
    }
  };
  return (
    <section id='s-CTA' className={style.s_CTA}>
      <div className={style.container}>
        <article className={style.CTA_header}>
          <h2>35,000+ already joined</h2>
          <p>Stay up-to-date with what we’re doing</p>
        </article>
        <div className={style.CTA_actions}>
          <div
            className={`${style.email_box} ${isEmailError && style.isError}`}>
            <div className={style.email_container}>
              <input
                type='email'
                name=''
                id=''
                placeholder='Enter your email address'
                value={emailVal}
                onChange={(e) => setEmailVal(e.target.value)}
              />
              {isEmailError && (
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'>
                  <g fill='none' fillRule='evenodd'>
                    <circle cx='10' cy='10' r='10' fill='#FA5959' />
                    <g fill='#FFF' transform='translate(9 5)'>
                      <rect width='2' height='7' rx='1' />
                      <rect width='2' height='2' y='8' rx='1' />
                    </g>
                  </g>
                </svg>
              )}
            </div>
            <div className={style.error_details}>
              Whoops, make sure it’s an email
            </div>
          </div>
          <ContactUsButton onclick={handleNewsletter} />
        </div>
      </div>
    </section>
  );
};
