import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import Logo from './images/S7 Logo.svg';
import styles from './ticket.module.sass';

const Ticket = () => {
  // const filter = useSelector((state) => state.filter);
  // console.log(count);
  // const dispatch = useDispatch();
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.price}>13 400 Р</div>
        <img src={Logo} className={styles.logo}></img>
      </div>
      <table className={styles.data}>
        <tbody>
          <tr>
            <th>MOW – HKT</th>
            <th>В ПУТИ</th>
            <th>2 пересадки</th>
            {/* <button onClick={() => dispatch({ type: 'FILTER', value: 0 })}>click</button> */}
          </tr>
          <tr>
            <td>10:45 – 08:00</td>
            <td>21ч 15м</td>
            <td>HKG, JNB</td>
          </tr>
          <tr>
            <th>MOW – HKT</th>
            <th>В ПУТИ</th>
            <th>1 пересадка</th>
          </tr>
          <tr>
            <td>10:45 – 08:00</td>
            <td>21ч 15м</td>
            <td>HKG, JNB</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ticket;
