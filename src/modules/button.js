import styles from './styles/style.module.scss'
const Button = ({ text = "", bgColor = "#fff", color = "#262626", width ='' }) => {
  return (
    <div
      className={`${styles.buttonContainer} ${styles[width]}`}
      style={{ background: bgColor, color: color }}
    >
      {text}
    </div>
  );
};

export default Button;
