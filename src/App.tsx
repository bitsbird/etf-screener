import { FC } from 'react';
import Style from './App.module.css';
import SearchFund from './components/funds/search-fund/SearchFund';
const App: FC = () => {
  return (
    <div className={Style.App}>
      <header>
        <div className={Style.Header}>
          <div className={Style.HeaderContent}>
            <h1>ETF Screener</h1>
            <SearchFund />
          </div>
        </div>
      </header>
      <div className={Style.Scrollable}>
        <main className={Style.MainContent}></main>
      </div>
    </div>
  );
};

export default App;
