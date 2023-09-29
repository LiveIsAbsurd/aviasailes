import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './trance-filter.module.sass';

const TranceFilter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const checks = useSelector((state) => state.allFilters).map((el, i) => {
    return (
      <li key={i}>
        <label>
          <input
            id={el.id}
            type="checkbox"
            onChange={(e) => {
              checkChange(e);
            }}
            checked={filter.includes(el.id) ? true : false}
          />
          <div className={styles.checkbox}></div>
          {el.label}
        </label>
      </li>
    );
  });

  const checkChange = (e) => {
    dispatch({ type: 'FILTER', value: e.target.id });
  };

  return (
    <div className={styles.filter}>
      <span>Количество пересадок</span>
      <ul>{checks}</ul>
    </div>
  );
};

export default TranceFilter;
