import React from 'react';

import styles from './trance-filter.module.sass';

export default class TranceFilter extends React.Component {
  render() {
    return (
      <div className={styles.filter}>
        <span>Количество пересадок</span>
        <ul>
          <li>
            <input type="checkbox" />
            Все
          </li>
          <li>
            <input type="checkbox" />
            Без пересадок
          </li>
        </ul>
      </div>
    );
  }
}
