export const showMore = () => {
  return { type: 'SHOWE_MORE' };
};

export const getTickets = (list, order) => {
  return { type: 'GET_TICKETS', value: list, order: order };
};

export const selectSort = (select) => {
  return { type: 'SELECT_SORT', value: select };
};

export const error = () => {
  return { type: 'ERROR' };
};
