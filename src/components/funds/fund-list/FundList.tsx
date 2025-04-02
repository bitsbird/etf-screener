import { FC } from 'react';
import Styles from './FundList.module.css';
import { useContext } from 'react';
import { FundContext } from '../FundContext';
import { H2, H3 } from '../../base/headings/Headings';
import DataProp from '../../base/data-prop/DataProp';
const FundList: FC = () => {
  const { fundList } = useContext(FundContext);
  return (
    <div className={Styles.FundList}>
      {fundList.map((fund) => (
        <div key={fund.isin} className={Styles.Item}>
          <div className={Styles.Header}>
            <H2>{fund.name}</H2>
          </div>
          <DataProp label="ISIN" value={fund.isin} />
          <DataProp label="Benchmark Index" value={fund.benchmark_index} />
          <DataProp
            label="Expense Ratio"
            value={fund.expense_ratio ? String(fund.expense_ratio) : ''}
          />
        </div>
      ))}
    </div>
  );
};

export default FundList;
