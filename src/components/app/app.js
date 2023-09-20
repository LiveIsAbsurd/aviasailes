import TranceFilter from '../trance-filter/trance-filter';
import logo from '../../images/Logo.svg';

import appStyles from './app.module.sass';

function App() {
  return (
    <div className={appStyles.main}>
      <img className={appStyles.logo} src={logo}></img>
      <TranceFilter />
    </div>
  );
}

export default App;
