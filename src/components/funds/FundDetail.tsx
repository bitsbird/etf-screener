import { FC } from 'react';
import Style from './fundDetail.module.css';
import DataProp from '../base/data-prop/DataProp';
interface Props {
  name: string;
  symbol?: string;
  isin: string;
  benchmarIndex: string;
  expenseRatio: number;
}

const FundDetail: FC<Props> = ({ props }) => {
  const { name, symbol, isin, benchmarIndex, expenseRatio } = props;
  return (
    <div className={Style.fundDetail}>
      <h1>{name}</h1>
      <DataProp label="Symbol" value={symbol} />
      <DataProp label="isin" value={isin} />
      <DataProp label="Index" value="AAA FFF GGG" />
      <div></div>
    </div>
  );
};

export default FundDetail;
