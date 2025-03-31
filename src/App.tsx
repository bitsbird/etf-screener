import { FC } from 'react';
import Style from './App.module.css';
import FundDetail from './funds/FundDetail';
import InputSearch from './base-components/input-search/InputSearch';
const App: FC = () => {
  return (
    <div className={Style.App}>
      <header>
        <div className={Style.Header}>
          <div className={Style.HeaderContent}>
            <h1>ETF Screener</h1>
            <InputSearch />
          </div>
        </div>
      </header>
      <div className={Style.Scrollable}>
        <main className={Style.MainContent}>
          <FundDetail />
        </main>
      </div>
    </div>
  );
};

export default App;
