import React from 'react';

import Logo from './images/S7 Logo.svg';
import styles from './ticket.module.sass';

const Ticket = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.price}>{item.price} Р</div>
        <img src={Logo} className={styles.logo}></img>
      </div>
      <table className={styles.data}>
        <tbody>
          <tr>
            <th>{`${item.segments[0].origin} - ${item.segments[0].destination}`}</th>
            <th>В ПУТИ</th>
            <th>
              {item.segments[0].stops.length === 0 ? 'БЕЗ ПЕРЕСАДОК' : `${item.segments[0].stops.length} ПЕРЕСАДОК`}
            </th>
          </tr>
          <tr>
            <td>10:45 – 08:00</td>
            <td>21ч 15м</td>
            <td>{item.segments[0].stops.join(', ')}</td>
          </tr>
          <tr>
            <th>{`${item.segments[1].origin} - ${item.segments[1].destination}`}</th>
            <th>В ПУТИ</th>
            <th>
              {item.segments[1].stops.length === 0 ? 'БЕЗ ПЕРЕСАДОК' : `${item.segments[1].stops.length} ПЕРЕСАДОК`}
            </th>
          </tr>
          <tr>
            <td>10:45 – 08:00</td>
            <td>21ч 15м</td>
            <td>{item.segments[1].stops.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ticket;
