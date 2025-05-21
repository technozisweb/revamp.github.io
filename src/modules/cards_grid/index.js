import styles from "./style.module.scss";

const CardsGrid = ({ data: cardsData = [] }) => {

  return (
    <div className={styles.grid}>
      {cardsData.map((card, index) => {
        const { title, description, image, icon, size } = card;
        return (
          //   <div className={`${styles.card} ${styles[size]}`} key={index}>
          //     {image && <img src={image} alt={title} className={styles.image} />}
          //     {icon && <div className={`${styles.icon} ${styles[icon]}`} />}
          //     <h3 className={styles.title}>{title}</h3>
          //     <p className={styles.description}>{description}</p>
          //   </div>
          <div className={`${styles.card} ${styles[size]}`} key={index}>
            {image ? (
              <img src={image} alt={title} className={styles.image} />
            ) : (
              <div className={`${styles.icon} ${styles[icon]}`} />
            )}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardsGrid;
