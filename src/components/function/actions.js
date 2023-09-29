export const showMore = () => {
  return { type: 'SHOWE_MORE' };
};

export const getTickets = (list) => {
  return { type: 'GET_TICKETS', value: list };
};

export const getId = (id) => {
  return { type: 'GET_ID', value: id };
};

export const selectSort = (select) => {
  return { type: 'SELECT_SORT', value: select };
};
