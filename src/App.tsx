import { FC } from 'react';
import Style from './App.module.css';
import SearchFund from './components/funds/search-fund/SearchFund';
import { H1 } from './components/base/headings/Headings';
import { FundProvider } from './components/funds/FundContext';
import FundList from './components/funds/fund-list/FundList';
const App: FC = () => {
  return (
    <div className={Style.App}>
      <FundProvider>
        <header>
          <div className={Style.Header}>
            <div className={Style.HeaderContent}>
              <H1>ETF Screener</H1>
              <SearchFund />
            </div>
          </div>
        </header>
        <div className={Style.Scrollable}>
          <main className={Style.MainContent}>
            <FundList />
          </main>
        </div>
      </FundProvider>
    </div>
  );
};

export default App;
