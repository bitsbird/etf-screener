import React from 'react';
import Style from './headings.module.css';

export const H1: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className={Style.h1}>{children}</h1>
);

export const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className={Style.h2}>{children}</h1>
);

export const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className={Style.h3}>{children}</h1>
);

export const H4: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className={Style.h4}>{children}</h1>
);

export const H5: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className={Style.h5}>{children}</h1>
);

export const H6: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className={Style.h6}>{children}</h1>
);
