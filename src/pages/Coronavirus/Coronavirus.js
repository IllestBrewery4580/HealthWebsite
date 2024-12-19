import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/Common/CommonButton';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ReactApexChart from 'react-apexcharts';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const Coronavirus = () => {

    const [covidData, setCovidData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [historicalData, setHistoricalData] = useState(null);

    // Fetch COVID-19 Data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://disease.sh/v3/covid-19/all'); // Global stats
                setCovidData(response.data);
            } catch (error) {
                console.error('Error fetching COVID-19 data:', error);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []); // Runs only once on page load

    const chartOptions = {
        series: [
            {
                name: 'Statistics',
                data: covidData ? [covidData.cases, covidData.recovered, covidData.deaths] : [],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            xaxis: {
                categories: ['Total Cases', 'Recovered', 'Deaths'],
                title: { text: 'Stats' },
            },
            yaxis: {
                title: {
                    text: 'Count',
                },
            },
            title: {
                text: 'Global COVID-19 Statistics',
                align: 'center',
            },
        },
    };

    const buttonStyles = {
        fontSize: 16,
        fontWeight: 500,
        backgroundColor: '#1976d2', // Blue
        '&:hover': {
            backgroundColor: '#9c27b0', // Purple
        },
    };

    return (
        <Grid container spacing={2} style={{ padding: '16px' }}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center" gutterBottom>
                    COVID-19 Information
                </Typography>
            </Grid>

            {isLoading ? (
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <CircularProgress />
                    <Typography variant="body1" gutterBottom>
                        Loading data...
                    </Typography>
                </Grid>
            ) : error ? (
                <Grid item xs={12}>
                    <Typography variant="body1" color="error" align="center">
                        Unable to fetch data. Please try again later.
                    </Typography>
                </Grid>
            ) : (
                <>
                    <Grid item xs={12} md={8}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <ReactApexChart
                                options={chartOptions.options}
                                series={chartOptions.series}
                                type="bar"
                                height={350}
                            />
                        </Paper>
                    </Grid>

                    {/* Tips and Buttons Section */}
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} style={{ padding: '16px' }}>
                            <Typography variant="h6" gutterBottom>
                                Prevention Tips
                            </Typography>
                            <Typography variant="body1" component="ul" gutterBottom>
                                <li>Wash hands frequently</li>
                                <li>Wear a mask</li>
                                <li>Maintain social distancing</li>
                                <li>Avoid crowded places</li>
                                <li>Get vaccinated</li>
                            </Typography>
                            <CommonButton variant="contained" sx={buttonStyles} style={{ marginTop: '16px' }}>
                                Find Testing Centers
                            </CommonButton>
                            <CommonButton variant="outlined" sx={buttonStyles} style={{ marginTop: '16px' }}>
                                Learn more
                            </CommonButton>
                        </Paper>
                    </Grid>

                    {/* Additional Information Section */}
                    <Grid item xs={12}>
                        <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
                            <Typography variant="body1">
                                Stay informed about the latest updates on COVID-19 by following trusted sources like the{' '}
                                <a href="https://www.who.int" target="_blank" rel="noopener noreferrer">
                                    WHO
                                </a>{' '}
                                and{' '}
                                <a href="https://www.cdc.gov" target="_blank" rel="noopener noreferrer">
                                    CDC
                                </a>
                                .
                            </Typography>
                        </Paper>
                    </Grid>
                </>
            )}
        </Grid>
    );    
};    
    

export default Coronavirus;