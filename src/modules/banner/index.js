import Button from "../button";
import styles from "./style.module.scss";

const BannerSection = () => {
  return (
    <div className={styles.bannerSection}>
      <div className={styles.bannerContent}>
        <div className={styles.textContainer}>
          <h1>Want to scale with us?</h1>
          <p>
            Talk to one of our solution experts and start building your team.
          </p>
          {/* <Button
            text="Start Your Evaluation"
            bgColor="#2e6edf"
            color="#fff"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
