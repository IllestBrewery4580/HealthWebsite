import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import CommonButton from '../../components/Common/CommonButton';
import { styled } from '@mui/system';
import Chart from 'react-apexcharts'; // For charts (optional)
import { TextField, Snackbar, Alert } from '@mui/material';
import { CircularProgress } from '@mui/material';

const Weight = () => {
    const [weight, setWeight] = useState('');
    const [goal, setGoal] = useState('');
    const [weightHistory, setWeightHistory] = useState([]);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [goalAchieved, setGoalAchieved] = useState(false);
    const [loading, setLoading] = useState(false); // For handling loading state

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

    const handleSubmitWeight = () => {
        if (weight) {
            setLoading(true); // Start loading animation
            setTimeout(() => {
                setWeightHistory([
                    ...weightHistory,
                    { date: new Date().toLocaleDateString(), weight }
                ]);
                setWeight('');
                setLoading(false); // Stop loading animation
                if (goal && parseFloat(weight) >= parseFloat(goal)) {
                    setGoalAchieved(true);
                }
            }, 1000); // Simulate async operation (e.g., saving data)
        }
    };

    const handleSetGoal = () => {
        if (goal) {
            alert(`Goal set to: ${goal} lbs`);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
        setGoalAchieved(false);
    };

    const chartOptions = {
        chart: {
            type: 'line',
            height: 350,
        },
        xaxis: {
            categories: weightHistory.map(item => item.date),
        },
        series: [
            {
                name: 'Weight',
                data: weightHistory.map(item => parseFloat(item.weight)),
            },
        ],
    };

    return (
        <Grid item xs={8} sx={{ backgroundColor: '#1976d2', padding: '16px' }}>
            <h2>Weight Monitoring</h2>

            {/* Weight Input Field */}
            <TextField
                label="Enter Your Weight (lbs)"
                variant="outlined"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                sx={{ marginBottom: '16px' }}
            />
            <CommonButton
                variant="contained"
                sx={buttonStyles}
                onClick={handleSubmitWeight}
            >
                {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Add Weight'}
            </CommonButton>

            <br />
            {/* Goal Setting */}
            <TextField
                label="Set Your Weight Goal (lbs)"
                variant="outlined"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                sx={{ marginBottom: '16px', marginTop: '16px' }}
            />
            <CommonButton
                variant="outlined"
                sx={buttonStyles}
                onClick={handleSetGoal}
            >
                Set Goal
            </CommonButton>

            {/* Weight History Chart */}
            {weightHistory.length > 0 && (
                <Chart options={chartOptions} series={chartOptions.series} type="line" height={350} />
            )}

            {/* Goal Achievement Snackbar */}
            {goalAchieved && (
                <Snackbar
                    open={goalAchieved}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                >
                    <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                        Congratulations! You've reached your weight goal.
                    </Alert>
                </Snackbar>
            )}
        </Grid>
    );
};



export default Weight;