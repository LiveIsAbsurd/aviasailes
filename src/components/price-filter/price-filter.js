import React from 'react';

import styles from './price-filter.module.sass';

const PriceFilter = () => {
  return (
    <table className={styles.filter}>
      <th className={styles.select}>
        <button>Самый дешевый</button>
      </th>
      <th>
        <button>Самый быстрый</button>
      </th>
      <th>
        <button>Опимальный</button>
      </th>
    </table>
  );
};

export default PriceFilter;
