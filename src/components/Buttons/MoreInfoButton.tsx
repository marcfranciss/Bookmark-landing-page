import styles from "./moreInfoButton.module.sass";

export const MoreInfoButton = () => {
  // using Debounce click events
  let isAnimating = false;

  const handleClick = () => {
    if (isAnimating) return;
    isAnimating = true;

    setTimeout(() => {
      isAnimating = false;
    }, 500);
  };
  return (
    <button type='button' className={styles.button_more} onClick={handleClick}>
      More Info
    </button>
  );
};
