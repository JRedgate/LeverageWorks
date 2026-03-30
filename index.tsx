import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import { Layout } from './src/components/Layout';
import { HomePage } from './src/pages/HomePage';
import { FirmPage } from './src/pages/FirmPage';
import { CapabilitiesPage } from './src/pages/CapabilitiesPage';
import { ImpactPage } from './src/pages/ImpactPage';
import { ContactPage } from './src/pages/ContactPage';
import { LeverageAuditPage } from './src/pages/LeverageAuditPage';
import { FractionalCTOCalgaryPage } from './src/pages/FractionalCTOCalgaryPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="firm" element={<FirmPage />} />
          <Route path="capabilities" element={<CapabilitiesPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="leverage-audit" element={<LeverageAuditPage />} />
          <Route path="fractional-cto-calgary" element={<FractionalCTOCalgaryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>
);
