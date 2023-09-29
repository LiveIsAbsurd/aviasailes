export const getTickets = (id) => {
  return (dispach) => {
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
      .then((data) => data.json())
      .then((list) => {
        console.log(list);
        dispach({ type: 'GET_TICKETS', value: list });
      });
    dispach({ type: 'COUNT' });
  };
};

export const getData = (id, dispatch) => {
  let stop;
  fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
    .then((response) => {
      return response.json();
    })
    .then((list) => {
      stop = list.stop;
      dispatch({ type: 'GET_TICKETS', value: list.tickets });
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
        dispatch({ type: 'GET_ID', value: id.searchId });
        getData(id.searchId, dispatch);
      });
  };
};
