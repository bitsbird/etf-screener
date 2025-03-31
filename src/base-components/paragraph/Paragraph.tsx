import { FC, ReactNode } from 'react';
import Style from './paragraph.module.css';

const Paragraph: FC<{ children: ReactNode }> = ({ children }) => {
  return <p className={Style.paragraph}>{children}</p>;
};

export default Paragraph;
