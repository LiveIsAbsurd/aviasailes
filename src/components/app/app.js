import TranceFilter from '../trance-filter/trance-filter';
import PriceFilter from '../price-filter';
import logo from '../../images/Logo.svg';

import appStyles from './app.module.sass';

function App() {
  return (
    <div className={appStyles.main}>
      <img className={appStyles.logo} src={logo}></img>
      <div className={appStyles.wrapper}>
        <TranceFilter />
        <div>
          <PriceFilter />
        </div>
      </div>
    </div>
  );
}

export default App;
