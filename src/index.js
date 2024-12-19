import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'; // Ensure this is imported

// Make sure to import your components correctly
import Pulse from './pages/Pulse/Pulse';
import Health from './pages/Health/Health';
import Thermostat from './pages/Thermostat/Thermostat';
import Fitness from './pages/Fitness/Fitness';
import Weight from './pages/Weight/Weight';
import Sleep from './pages/Sleep/Sleep';
import Nutrition from './pages/Nutrition/Nutrition';
import Hydration from './pages/Hydration/Hydration';
import MentalHealth from './pages/MentalHealth/MentalHealth';
import MedicalInformation from './pages/Medical Information/MedicalInformation';
import Cholesterol from './pages/Cholesterol/Cholesterol';
import Coronavirus from './pages/Coronavirus/Coronavirus';
import Vaccines from './pages/Vaccines/Vaccines';
import { dashboardTheme } from './dashboardTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={dashboardTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="pulse" element={<Pulse />} />
          <Route path="health" element={<Health />} />
          <Route path="thermo" element={<Thermostat />} />
          <Route path="fitness" element={<Fitness />} />
          <Route path="weight" element={<Weight />} />
          <Route path="sleep" element={<Sleep />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="hydration" element={<Hydration />} />
          <Route path="mood" element={<MentalHealth />} />
          <Route path="medical-information" element={<MedicalInformation />} />
          <Route path="Cholesterol" element={<Cholesterol />} />
          <Route path="Covid" element={<Coronavirus />} />
          <Route path="Vaccines" element={<Vaccines />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
