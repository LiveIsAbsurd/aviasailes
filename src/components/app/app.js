import TranceFilter from '../trance-filter/trance-filter';
import Sort from '../sort';
import TicketList from '../ticket-list';
import logo from '../../images/Logo.svg';

import appStyles from './app.module.sass';

function App() {
  return (
    <div className={appStyles.main}>
      <img className={appStyles.logo} src={logo}></img>
      <div className={appStyles.wrapper}>
        <TranceFilter />
        <div>
          <Sort />
          <TicketList />
        </div>
      </div>
    </div>
  );
}

export default App;
