import { Routes, Route } from 'react-router-dom';
import Pulse from './pages/Pulse/Pulse';
import Health from './pages/Health/Health';
import MedicalInformation from './pages/Medical Information/MedicalInformation';
import Coronavirus from './pages/Coronavirus/coronavirus';

const RoutesConfig = () => (
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="health" element={<Health />} />
        <Route path="medical-information" element={<MedicalInformation />} />
        <Route path="Covid" element={<Coronavirus />} />
        {/* Add more routes as necessary */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
);

export default RoutesConfig;