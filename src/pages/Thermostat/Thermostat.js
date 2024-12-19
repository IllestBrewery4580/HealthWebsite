import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid'
import CommonButton from '../../components/Common/CommonButton';
import { styled } from '@mui/system';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SettingsIcon from '@mui/icons-material/Settings';

const Thermostat = () => {
    const [temperature, setTemperature] = useState(22); // Default temperature set to 22°C
    const [mode, setMode] = useState('cooling'); // Default mode is cooling

    // UseEffect to set the title when the component mounts
    useEffect(() => {
        document.title = "Thermostat Control"; 
    }, []);

    const buttonStyles = {
        fontSize: 20,
        fontWeight: 200,
        backgroundColor: '#1976d2', // Blue
        '&:hover': {
            backgroundColor: '#9c27b0', // Purple
        },
        '&.MuiButton-outlined': {
            color: '#d32f2f', // Red text color
            borderColor: '#2e7d32', // Green border color
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    };

    // Handle temperature slider change
    const handleTemperatureChange = (event, newValue) => {
        setTemperature(newValue);
    };

    // Handle mode change (Cooling, Heating, Fan)
    const handleModeChange = (newMode) => {
        setMode(newMode);
    };

    return (
        <Grid item xs={8} sx={{ backgroundColor: '#1976d2', padding: '16px' }}>
            <h2 style={{ color: '#fff' }}>Thermostat Control</h2>
            <p style={{ color: '#fff' }}>Adjust your room's temperature and control the heating or cooling mode.</p>

            {/* Temperature Display */}
            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: '#fff' }}>Current Temperature: {temperature}°C</h3>
            </div>

            {/* Temperature Slider */}
            <Slider
                value={temperature}
                min={10}
                max={30}
                step={1}
                onChange={handleTemperatureChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value}°C`}
                sx={{ width: '100%', color: '#fff' }}
            />

            {/* Mode Control */}
            <div style={{ marginTop: '20px' }}>
                <Tooltip title="Cooling Mode">
                    <IconButton
                        sx={{ color: mode === 'cooling' ? '#2196f3' : '#fff' }}
                        onClick={() => handleModeChange('cooling')}
                    >
                        <AcUnitIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Heating Mode">
                    <IconButton
                        sx={{ color: mode === 'heating' ? '#ff5722' : '#fff' }}
                        onClick={() => handleModeChange('heating')}
                    >
                        <WhatshotIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Reset Temperature">
                    <IconButton
                        sx={{ color: '#fff' }}
                        onClick={() => setTemperature(22)} // Reset to 22°C
                    >
                        <SettingsIcon />
                    </IconButton>
                </Tooltip>
            </div>

            {/* Action Buttons */}
            <CommonButton variant="contained" sx={buttonStyles} style={{ marginTop: '20px' }}>
                Apply Changes
            </CommonButton>

            <CommonButton variant="outlined" sx={buttonStyles} style={{ marginTop: '10px' }}>
                Set Default Temperature
            </CommonButton>
        </Grid>
    );
};

export default Thermostat;