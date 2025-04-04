import Styles from './BaseButton.module.css';
import { FC, ReactNode } from 'react';
interface Props {
  children?: ReactNode;
  type?: 'transparent';
  title: string;
}
const BaseButton: FC<Props> = ({ children, type, title }) => {
  const classes =
    type && type === 'transparent'
      ? `${Styles.BaseButton} ${Styles.TransparentButton}`
      : Styles.BaseButton;
  return (
    <button className={classes} title={title}>
      {children}
    </button>
  );
};

export default BaseButton;
