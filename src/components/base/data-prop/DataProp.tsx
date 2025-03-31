import { FC } from 'react';
import Style from './DataProp.module.css';
import Paragraph from '../paragraph/Paragraph';

const DataProp: FC<{ label: string; value?: string }> = ({ label, value }) => {
  return (
    <div className={Style.dataProp}>
      <Paragraph>
        <span className={Style.label}>{label}: </span>
        <span className={Style.value}>{value}</span>
      </Paragraph>
    </div>
  );
};
export default DataProp;
