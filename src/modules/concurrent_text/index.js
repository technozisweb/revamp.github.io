import styles from "./style.module.scss";

const ConcurrentText = ({ data = {} }) => {
  const {
    title = "",
    description = "",
    background = "",
    buttonText = "",
    padding = "",
    rediectionLink = "",
  } = data;
  return (
    <div className={styles.concurrentText} style={{ background, padding }}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.rightContainer}>
          <p className={styles.description}>{description}</p>
          <a href={rediectionLink} target="_blank">
            <button className={styles.button}>{buttonText}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConcurrentText;
