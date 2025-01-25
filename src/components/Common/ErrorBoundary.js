import React from 'react';
import { SettingsOverscanOutlined } from "@mui/icons-material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import SomeComponent from './components/SomeComponent';
import Health from './pages/Health/Health';
import MedicalInformation from './pages/Medical Information/MedicalInformation';
import HealthDashboard from './pages/Health Dashboard/HealthDashboard';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true }; // Update state to display fallback UI
    }

    // This lifecycle method is used to log error details or perform side effects
    componentDidCatch(error, errorInfo) {
        console.error("Error caught:", error, errorInfo);
    }

    // This method is called when an error is caught and is used to render a fallback UI
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

const App =() => (
    <ErrorBoundary>
        <Router>
            <Routes>
                <Route path="/" element={<SomeComponent />} />
                <Route path="health" element={<Health />} />
                <Route path="medical-information" element={<MedicalInformation />} />
                <Route path="health-dashboard" element={<HealthDashboard />} />
                {/* Add more routes as necessary */}
                <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
        </Router>
    </ErrorBoundary>
);

export default App;