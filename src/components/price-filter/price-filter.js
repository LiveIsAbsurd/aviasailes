import React from 'react';

import styles from './price-filter.module.sass';

const PriceFilter = () => {
  return (
    <ul className={styles.filter}>
      <li className={styles.select}>
        <button>Самый дешевый</button>
      </li>
      <li>
        <button>Самый быстрый</button>
      </li>
      <li>
        <button>Опимальный</button>
      </li>
    </ul>
  );
};

export default PriceFilter;
