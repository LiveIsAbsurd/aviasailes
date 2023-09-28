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

export const getID = () => {
  return (dispatch) => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((data) => data.json())
      .then((id) => {
        dispatch({ type: 'GET_ID', value: id.searchId });
        fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id.searchId}`)
          .then((response) => {
            return response.json();
          })
          .then((list) => dispatch({ type: 'GET_TICKETS', value: list.tickets }))
          .catch((err) => {
            console.log(err);
          });
      });
  };
};
