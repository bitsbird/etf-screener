import { ReactComponent as WalletSvg } from '../../assets/wallet.svg';
import BaseButton from '../base/base-button/BaseButton';
import { FC } from 'react';
import Styles from './WalletButton.module.css';

interface Props {
  action?: 'add' | 'remove';
}

const WalletButton: FC<Props> = ({ action }) => {
  const actionText = action === 'add' ? '+' : action === 'remove' ? 'x' : '';
  return (
    <div className={Styles.WalletButton}>
      <BaseButton type="transparent" title="portfolio">
        <WalletSvg />
        <div className={Styles.Action}>{actionText}</div>
      </BaseButton>
    </div>
  );
};

export default WalletButton;
