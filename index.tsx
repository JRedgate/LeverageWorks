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
import { AIAutomationConsultingPage } from './src/pages/AIAutomationConsultingPage';
import { DigitalTransformationPage } from './src/pages/DigitalTransformationPage';
import { BusinessProcessAutomationPage } from './src/pages/BusinessProcessAutomationPage';
import { ManufacturingPage } from './src/pages/industries/ManufacturingPage';
import { EnergyServicesPage } from './src/pages/industries/EnergyServicesPage';
import { PropertyManagementPage } from './src/pages/industries/PropertyManagementPage';
import { ConstructionPage } from './src/pages/industries/ConstructionPage';
import { WhyTransformationsFailArticle } from './src/pages/insights/WhyTransformationsFailArticle';
import { WhatFractionalCTODoesArticle } from './src/pages/insights/WhatFractionalCTODoesArticle';
import { CostOfManualDataEntryArticle } from './src/pages/insights/CostOfManualDataEntryArticle';
import { InsightsPage } from './src/pages/InsightsPage';
import { CalculatorPage } from './src/pages/CalculatorPage';

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
          <Route path="coordination-tax-calculator" element={<CalculatorPage />} />
          <Route path="fractional-cto-calgary" element={<FractionalCTOCalgaryPage />} />
          <Route path="ai-automation-consulting" element={<AIAutomationConsultingPage />} />
          <Route path="digital-transformation-consulting" element={<DigitalTransformationPage />} />
          <Route path="business-process-automation" element={<BusinessProcessAutomationPage />} />
          <Route path="industries/manufacturing" element={<ManufacturingPage />} />
          <Route path="industries/energy-services" element={<EnergyServicesPage />} />
          <Route path="industries/property-management" element={<PropertyManagementPage />} />
          <Route path="industries/construction" element={<ConstructionPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="insights/why-digital-transformations-fail" element={<WhyTransformationsFailArticle />} />
          <Route path="insights/what-does-a-fractional-cto-do" element={<WhatFractionalCTODoesArticle />} />
          <Route path="insights/cost-of-manual-data-entry" element={<CostOfManualDataEntryArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>
);
