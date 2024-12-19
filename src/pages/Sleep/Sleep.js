import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import CommonButton from '../../components/Common/CommonButton';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

const Sleep = () => {
    const [sleepHours, setSleepHours] = useState(''); // Track sleep hours entered by the user

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

    // Handle sleep hours input
    const handleSleepInput = (e) => {
        setSleepHours(e.target.value);
    };

    return (
        <Grid item xs={8} sx={{ backgroundColor: '#1976d2', padding: '16px', height: '100vh' }}>
            <h2 style={{ color: '#fff', marginBottom: '20px' }}>Sleep Tracking</h2>
            <p style={{ color: '#fff', marginBottom: '20px' }}>
                Tracking your sleep is essential for improving your overall health and well-being. How many hours did you sleep last night?
            </p>

            {/* Sleep Input Section */}
            <TextField
                label="Enter Hours of Sleep"
                type="number"
                variant="outlined"
                fullWidth
                value={sleepHours}
                onChange={handleSleepInput}
                sx={{ marginBottom: '20px' }}
            />

            {/* Sleep Quality Tooltip */}
            <Tooltip title="Tip: Aim for 7-9 hours of sleep each night for optimal health.">
                <CommonButton variant="outlined" sx={buttonStyles}>
                    Sleep Tips
                </CommonButton>
            </Tooltip>

            {/* Action Buttons */}
            <CommonButton variant="contained" sx={buttonStyles} style={{ marginTop: '10px' }}>
                Track Sleep
            </CommonButton>

            <CommonButton variant="outlined" sx={buttonStyles} style={{ marginTop: '10px', marginLeft: '16px' }}>
                View Sleep History
            </CommonButton>
        </Grid>
    );
};

export default Sleep;