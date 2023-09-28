import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Ticket from '../ticket/ticket';

import { getTickets, getID } from './../function/getTickets';
import styles from './ticket-list.module.sass';
const TicketList = () => {
  const data = useSelector((state) => state.tickets);
  const searchId = useSelector((state) => state.searchId);
  useEffect(() => {
    if (!searchId) {
      dispatch(getID());
    } else {
      console.log('ggg');
      dispatch(getTickets());
    }
  }, [searchId, data]);
  const dispatch = useDispatch();
  const tickets = data.map((el, i) => {
    return <Ticket key={i} price={el.price} />;
  });
  return (
    <div className={styles.list}>
      {tickets}
      <button>Показать еще 5 билетов!</button>
    </div>
  );
};
export default TicketList;
