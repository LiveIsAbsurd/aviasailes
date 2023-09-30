import React, { useEffect } from 'react';
import { Spin, Alert } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { showMore } from '../function/actions';
import Ticket from '../ticket/ticket';

import { getID } from './../function/getTickets';
import styles from './ticket-list.module.sass';
const TicketList = () => {
  const data = useSelector((state) => state.tickets);
  const loading = useSelector((state) => state.loading);
  const filter = useSelector((state) => state.filter);
  const count = useSelector((state) => state.ticketCount);
  const sort = useSelector((state) => state.sort);
  const error = useSelector((state) => state.error);
  const allLoading = useSelector((state) => state.allLoading);
  useEffect(() => {
    dispatch(getID());
  }, []);
  const dispatch = useDispatch();
  const tickets = data.filter((el) => {
    const count = String(el.segments[0].stops.length);
    if (filter.includes('ALL')) {
      return el;
    } else if (filter.includes(count)) {
      return el;
    }
  });
  const filtredTickets = tickets
    .sort((prev, next) => {
      if (sort === 'price') {
        return prev.price - next.price;
      } else if (sort === 'duration') {
        return prev.segments[0].duration - next.segments[0].duration;
      } else if (sort === 'opt') {
        const opt1 = prev.price + prev.segments[0].duration;
        const opt2 = next.price + next.segments[0].duration;
        return opt1 - opt2;
      }
    })
    .slice(0, count)
    .map((el, i) => {
      return <Ticket key={i} item={el} />;
    });
  let content;
  if (loading) {
    content = <Spin size="large" style={{ display: 'block', margin: '50px auto' }} />;
  } else if (error) {
    content = <Alert message="Ошибка" description="Произошла какая-то ошибка :(" type="error" showIcon />;
  } else if (filtredTickets.length === 0) {
    content = <div className={styles.notfound}>Рейсов, подходящих под заданные фильтры, не найдено</div>;
  } else {
    content = filtredTickets;
  }
  const button = <button onClick={() => dispatch(showMore())}>Показать еще 5 билетов!</button>;
  return (
    <div className={styles.list}>
      {allLoading && filtredTickets.length !== 0 ? <Spin className={styles.allLoad} /> : null}
      {content}
      {(loading && !error) || filtredTickets.length === 0 ? null : button}
    </div>
  );
};
export default TicketList;
