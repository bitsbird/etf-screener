import { createContext, FC, useState, useEffect } from 'react';
import type { FundAPISummary, FundAPIFund } from '../../data/FundAPITypes';

interface FundContextType {
  funds: FundAPIFund[];
  fundList: FundAPISummary[];
  setFunds: (funds: FundAPIFund[]) => void;
}

export const FundContext = createContext<FundContextType>({
  funds: [],
  fundList: [],
  setFunds: () => {},
});

export const FundProvider: FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [funds, setFunds] = useState<FundAPIFund[]>([]);
  const [fundList, setFundList] = useState<FundAPISummary[]>([]);
  useEffect(() => {
    const fundList = funds.map((fund) => ({
      isin: fund.summary.isin,
      name: fund.summary.name,
      benchmark_index: fund.summary.benchmark_index,
      expense_ratio: fund.summary.expense_ratio,
    }));
    setFundList(fundList);
  }, [funds]);

  return (
    <FundContext.Provider value={{ funds, fundList, setFunds }}>{children}</FundContext.Provider>
  );
};
