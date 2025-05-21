import { isEmpty } from "lodash";
import ConcurrentText from "../concurrent_text";
import styles from "./style.module.scss";

const DetailsCards = ({ data = {} }) => {
  const {
    detailsTiles = [],
    header = "",
    bgColor = "",
    iconBgColor = "",
    concurrentTextData = {},
  } = data;

  return (
    <div className={styles.quickViewCards} style={{ background: bgColor }}>
      <div className={styles.quickViewCardsSection}>
        {isEmpty(concurrentTextData) ? (
          <p className={styles.heading}>{header}</p>
        ) : (
          <ConcurrentText data={concurrentTextData}  />
        )}

        <div className={styles.cardsWrapper}>
          {detailsTiles.map((tile, idx) => (
            <div className={styles.cardContainer} key={idx}>
              <div
                className={styles.cardIcon}
                style={{ backgroundColor: iconBgColor }}
              >
                <img src={tile.icon} />
              </div>
              <p className={styles.cardTitle}>{tile.label}</p>
              <p className={styles.cardDescription}>{tile.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DetailsCards;
