import React from 'react';

import styles from './ticket.module.sass';

const Ticket = ({ item }) => {
  const depDate0 = new Date(item.segments[0].date);
  const duration0 = item.segments[0].duration;
  const depDate1 = new Date(item.segments[1].date);
  const duration1 = item.segments[1].duration;
  const arrivalDate0 = new Date(depDate0.getTime() + duration0 * 60000);
  const arrivalDate1 = new Date(depDate1.getTime() + duration1 * 60000);
  const flightTime0 = `${Math.floor(duration0 / 60)}ч ${Math.floor(duration0 % 60)}м`;
  const flightTime1 = `${Math.floor(duration1 / 60)}ч ${Math.floor(duration1 % 60)}м`;
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.price}>{item.price} Р</div>
        <img src={`http://pics.avs.io/110/36/${item.carrier}.png`}></img>
      </div>
      <table className={styles.data}>
        <tbody>
          <tr>
            <th>{`${item.segments[0].origin} - ${item.segments[0].destination}`}</th>
            <th>В ПУТИ</th>
            <th>
              {item.segments[0].stops.length === 0
                ? 'БЕЗ ПЕРЕСАДОК'
                : item.segments[0].stops.length === 1
                ? `${item.segments[0].stops.length} ПЕРЕСАДКА`
                : `${item.segments[0].stops.length} ПЕРЕСАДКИ`}
            </th>
          </tr>
          <tr>
            <td>
              {`${depDate0.getHours()}:${depDate0.getMinutes()} - ${arrivalDate0.getHours()}:${arrivalDate0.getMinutes()}`}
            </td>
            <td>{`${flightTime0}`}</td>
            <td>{item.segments[0].stops.join(', ')}</td>
          </tr>
          <tr>
            <th>{`${item.segments[1].origin} - ${item.segments[1].destination}`}</th>
            <th>В ПУТИ</th>
            <th>
              {item.segments[1].stops.length === 0
                ? 'БЕЗ ПЕРЕСАДОК'
                : item.segments[1].stops.length === 1
                ? `${item.segments[1].stops.length} ПЕРЕСАДКА`
                : `${item.segments[1].stops.length} ПЕРЕСАДКИ`}
            </th>
          </tr>
          <tr>
            <td>
              {`${depDate1.getHours()}:${depDate1.getMinutes()} - ${arrivalDate1.getHours()}:${arrivalDate1.getMinutes()}`}
            </td>
            <td>{`${flightTime1}`}</td>
            <td>{item.segments[1].stops.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ticket;
