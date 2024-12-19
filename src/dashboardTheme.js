import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Make sure to import Link
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Drawer, List, ListItem, ListItemText, Collapse, ListItemButton } from '@mui/material';
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
import Settings from './pages/Settings/Settings';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';

export const dashboardTheme = createTheme({ 
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '16px', 
                    fontWeight: 500,
                    borderRadius: '8px',
                },
                contained: {
                    backgroundColor: '#1976d2', 
                    '&:hover': {
                        backgroundColor: '#004ba0', 
                    },
                },
                outlined: {
                    borderColor: '#9c27b0',
                    color: '#9c27b0',
                    '&:hover': {
                        backgroundColor: 'rgba(75, 0, 130, 0.8)', 
                    },
                },
            },
        },
    },
    palette: {
        primary: {
            main: '#1976d2',
            light: '#63a4ff',
            dark: '#004ba0',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#9c27b0',
            light: '#d05ce3',
            dark: '#6a0080',
            contrastText: '#ffffff',
        },
        error: {
            main: '#d32f2f',
        },
        warning: {
            main: '#ff9800',
        },
        success: {
            main: '#2e7d32',
        },
        info: {
            main: '#0288d1',
        },
        background: {
            default: '#f5f5f5',
        },
        text: {
            primary: '#333333',
            secondary: '#757575',
        },
    },
    typography: {
        fontFamily: [
            '"-apple-system"',
            '"BlinkMacSystemFont"',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Heue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    spacing: [4, 8, 12, 16, 20]
});

const App = () => {
    const [openPulse, setOpenPulse] = useState(false); // Correct placement of useState and Dropdown toggle

    const togglePulseMenu = () => setOpenPulse(prev => !prev);

    return (
        <ThemeProvider theme={dashboardTheme}>
            <CssBaseline />
            <Router>
                <div style={{ display: 'flex'}}>
                    <Drawer
                        variant="permanent"
                        anchor="left"
                        sx={{
                            width: 240,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: 240,
                                boxSizing: 'border-box',
                            },
                        }}
                    >
                        <List>
                            {/* Dropdown Pulse Menu */}
                            <ListItem onClick={togglePulseMenu}>
                                <ListItemText primary="Pulse" />
                            </ListItem>
                            <Collapse in={openPulse} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton component={Link} to="/pulse" sx={{ pl: 4 }}>
                                        <ListItemText primary="Overview" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItemText primary="Details" /> 
                                    </ListItemButton>
                                </List>
                            </Collapse>

                            {/* Static Menu Items */}
                            <ListItem component={Link} to="/pulse">
                                <ListItemText primary="Pulse" />
                            </ListItem>
                            <ListItem component={Link} to="/health">
                                <ListItemText primary="Health" />
                            </ListItem>
                            <ListItem component={Link} to="/thermostat">
                                <ListItemText primary="Thermostat" />
                            </ListItem>
                            <ListItem component={Link} to="/fitness">
                                <ListItemText primary="Fitness" />
                            </ListItem>
                            <ListItem component={Link} to="/weight">
                                <ListItemText primary="Weight" />
                            </ListItem>
                            <ListItem component={Link} to="/sleep">
                                <ListItemText primary="Sleep" />
                            </ListItem>
                            <ListItem component={Link} to="/hydration">
                                <ListItemText primary="Hydration" />
                            </ListItem>
                            <ListItem component={Link} to="/mood">
                                <ListItemText primary="Mental Health" />
                            </ListItem>
                            <ListItem component={Link} to="/medical-info">
                                <ListItemText primary="Medical Information" />
                            </ListItem>
                            <ListItem component={Link} to="/cholesterol">
                                <ListItemText primary="Cholesterol" />
                            </ListItem>
                            <ListItem component={Link} to="/covid">
                                <ListItemText primary="Coronavirus" />
                            </ListItem>
                            <ListItem component={Link} to="/vaccines">
                                <ListItemText primary="Vaccines" />
                            </ListItem>
                            <ListItem component={Link} to="/settings">
                                <ListItemText primary="Settings" />
                            </ListItem>        
                        </List>    
                    </Drawer>
                
                
                    <main style={{ flexGrow: 1, padding: '20px' }}>
                        <Routes>
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
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </main>
                </div>        
            </Router>
        </ThemeProvider>
    );
};    

ReactDOM.render(<App />, document.getElementById('root'));