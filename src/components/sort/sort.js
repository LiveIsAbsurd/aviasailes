import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectSort } from '../function/actions';

import styles from './sort.module.sass';

const Sort = () => {
  const sort = useSelector((state) => state.sort);
  const dispatch = useDispatch();
  const buttonsArr = [
    { label: 'Самый дешёвый', id: 'price' },
    { label: 'Самый быстрый', id: 'duration' },
    { label: 'Опимальный', id: 'opt' },
  ];
  const buttons = buttonsArr.map((el, i) => {
    return (
      <li key={i} className={sort === el.id ? styles.select : ''}>
        <button onClick={() => dispatch(selectSort(el.id))} id={el.id}>
          {el.label}
        </button>
      </li>
    );
  });
  return <ul className={styles.filter}>{buttons}</ul>;
};

export default Sort;
