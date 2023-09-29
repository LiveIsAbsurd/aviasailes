import { getTickets, getId } from './actions';

export const getData = (id, dispatch) => {
  let stop;
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
    .then((response) => {
      return response.json();
    })
    .then((list) => {
      stop = list.stop;
      dispatch(getTickets(list.tickets));
      if (!stop) {
        getData(id, dispatch);
      } else {
        return;
      }
    })
    .catch(() => {
      if (!stop) {
        getData(id, dispatch);
      } else {
        return;
      }
    });
};

export const getID = () => {
  return (dispatch) => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((data) => data.json())
      .then((id) => {
        dispatch(getId(id.searchId));
        getData(id.searchId, dispatch);
      });
  };
};
