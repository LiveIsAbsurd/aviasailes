import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Ticket from '../ticket/ticket';

import { getID } from './../function/getTickets';
import styles from './ticket-list.module.sass';
const TicketList = () => {
  const data = useSelector((state) => state.tickets);
  const searchId = useSelector((state) => state.searchId);
  useEffect(() => {
    if (!searchId) {
      dispatch(getID());
    }
  }, [searchId]);
  const dispatch = useDispatch();
  const tickets = data.slice(0, 5).map((el, i) => {
    return <Ticket key={i} item={el} />;
  });
  return (
    <div className={styles.list}>
      {tickets}
      <button>Показать еще 5 билетов!</button>
    </div>
  );
};
export default TicketList;
