import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './trance-filter.module.sass';

const TranceFilter = () => {
  const filter = useSelector((state) => state.filter);
  console.log(filter);
  const dispatch = useDispatch();
  const arr = [
    { label: 'ВСЕ', id: 'ALL' },
    { label: 'БЕЗ ПЕРЕСАДОК', id: '0' },
    { label: '1 ПЕРЕСАДКА', id: '1' },
    { label: '2 ПЕРЕСАДКИ', id: '2' },
    { label: '3 ПЕРЕСАДКИ', id: '3' },
  ];
  const checks = arr.map((el, i) => {
    return (
      <li key={i}>
        <label>
          <input
            id={el.id}
            type="checkbox"
            onChange={(e) => {
              checkChange(e);
            }}
            checked={filter.includes(el.id) || filter.includes('ALL') ? true : false}
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
