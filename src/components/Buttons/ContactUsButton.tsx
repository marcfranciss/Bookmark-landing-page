import style from "./contactUsButton.module.sass";

interface ContactUsButtonProps {
  onclick: () => void;
}
export const ContactUsButton = ({ onclick }: ContactUsButtonProps) => {
  return (
    <button type='button' className={style.btn_contact} onClick={onclick}>
      Contact Us
    </button>
  );
};
