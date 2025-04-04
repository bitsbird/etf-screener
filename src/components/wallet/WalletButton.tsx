import { ReactComponent as WalletSvg } from '../../assets/wallet.svg';
import BaseButton from '../base/base-button/BaseButton';
import { FC } from 'react';
import Styles from './WalletButton.module.css';

interface Props {
  action?: 'add' | 'remove';
}
const actionConfig = {
  default: { title: 'Portfilio', text: '' },
  add: { title: 'Add to portfolio', text: '+' },
  remove: { title: 'Remove', text: 'x' },
};

const WalletButton: FC<Props> = ({ action }) => {
  let actionTitle = actionConfig.default.title;
  let actionText = actionConfig.default.text;
  if (action) {
    actionTitle = actionConfig[action].title;
    actionText = actionConfig[action].text;
  }
  return (
    <div className={Styles.WalletButton}>
      <BaseButton type="transparent" title={actionTitle}>
        <WalletSvg />
        <div className={Styles.Action}>{actionText}</div>
      </BaseButton>
    </div>
  );
};

export default WalletButton;
