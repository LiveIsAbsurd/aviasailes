import React from 'react';

import styles from './trance-filter.module.sass';

const TranceFilter = () => {
  return (
    <div className={styles.filter}>
      <span>Количество пересадок</span>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            <div className={styles.checkbox}></div>
            Все
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <div className={styles.checkbox}></div>
            Без пересадок
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <div className={styles.checkbox}></div>1 пересадка
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <div className={styles.checkbox}></div>2 пересадки
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <div className={styles.checkbox}></div>3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
};

export default TranceFilter;
