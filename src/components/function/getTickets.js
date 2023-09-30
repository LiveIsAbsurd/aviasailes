import { getTickets, error } from './actions';
let stop;
export const getData = (id, dispatch, recall = false) => {
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
    .then((response) => {
      return response.json();
    })
    .then((list) => {
      stop = list.stop;
      if (!recall) {
        dispatch(getTickets(list.tickets, 'first'));
      } else {
        dispatch(getTickets(list.tickets, 'continue'));
      }
      if (!stop) {
        getData(id, dispatch, true);
      } else {
        dispatch(getTickets(list.tickets, 'stop'));
      }
    })
    .catch((err) => {
      if (!stop) {
        getData(id, dispatch, true);
      } else if (err.message == '500') {
        return;
      } else {
        dispatch(error());
      }
    });
};

export const getID = () => {
  return (dispatch) => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((data) => data.json())
      .then((id) => {
        getData(id.searchId, dispatch);
      })
      .catch((err) => {
        if (err.message != '500') {
          dispatch(error());
        }
      });
  };
};
