import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './main.css';
import App from './App.tsx';
import FundList from './components/funds/fund-list/FundList';

import Portfolio from './components/porfolio/Porfolio.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<FundList />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
