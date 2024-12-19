import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/Common/CommonButton';
import { styled } from '@mui/system';
import Chart from 'react-apexcharts';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';

const StyledCard = styled(Card)({
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
    textAlign: 'center',
});

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

const hydrationChartOptions = {
    chart: { id: 'hydration-chart' },
    xaxis: { categories: ['8AM', '10AM', '12PM', '2PM', '4PM', '6PM', '8PM'] },
    colors: ['#00bcd4'], // Light blue
    dataLabels: { enabled: false },
};

const hydrationChartSeries = [
    { name: 'Water Intake (ml)', data: [200, 400, 600, 800, 1000, 1200, 1500] },
];

const Hydration = () => {
    return (
        <Grid container spacing={2} style={{ padding: '16px' }}>
            {/* Header */}
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <h1 style={{ color: '#1976d2' }}>Hydration Tracker</h1>
                <p>Stay hydrated by tracking your daily water intake!</p>
            </Grid>

            {/* User Input */}
            <Grid container spacing={2} style={{ marginTop: '16px' }}>
                <Grid item xs={6}>
                    <TextField fullWidth label="Enter Water Intake (ml)" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <CommonButton variant="contained" sx={buttonStyles}>
                        Add Water
                    </CommonButton>
                </Grid>
            </Grid>

            {/* Hydration Chart */}
            <Grid item xs={12} style={{ marginTop: '16px' }}>
                <Chart options={hydrationChartOptions} series={hydrationChartSeries} type="bar" height={300} />
            </Grid>

            {/* Daily Goals and Stats */}
            <Grid container spacing={2} style={{ marginTop: '16px' }}>
                <Grid item xs={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Daily Goal</Typography>
                            <Typography variant="body2">2,000 ml</Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Consumed</Typography>
                            <Typography variant="body2">1,500 ml</Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Remaining</Typography>
                            <Typography variant="body2">500 ml</Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
            </Grid>

            {/* Footer */}
            <Grid item xs={12} style={{ textAlign: 'center', marginTop: '32px' }}>
                <p style={{ color: '#666' }}>
                    &copy; {new Date().getFullYear()} Hydration Inc. All rights reserved.
                </p>
            </Grid>
        </Grid>
    );
};


export default Hydration;