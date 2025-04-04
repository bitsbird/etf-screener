import React from 'react';
import Style from './headings.module.css';

interface Heading {
  children: React.ReactNode;
}

export const H1: React.FC<Heading> = ({ children }) => <h1 className={Style.h1}>{children}</h1>;

export const H2: React.FC<Heading> = ({ children }) => <h2 className={Style.h2}>{children}</h2>;

export const H3: React.FC<Heading> = ({ children }) => <h3 className={Style.h3}>{children}</h3>;

export const H4: React.FC<Heading> = ({ children }) => <h4 className={Style.h4}>{children}</h4>;

export const H5: React.FC<Heading> = ({ children }) => <h5 className={Style.h5}>{children}</h5>;

export const H6: React.FC<Heading> = ({ children }) => <h6 className={Style.h6}>{children}</h6>;
