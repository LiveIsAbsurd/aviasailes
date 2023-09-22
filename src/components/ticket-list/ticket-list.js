import React from 'react';

import Ticket from '../ticket/ticket';

import styles from './ticket-list.module.sass';

const TicketList = () => {
  return (
    <div className={styles.list}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <button>Показать еще 5 билетов!</button>
    </div>
  );
};
export default TicketList;
