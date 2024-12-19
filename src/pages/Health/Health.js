import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/Common/CommonButton';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Chart from 'react-apexcharts';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Box, Button } from '@mui/material';

const HealthAlerts = () => {
    const [alerts, setAlerts] = useState([
        { id: 1, message: 'Recall on certain brands of protein powder due to contamination.' },
        { id: 2, message: 'New study reveals benefits of walking 10,000 steps a day for heart health.' },
        { id: 3, message: 'Stay hydrated during heatwaves – aim for 8 cups of water daily.' },
    ]);

    return (
        <Box>
            <Typography variant="h5" gutterBottom>Health Alerts</Typography>
            {alerts.map(alert => (
                <Card key={alert.id} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant="body1">{alert.message}</Typography>
                    </CardContent>
                </Card>
            ))}
            <Button variant="contained" color="primary">View All Alerts</Button>
        </Box>
    );
};

const Health = () => {
    // UseEffect to set the title when the component mounts
    useEffect(() => {
        document.title = "Health"; 
    }, []); // Empty dependency array ensures this runs only once on component load

    const buttonStyles = {
        fontSize: 20,
        fontWeight: 200,
        backgroundColor: '#1976d2', // Blue
        '&:hover': {
            backgroundColor: '#9c27b0', // Purple
        },
    };

    const chartOptions = {
        chart: { id: "health-stats" },
        xaxis: {
            categories: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Oct", "Nov", "Dec"],
        },
        colors: ["#1976d2"],
        dataLabels: { enabled: false },
    };

    const chartSeries = [
        { name: "Calories Burned", data: [200, 300, 400, 500, 600] },
    ];

    return (
        <Grid container spacing={2} style={{ padding: '16px' }}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Typography variant="h4" style={{ color: '#1976d2' }}>
                    Welcome to the Health Page
                </Typography>
                <Typography variant="body1">
                    Track your health and schedule appointments with ease.
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Enter Weight (kg)" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Enter Height (cm)" variant="outlined" />
            </Grid>

            <Grid item xs={12}>
                <CommonButton variant="contained" sx={buttonStyles}>
                    Submit
                </CommonButton>
            </Grid>

            <Grid item xs={12} style={{ marginTop: '16px' }}>
                <Chart options={chartOptions} series={chartSeries} type="bar" height={300} />
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={2} style={{ marginTop: '16px' }}>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Heart Rate</Typography>
                                <Typography variant="body2">72 bpm</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Steps Today</Typography>
                                <Typography variant="body2">10,000 steps</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Calories Burned</Typography>
                                <Typography variant="body2">500 kcal</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

            {/* Health Alerts Section */}
            <Grid item xs={12} style={{ marginTop: '32px' }}>
                <HealthAlerts />
            </Grid>

            <Grid item xs={12} style={{ textAlign: 'center', marginTop: '32px' }}>
                <Typography variant="body2" style={{ color: '#666' }}>
                    &copy; {new Date().getFullYear()} HealthCare Inc. All rights reserved.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Health;