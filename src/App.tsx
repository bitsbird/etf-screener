import { FC } from 'react';
import Style from './App.module.css';
import { Outlet } from 'react-router';
import SearchFund from './components/funds/search-fund/SearchFund';
import { H1 } from './components/base/headings/Headings';
import { FundProvider } from './components/funds/FundContext';
import WalletButton from './components/wallet/WalletButton';
const App: FC = () => {
  return (
    <div className={Style.App}>
      <FundProvider>
        <header>
          <div className={Style.Header}>
            <div className={Style.HeaderContent}>
              <div>
                <div className={Style.Title}>
                  <H1>ETF Screener</H1>
                </div>
                <SearchFund />
              </div>
              <div>
                <WalletButton />
              </div>
            </div>
          </div>
        </header>
        <div className={Style.Scrollable}>
          <main className={Style.MainContent}>
            <Outlet />
          </main>
        </div>
      </FundProvider>
    </div>
  );
};

export default App;
