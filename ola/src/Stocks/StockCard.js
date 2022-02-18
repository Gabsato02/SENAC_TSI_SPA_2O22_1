import React from 'react';
import styles from './StockCard.module.css';

const StockCard = ({ name, price, last_price }) => {
  return (
    <div className={styles['stock-card']}>
      <span className={styles['stock-name']}>{name}</span>
      <span className={`${styles['stock-price']} ${price >= last_price ? 'positive' : 'negative'}`}>
        R$ {price}
      </span>
      <span className={`${styles['stock-price']}`}>R$ {last_price}</span>
    </div>
  );
};

export default StockCard;