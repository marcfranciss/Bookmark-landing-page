import style from "./installButton.module.sass";

export const InstallButton = () => {
  return (
    <button type='button' className={style.installer}>
      Add & Install Extension
    </button>
  );
};
